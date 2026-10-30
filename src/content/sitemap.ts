/**
 * Full site map of the final website: every page that will exist, its URL and its status.
 * Drives the navbar menus, breadcrumbs, the "being prepared" pages and the HTML sitemap.
 * `live: true` = built with real content now; otherwise the page shows the "being prepared" layout.
 */

export type PageNode = { href: string; title: string; blurb?: string; live?: boolean; children?: PageNode[] };

const p = (href: string, title: string, blurb?: string, live = false, children?: PageNode[]): PageNode => ({ href, title, blurb, live, children });

export const productsTree: PageNode = p("/products/", "Products", "Cooling towers, treatment plants, chemicals and spares.", true, [
  p("/products/cooling-towers/", "FRP Cooling Towers", "Induced-draft and natural-draft FRP towers.", true, [
    p("/products/cooling-towers/round-bottle/", "Round Bottle Cooling Tower", undefined, true),
    p("/products/cooling-towers/square-single-cell/", "Square Single-Cell Cooling Tower"),
    p("/products/cooling-towers/square-multi-cell/", "Square Multi-Cell Cooling Tower"),
    p("/products/cooling-towers/cross-flow/", "Cross Flow Cooling Tower"),
    p("/products/cooling-towers/double-flow-cross-flow/", "Double-Flow Cross Flow Cooling Tower"),
    p("/products/cooling-towers/natural-draft/", "Natural Draft Cooling Tower"),
  ]),
  p("/products/water-treatment-plants/", "Water Treatment Plants", "Filtration, softening, DM and membrane plants.", false, [
    p("/products/water-treatment-plants/reverse-osmosis-plant/", "Reverse Osmosis (RO) Plant"),
    p("/products/water-treatment-plants/large-reverse-osmosis-plant/", "Large RO Plant"),
    p("/products/water-treatment-plants/ultra-filtration-plant/", "Ultra Filtration Plant"),
    p("/products/water-treatment-plants/nano-filtration-plant/", "Nano Filtration Plant"),
    p("/products/water-treatment-plants/pressure-sand-filter/", "Multi-Grade / Pressure Sand Filter"),
    p("/products/water-treatment-plants/activated-carbon-filter/", "Activated Carbon Filter"),
    p("/products/water-treatment-plants/water-softening-plant/", "Water Softening Plant"),
    p("/products/water-treatment-plants/dm-mixed-bed-plant/", "DM & Mixed Bed Plant"),
  ]),
  p("/products/effluent-sewage-treatment/", "Effluent & Sewage Treatment", "ETP and STP equipment.", false, [
    p("/products/effluent-sewage-treatment/sewage-treatment-plant/", "Sewage Treatment Plant"),
    p("/products/effluent-sewage-treatment/clarifiers/", "Clarifiers"),
    p("/products/effluent-sewage-treatment/flash-mixer-flocculator/", "Flash Mixer & Flocculator"),
    p("/products/effluent-sewage-treatment/pipe-flocculator/", "Pipe Flocculator"),
    p("/products/effluent-sewage-treatment/cross-flow-mbr/", "Cross Flow MBR"),
    p("/products/effluent-sewage-treatment/filter-press/", "Filter Press"),
  ]),
  p("/products/water-treatment-chemicals/", "Water Treatment Chemicals", "Treatment programmes by water system.", false, [
    p("/products/water-treatment-chemicals/cooling-water-chemicals/", "Cooling Water Treatment Chemicals"),
    p("/products/water-treatment-chemicals/boiler-water-chemicals/", "Boiler Water Treatment Chemicals"),
    p("/products/water-treatment-chemicals/ro-chemicals/", "RO Membrane Chemicals"),
    p("/products/water-treatment-chemicals/chilled-water-treatment/", "Chilled Water Treatment"),
    p("/products/water-treatment-chemicals/etp-coagulants-flocculants/", "ETP Coagulants & Flocculants"),
  ]),
  p("/products/spares/", "Spares & Accessories", "Membranes, media, valves, pumps and more."),
]);

export const solutionsTree: PageNode = p("/solutions/", "Solutions", "Problem-led solutions for your plant's water.", false, [
  p("/solutions/industrial-water-treatment/", "Industrial Water Treatment"),
  p("/solutions/cooling-water-management/", "Cooling Water Management"),
  p("/solutions/effluent-sewage-treatment/", "Effluent & Sewage Treatment"),
  p("/solutions/zero-liquid-discharge/", "Zero Liquid Discharge & Recycling"),
  p("/solutions/turnkey-projects/", "Turnkey Projects"),
  p("/solutions/operation-maintenance/", "Operation & Maintenance / AMC"),
]);

