/**
 * Central content for the demo. Every fact here comes from aakarengineers.com
 * (Oct 2026 crawl) unless marked `confirm: true`, which means it must be
 * confirmed with Aakar before the production launch.
 */

export const SHOW_DEMO_NOTES = process.env.NEXT_PUBLIC_DEMO_NOTES === "true"; // set NEXT_PUBLIC_DEMO_NOTES=true to show "confirm before launch" tags

export const site = {
  name: "Aakar Engineers",
  est: 1992,
  url: process.env.SITE_URL ?? "https://aakarengineers.com",
  email: "info@aakarengineers.com",
  phones: {
    sales: { display: "+91 79 2640 9000", tel: "+917926409000" },
    mobile: { display: "+91 96625 24100", tel: "+919662524100" },
    registered: { display: "+91 79 2550 2700", tel: "+917925502700" },
  },
  whatsapp: "919662524100", // confirm: number must be active on WhatsApp
  offices: {
    sales: {
      label: "Sales office",
      lines: ["A 402-404, Wallstreet 2", "Opp. Orient Club, Ellisbridge", "Ahmedabad 380 006, Gujarat"],
      map: "https://www.google.com/maps/search/?api=1&query=Wallstreet+2+Opp+Orient+Club+Ellisbridge+Ahmedabad+380006",
    },
    registered: {
      label: "Registered office",
      lines: ["C-2, Usha Kiran", "Opp. Khanpur Gate, Khanpur", "Ahmedabad 380 001, Gujarat"],
      map: "https://www.google.com/maps/search/?api=1&query=Usha+Kiran+Opp+Khanpur+Gate+Khanpur+Ahmedabad+380001",
    },
  },
};

export function whatsappLink(text = "Hello Aakar Engineers, I would like to discuss a requirement.") {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}

export const nav = [
  { href: "/products/", label: "Products" },
  { href: "/solutions/", label: "Solutions" },
  { href: "/industries/", label: "Industries" },
  { href: "/about/", label: "Company" },
  { href: "/contact/", label: "Contact" },
];

/* ---------- Product catalogue (verified from category pages) ---------- */

export type Category = {
  slug: string;
  no: string;
  name: string;
  short: string;
  items: { name: string; href?: string }[];
  live: boolean;
};

export const categories: Category[] = [
  {
    slug: "cooling-towers",
    no: "01",
    name: "FRP Cooling Towers",
    short: "Induced-draft and natural-draft FRP towers for process, HVAC and generator cooling.",
    live: true,
    items: [
      { name: "Round bottle", href: "/products/cooling-towers/round-bottle/" },
      { name: "Square, single cell" },
      { name: "Square, multi cell" },
      { name: "Cross flow" },
      { name: "Double-flow cross flow" },
      { name: "Natural draft (fan-less, fill-less)" },
    ],
  },
  {
    slug: "water-treatment-plants",
    no: "02",
    name: "Water Treatment Plants",
    short: "Pre-treatment, softening, demineralisation and membrane plants, designed to your feed water.",
    live: false,
    items: [
      { name: "Reverse osmosis plant" },
      { name: "Large reverse osmosis plant" },
      { name: "Ultra filtration plant" },
      { name: "Nano filtration plant" },
      { name: "Multi-grade / pressure sand filter" },
      { name: "Activated carbon filter" },
      { name: "Water softening plant" },
      { name: "Demineralisation & mixed-bed plant" },
    ],
  },
  {
    slug: "effluent-sewage-treatment",
    no: "03",
    name: "Effluent & Sewage Treatment",
    short: "Treatment equipment plus the coagulants and flocculants that run it.",
    live: false,
    items: [
      { name: "Sewage treatment plant" },
      { name: "Clarifiers" },
      { name: "Flash mixer & flocculator" },
      { name: "Pipe flocculator" },
      { name: "Cross-flow MBR" },
      { name: "Filter press" },
      { name: "Coagulants: PAC, alum, ferrous sulphate, hydrated lime" },
      { name: "Polyelectrolytes: anionic, cationic, non-ionic, bio-polymer" },
    ],
  },
  {
    slug: "water-treatment-chemicals",
    no: "04",
    name: "Water Treatment Chemicals",
    short: "Treatment programmes by system: cooling, boiler, RO membrane and chilled water.",
    live: false,
    items: [
      { name: "Cooling water: antiscalants, corrosion inhibitors, dispersants, biocides" },
      { name: "Boiler water: oxygen scavengers, scale control, pH boosters, condensate treatment" },
      { name: "RO: antiscalants, biocides, cleaning chemicals" },
      { name: "Chilled water: closed-loop, nitrite and molybdate based" },
      { name: "Chlorine dioxide generators" },
    ],
  },
  {
    slug: "spares",
    no: "05",
    name: "Spares & Accessories",
    short: "Membranes, housings, media, valves and pumps to keep installed plants running.",
    live: false,
    items: [
      { name: "RO membranes, SS & FRP membrane housings" },
      { name: "FRP vessels, multi-port valves" },
      { name: "Sand, carbon, FAB & Tubedek media; DM and softener resins" },
      { name: "Dosing pumps, pumps, rotameters, pressure gauges" },
      { name: "Disc diffusers, distribution systems, couplings, O-rings" },
    ],
  },
];



