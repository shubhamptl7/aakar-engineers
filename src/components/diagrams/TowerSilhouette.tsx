const s = { fill: "#f2f4f6", stroke: "#0f2236", strokeWidth: 2.2, strokeLinejoin: "round" as const };
const fan = (x: number, y: number, w = 30) => <g><line x1={x - w / 2} y1={y} x2={x + w / 2} y2={y} stroke="#c8343c" strokeWidth="4" strokeLinecap="round" /><circle cx={x} cy={y} r="3.5" fill="#c8343c" /></g>;
const louvres = (x: number, y: number, w: number, n: number) => [...Array(n)].map((_, i) => <line key={i} x1={x} y1={y + i * 7} x2={x + w} y2={y + i * 7 + 3} stroke="#0f2236" strokeWidth="1.2" opacity=".55" />);

export default function TowerSilhouette({ type }: { type: string }) {
  return (
    <svg viewBox="0 0 200 140" className="h-full w-full" aria-hidden="true">
      <line x1="20" y1="128" x2="180" y2="128" stroke="#0f2236" strokeWidth="1.5" opacity=".4" />
      {type === "Round bottle" && (<><path d="M60 118 V72 C60 56 82 52 86 42 V26 H114 V42 C118 52 140 56 140 72 V118 Z" {...s} />{fan(100, 30, 24)}{louvres(64, 98, 72, 3)}</>)}
      {type === "Square, single cell" && (<><path d="M62 118 V48 H138 V118 Z" {...s} /><path d="M80 48 V34 H120 V48" {...s} />{fan(100, 38, 26)}{louvres(66, 96, 68, 3)}</>)}
      {type === "Square, multi cell" && (<>{[0, 1, 2].map((i) => <g key={i}><path d={`M${30 + i * 48} 118 V52 H${76 + i * 48} V118 Z`} {...s} /><path d={`M${41 + i * 48} 52 V40 H${65 + i * 48} V52`} {...s} />{fan(53 + i * 48, 44, 18)}</g>)}{louvres(34, 100, 132, 2)}</>)}
      {type === "Cross flow" && (<><path d="M52 118 L64 50 H136 L148 118 Z" {...s} /><path d="M86 50 V36 H114 V50" {...s} />{fan(100, 40, 24)}{louvres(58, 70, 18, 6)}{louvres(124, 70, 18, 6)}</>)}
      {type === "Double-flow cross flow" && (<><path d="M30 118 L44 54 H156 L170 118 Z" {...s} /><path d="M70 54 V40 H94 V54 M106 54 V40 H130 V54" {...s} />{fan(82, 44, 20)}{fan(118, 44, 20)}{louvres(36, 72, 16, 6)}{louvres(148, 72, 16, 6)}</>)}
      {type === "Natural draft" && (<><path d="M64 118 V60 C64 50 76 46 80 38 V26 H120 V38 C124 46 136 50 136 60 V118 Z" {...s} />{[0, 1, 2, 3].map((i) => <line key={i} x1={82 + i * 12} y1="60" x2={82 + i * 12} y2="96" stroke="#1d5f8a" strokeWidth="1.6" strokeDasharray="3 4" />)}{louvres(68, 100, 64, 2)}</>)}
    </svg>
  );
}
