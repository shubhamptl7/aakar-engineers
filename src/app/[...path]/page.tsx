import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ComingSoon from "@/components/ComingSoon";
import { allPages } from "@/content/sitemap";

export const dynamicParams = false;

const stubs = () => allPages().filter((p) => !p.live);

export function generateStaticParams() {
  return stubs().map((p) => ({ path: p.href.split("/").filter(Boolean) }));
}

const find = (path: string[]) => stubs().find((p) => p.href === `/${path.join("/")}/`);

export async function generateMetadata({ params }: { params: Promise<{ path: string[] }> }): Promise<Metadata> {
  const page = find((await params).path);
  return { title: page ? page.title : "Not found", robots: { index: false, follow: true } };
}

export default async function Page({ params }: { params: Promise<{ path: string[] }> }) {
  const page = find((await params).path);
  if (!page) notFound();
  return <ComingSoon href={page.href} title={page.title} />;
}