/* ---------- The factory water loop (Home) ---------- */

export const loop = [
  {
    id: "intake",
    no: "01",
    name: "Raw water & pre-treatment",
    problem: "Suspended solids, organics and chlorine foul everything downstream, especially RO membranes.",
    supplies: ["Multi-grade / pressure sand filters", "Activated carbon filters", "Ultra filtration plants", "Media, vessels and multi-port valves"],
  },
  {
    id: "process",
    no: "02",
    name: "Process & boiler-feed water",
    problem: "Process and boiler water must be softened, demineralised or desalted to the quality the plant needs.",
    supplies: ["Reverse osmosis & large RO plants", "Water softening plants", "DM & mixed-bed plants", "RO antiscalants, biocides, cleaning chemicals", "RO membranes and housings"],
  },
  {
    id: "utilities",
    no: "03",
    name: "Cooling, boiler & chilled loops",
    problem: "Scale, corrosion and biological growth cut heat-transfer efficiency and shorten equipment life.",
    supplies: ["FRP cooling towers (5–750 TR round bottle range)", "Cooling-water antiscalants, inhibitors, biocides", "Boiler chemicals: O₂ scavengers, scale control, pH boosters", "Chilled-water treatment, chlorine dioxide generators"],
  },
  {
    id: "effluent",
    no: "04",
    name: "Effluent & sewage",
    problem: "Discharge limits, colour, COD and sludge handling decide whether a plant can keep operating.",
    supplies: ["Clarifiers, flash mixers, flocculators", "Cross-flow MBR, sewage treatment plants", "Filter press for sludge", "PAC, alum, polyelectrolytes, colour-removal chemicals"],
  },
  {
    id: "recycle",
    no: "05",
    name: "Recycle & zero liquid discharge",
    problem: "Rising water cost and discharge restrictions push plants to recover and reuse treated water.",
    supplies: ["Tertiary treatment, fine filtration (MF/UF/NF), RO", "Evaporation and crystallisation of the reject stream", "Dewatering of residual solids", "Turnkey design, installation and O&M"],
  },
];

export const problems = [
  { text: "Cooling tower water is running warmer than it should", to: "/products/cooling-towers/" },
  { text: "Boiler scaling or corrosion is costing fuel and uptime", to: "/products/water-treatment-chemicals/" },
  { text: "RO membranes foul or need frequent replacement", to: "/products/water-treatment-plants/" },
  { text: "Our effluent is not meeting discharge limits", to: "/products/effluent-sewage-treatment/" },
  { text: "We need someone to operate and maintain our ETP", to: "/solutions/" },
  { text: "We are planning zero liquid discharge or water reuse", to: "/solutions/" },
];

export const industries = [
  { name: "Textile & processing", line: "Coloured, high-COD effluent and pressure to recycle process water." },
  { name: "Pharmaceutical & chemical", line: "Purified process water, demanding effluent and reactor cooling." },
  { name: "Food & beverage", line: "Process-water quality, high-BOD effluent and steam systems." },
  { name: "Engineering & manufacturing", line: "Process cooling, generator sets and machinery heat loads." },
];

/** Names from the current aakarengineers.com client page (derived from logo filenames). Confirm + get permission. */
export const clientNames = [
  "Aditya Birla Group", "AIA Engineering", "Amoli Organics", "Arvind", "Cadila Healthcare", "Coca-Cola",
  "Havmor Ice Cream", "Mangalam Drugs & Organics", "Reliance Industries", "RSWM", "Sangam India",
  "Shilp Gravures", "Sintex Industries", "Tata", "Torrent Pharma", "Zydus Hospira",
];

/* ---------- Round bottle tower (verified from /our_product/round-bottle/) ---------- */

