import { SHOW_DEMO_NOTES } from "@/content/site";

/** Marks content that needs Aakar's confirmation. Shown only with NEXT_PUBLIC_DEMO_NOTES=true. */
export default function DemoNote({ children }: { children: React.ReactNode }) {
  if (!SHOW_DEMO_NOTES) return null;
  return <p className="mt-3 inline-block rounded border border-dashed border-amber-500 bg-amber-50 px-2.5 py-1 text-[0.8rem] text-amber-900"><strong>Confirm before launch:</strong> {children}</p>;
}