export const industriesTree: PageNode = p("/industries/", "Industries", "Water challenges and solutions by industry.", false, [
  p("/industries/textile/", "Textile & Processing"),
  p("/industries/pharmaceutical-chemical/", "Pharmaceutical & Chemical"),
  p("/industries/food-beverage/", "Food & Beverage"),
  p("/industries/engineering-manufacturing/", "Engineering & Manufacturing"),
]);

export const companyTree: PageNode = p("/about/", "About Us", "The Aakar story, group and team.", false, [
  p("/about/", "About the Company"),
  p("/about/group-companies/", "Group Companies"),
  p("/about/leadership/", "Leadership"),
  p("/about/mission-vision-values/", "Mission, Vision & Values"),
  p("/clients/", "Clients"),
  p("/testimonials/", "Testimonials", undefined, true),
  p("/careers/", "Careers"),
]);

export const otherPages: PageNode[] = [
  p("/contact/", "Contact Us", undefined, true),
  p("/privacy-policy/", "Privacy Policy"),
  p("/credits/", "Image Credits", undefined, true),
  p("/site-map/", "Sitemap", undefined, true),
];

export const trees = [productsTree, solutionsTree, industriesTree, companyTree];

/** Flat list of every unique page (home included). */
export function allPages(): PageNode[] {
  const out = new Map<string, PageNode>([["/", p("/", "Home", undefined, true)]]);
  const walk = (n: PageNode) => { if (!out.has(n.href)) out.set(n.href, n); n.children?.forEach(walk); };
  trees.forEach(walk);
  otherPages.forEach(walk);
  return [...out.values()];
}

/** Parent chain for breadcrumbs. */
export function findTrail(href: string): PageNode[] {
  for (const t of [...trees, ...otherPages.map((x) => ({ ...x }))]) {
    const trail: PageNode[] = [];
    const dfs = (n: PageNode): boolean => {
      trail.push(n);
      if (n.href === href) return true;
      for (const c of n.children ?? []) if (c.href !== n.href && dfs(c)) return true;
      trail.pop();
      return false;
    };
    if (dfs(t)) return trail;
  }
  return [];
}

/** Siblings for "related pages" on stub pages. */
export function siblingsOf(href: string): PageNode[] {
  const trail = findTrail(href);
  const parent = trail[trail.length - 2];
  return (parent?.children ?? []).filter((c) => c.href !== href && c.href !== parent.href);
}

/** What each kind of upcoming page will contain. */
export function plannedFor(href: string): { blurb: string; planned: string[] } {
  if (href.startsWith("/products/")) {
    const depth = href.split("/").filter(Boolean).length;
    if (depth === 2) return { blurb: "The full range in this product family, with a guide to choosing the right one.", planned: ["Product range overview", "Selection guide", "Applications", "Photo gallery", "Downloadable brochure", "Request a quote"] };
    return { blurb: "A detailed product page with working principle, specifications and applications.", planned: ["Overview & working principle", "Technical specifications", "Applications", "Photos & drawings", "Related products", "Request a quote"] };
  }
  if (href.startsWith("/solutions/")) return { blurb: "How Aakar approaches this problem: from the first study to operation after commissioning.", planned: ["The problem it solves", "Our approach & process", "What we need from you", "Equipment & chemicals involved", "Project references", "Request a consultation"] };
  if (href.startsWith("/industries/")) return { blurb: "The water and effluent challenges of this industry and the Aakar systems that address them.", planned: ["Water challenges in this industry", "Relevant systems & products", "Client references", "Enquiry checklist"] };
  if (href === "/about/") return { blurb: "The Aakar story: history, group, capabilities and the way we work.", planned: ["Company history since 1972", "In-house design & manufacturing", "Our capabilities", "Quality & approach"] };
  if (href === "/about/group-companies/") return { blurb: "The companies of the Aakar group and what each one does.", planned: ["Zion (1972)", "Aakar Marketing & Engineering Pvt Ltd", "Aakar Engineers", "Zion Aquasol", "Aakar Consultants"] };
  if (href === "/about/leadership/") return { blurb: "The people who lead Aakar Engineers.", planned: ["Founder", "Sales & service", "Administration"] };
  if (href === "/about/mission-vision-values/") return { blurb: "What Aakar stands for and how we work with customers.", planned: ["Mission", "Vision", "Values: integrity, customer first, commitment, respect"] };
  if (href === "/clients/") return { blurb: "The organisations Aakar has worked with, by industry, with selected installations.", planned: ["Client list by industry", "Selected installations", "Project photographs"] };
  if (href === "/careers/") return { blurb: "Open roles in sales, service and engineering, and what it is like to work at Aakar.", planned: ["Current openings", "Working at Aakar", "How to apply"] };
  if (href === "/privacy-policy/") return { blurb: "How we handle information submitted through this website.", planned: ["Information we collect", "How we use it", "Contact for privacy questions"] };
  return { blurb: "This page is being prepared.", planned: [] };
}