export const towerTypes = [
  { name: "Round bottle", flow: "Induced draft, counter flow", note: "Bottle-neck FRP shell", href: "/products/cooling-towers/round-bottle/" },
  { name: "Square, single cell", flow: "Induced draft, counter flow", note: "FRP square", href: "/products/cooling-towers/square-single-cell/" },
  { name: "Square, multi cell", flow: "Induced draft, counter flow", note: "Cells combined for larger duties", href: "/products/cooling-towers/square-multi-cell/" },
  { name: "Cross flow", flow: "Induced draft, cross flow", note: "FRP", href: "/products/cooling-towers/cross-flow/" },
  { name: "Double-flow cross flow", flow: "Induced draft, cross flow", note: "FRP, double flow", href: "/products/cooling-towers/double-flow-cross-flow/" },
  { name: "Natural draft", flow: "Natural draft, fan-less", note: "Fill-less or spray type", href: "/products/cooling-towers/natural-draft/" },
];

/* ---------- v2: photography + trust content ---------- */

export const photo = {
  hero: "/images/photos/hero-bottle-towers",
  towersHvac: "/images/photos/towers-hvac",
  towersField: "/images/photos/towers-field",
  ro: "/images/photos/ro-plant",
  aeration: "/images/photos/aeration-tank",
  stpAerial: "/images/photos/stp-aerial",
  clarifier: "/images/photos/clarifier-dosing",
  textile: "/images/photos/textile-meerut",
  spares: "/images/photos/spares-ro-membrane",
};

export const categoryPhoto: Record<string, { src?: string; alt: string }> = {
  "cooling-towers": { src: photo.towersField, alt: "Industrial cooling tower with pumps and pipework" },
  "water-treatment-plants": { src: photo.ro, alt: "Reverse osmosis water treatment plant with filter vessels" },
  "effluent-sewage-treatment": { src: photo.aeration, alt: "Aeration tank of a sewage treatment plant" },
  "water-treatment-chemicals": { src: photo.clarifier, alt: "Treatment basin walkway with chemical dosing equipment" },
  spares: { src: photo.spares, alt: "Layers of a spiral-wound reverse osmosis membrane element" },
};

/** Numbers shown in the proof strip. Only figures derivable from Aakar's own site. */
export const proof = [
  { n: "30+", l: "Years in cooling & water treatment", sub: "Aakar Engineers est. 1992" },
  { n: "5–750", l: "TR round bottle tower range", sub: "FRP, induced draft" },
  { n: "70+", l: "Products & spares", sub: "Across 5 product families" },
  { n: "1", l: "Team for equipment, chemicals & O&M", sub: "Single point of responsibility" },
];

export const solutions = [
  {
    id: "cooling",
    name: "Cooling water systems",
    photo: photo.towersHvac,
    alt: "Induced-draft cooling towers with green pipework on a rooftop",
    lead: "Keep chillers, condensers and process equipment at the temperature they were designed for.",
    text: "Scale, corrosion and biological growth reduce heat transfer and shorten equipment life. Aakar supplies the tower and the treatment programme that protects it.",
    supplies: ["FRP cooling towers, 6 types", "Antiscalants, corrosion inhibitors, dispersants", "Biocides and chlorine dioxide generators", "Fill media, pumps and spares"],
    href: "/products/cooling-towers/",
  },
  {
    id: "process",
    name: "Process & boiler-feed water",
    photo: photo.ro,
    alt: "Reverse osmosis plant with pressure vessels and control panel",
    lead: "Water of the quality your process and boilers need, from the raw water you have.",
    text: "Plants are designed to the customer's feed water. RO plants can be monitored and operated remotely by mobile, internet, Wi-Fi or Ethernet.",
    supplies: ["Reverse osmosis, UF and NF plants", "Softeners, DM and mixed-bed plants", "Pressure sand and activated carbon filters", "Boiler and RO treatment chemicals"],
    href: "/products/water-treatment-plants/",
  },
  {
    id: "effluent",
    name: "Effluent & sewage treatment",
    photo: photo.aeration,
    alt: "Activated sludge aeration tank at a sewage treatment plant in Bengaluru",
    lead: "Meet discharge limits consistently, without firefighting.",
    text: "Aakar designs and manufactures effluent treatment plants and their mechanical equipment, and supplies the coagulants and polyelectrolytes they run on.",
    supplies: ["Clarifiers, flash mixers, flocculators", "Cross-flow MBR, sewage treatment plants", "Filter press for sludge", "PAC, alum, polyelectrolytes, colour removal"],
    href: "/products/effluent-sewage-treatment/",
  },
  {
    id: "zld",
    name: "Zero liquid discharge & recycling",
    photo: photo.stpAerial,
    alt: "Aerial view of a wastewater treatment plant with circular tanks",
    lead: "Recover treated water for reuse and reduce what leaves the plant.",
    text: "Primary, secondary and tertiary treatment, fine filtration and RO, then evaporation of the reject and dewatering of solids, with recovered water reused in the plant. Each design is based on a study of the plant's effluent.",
    supplies: ["Treatability study and custom design", "MF / UF / NF and RO stages", "Evaporation and dewatering", "Turnkey mechanical, electrical, piping & civil"],
    href: "/solutions/",
  },
  {
    id: "om",
    name: "Operation & maintenance",
    photo: photo.clarifier,
    alt: "Walkway over treatment basins with dosing equipment",
    lead: "Specialists to run and maintain your ETP or ZLD plant.",
    text: "Aakar takes on operation & maintenance contracts for new and existing ETP and ZLD plants, for an agreed period and renewable, plus annual maintenance contracts.",
    supplies: ["O&M contracts for ETP and ZLD", "Annual maintenance contracts", "Chemical supply", "Spares and consumables"],
    href: "/solutions/",
  },
];

/** Industry → client names from Aakar's own client page (confirm before launch). */
export const industryClients = [
  { name: "Textile & processing", line: "Coloured, high-COD effluent and pressure to recycle process water.", clients: ["Arvind", "RSWM", "Sangam India", "Garden Vareli"] },
  { name: "Pharmaceutical & chemical", line: "Purified process water, demanding effluent and reactor cooling.", clients: ["Torrent Pharma", "Cadila Healthcare", "Zydus Hospira", "Amoli Organics"] },
  { name: "Food & beverage", line: "Process-water quality, high-BOD effluent and steam systems.", clients: ["Coca-Cola", "Havmor"] },
  { name: "Engineering & manufacturing", line: "Process cooling for machinery, moulding and generator sets.", clients: ["AIA Engineering", "Sintex", "Shilp Gravures"] },
];

export const clientLogos = [
  ["reliance-industries-limited", "Reliance Industries"], ["tata", "Tata"], ["aditya-birla-group", "Aditya Birla Group"], ["coca-cola", "Coca-Cola"],
  ["torrent-pharma", "Torrent Pharma"], ["arvind", "Arvind"], ["cadila-helthcare-ltd", "Cadila Healthcare"], ["zydus-hospira", "Zydus Hospira"],
  ["aia-engineering-ltd", "AIA Engineering"], ["sintex-ind-ltd", "Sintex Industries"], ["havmor-ice-cream", "Havmor Ice Cream"], ["rswm-limited", "RSWM"],
  ["sangamindialtd", "Sangam India"], ["mangalam-drugs-organics-ltd", "Mangalam Drugs & Organics"], ["amoli-organics", "Amoli Organics"], ["shilp-gravures-ltd", "Shilp Gravures"],
  ["garden-vareli", "Garden Vareli"], ["claris", "Claris"], ["finar", "Finar"], ["kikani-exports", "Kikani Exports"],
  ["laxcon", "Laxcon"], ["sona", "Sona"], ["tech-nova", "Tech Nova"], ["ams", "AMS"],
] as const;

export const whyAakar = [
  { icon: "factory", t: "Designed & built in-house", d: "Water treatment plants and effluent treatment equipment are designed and manufactured by Aakar." },
  { icon: "loop", t: "Equipment + chemistry + service", d: "One supplier for the plant, the chemicals it runs on, the spares, and its maintenance." },
  { icon: "bolt", t: "Energy-efficient towers", d: "Energy Efficiency Series and Non Blockage Design options on round bottle cooling towers." },
  { icon: "signal", t: "Remote monitoring", d: "RO plants can be monitored and operated remotely by mobile, internet, Wi-Fi or Ethernet." },
  { icon: "wrench", t: "O&M and AMC", d: "Operation & maintenance and annual maintenance contracts for new and existing plants." },
  { icon: "shield", t: "Support after commissioning", d: "Spares, chemicals and service from the same team that built your plant." },
];

export const steps = [
  { t: "Share your requirement", d: "Call, WhatsApp or send the form with your capacity, location and any water data." },
  { t: "Technical discussion", d: "Our engineers review it with you and visit the site where needed." },
  { t: "Techno-commercial offer", d: "A proposal with scope, equipment, chemicals and service terms." },
  { t: "Supply, install & support", d: "Manufacture, installation and commissioning, then spares and maintenance." },
];
