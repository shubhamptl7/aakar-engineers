export const towerParts = [
  { n: 1, name: "FRP shell", text: "Fibre-reinforced plastic structure: lightweight, corrosion-free and weather-proof." },
  { n: 2, name: "Fan and stack", text: "Induced draft: the fan pulls ambient air up through the fill and discharges it at the top." },
  { n: 3, name: "Water distribution", text: "Rotating sprinkler at low pump head, or spray nozzles where reasonable pump head is available." },
  { n: 4, name: "Heat-exchange fill", text: "Water falls as a thin film over the fill while air moves upward, counter-flow." },
  { n: 5, name: "Air inlet", text: "Ambient air enters at the base of the tower." },
  { n: 6, name: "Cold-water basin", text: "Collects cooled water. Towers are available with or without a basin." },
  { n: 7, name: "Hot water in", text: "Return water from the process, chiller or heat exchanger." },
  { n: 8, name: "Cold water out", text: "Cooled water returns to the process." },
];

const callouts: [number, number, number, number, number][] = [
  // n, cx, cy, targetX, targetY
  [1, 62, 196, 137, 246],
  [2, 492, 128, 346, 168],
  [3, 492, 262, 372, 302],
  [4, 492, 366, 420, 366],
  [5, 62, 372, 135, 410],
  [6, 62, 502, 120, 498],
  [7, 62, 262, 84, 298],
  [8, 500, 456, 492, 497],
];

export default function CoolingTowerSection({ uid = "ct", label }: { uid?: string; label: string }) {
  const hatch = `${uid}-hatch`;
  const aw = `${uid}-aw`;
  const ar = `${uid}-ar`;
  const ab = `${uid}-ab`;
  return (
    <svg viewBox="0 0 560 560" role="img" aria-label={label} className="h-auto w-full">
      <defs>
        <pattern id={hatch} width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="10" stroke="#0f2236" strokeWidth="1" opacity=".45" />
        </pattern>
        <marker id={aw} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#0b6e91" /></marker>
        <marker id={ar} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#c8343c" /></marker>
        <marker id={ab} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#3e4955" /></marker>
      </defs>

      {/* ground */}
      <line x1="30" y1="520" x2="530" y2="520" stroke="#0f2236" strokeWidth="1.5" />
      {[...Array(18)].map((_, i) => (
        <line key={i} x1={40 + i * 28} y1="520" x2={30 + i * 28} y2="532" stroke="#0f2236" strokeWidth="1" opacity=".5" />
      ))}

      {/* basin + water */}
      <rect x="120" y="470" width="320" height="50" fill="#f2f4f6" stroke="#0f2236" strokeWidth="1.5" />
      <rect x="124" y="488" width="312" height="30" fill="#33bee5" opacity=".35" />
      <path d="M124 488 q12 -5 24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0" fill="none" stroke="#0b6e91" strokeWidth="1.5" />

      {/* posts in air-inlet zone */}
      {[132, 206, 280, 354, 428].map((x) => (
        <rect key={x} x={x - 4} y="400" width="8" height="70" fill="#fff" stroke="#0f2236" strokeWidth="1.2" />
      ))}

      {/* fill pack */}
      <rect x="140" y="340" width="280" height="60" fill="#fff" stroke="#0f2236" strokeWidth="1.5" />
      <rect x="140" y="340" width="280" height="60" fill={`url(#${hatch})`} />

      {/* shell */}
      <path d="M135 400 V265 C135 225 205 215 215 190 V130 H345 V190 C355 215 425 225 425 265 V400" fill="#fff" fillOpacity=".55" stroke="#0f2236" strokeWidth="2.4" />
      <ellipse cx="280" cy="130" rx="65" ry="8" fill="#f2f4f6" stroke="#0f2236" strokeWidth="1.5" />

      {/* fan + motor */}
      <rect x="262" y="146" width="36" height="22" fill="#0f2236" />
      <line x1="280" y1="168" x2="280" y2="178" stroke="#0f2236" strokeWidth="3" />
      <line x1="232" y1="182" x2="328" y2="182" stroke="#0f2236" strokeWidth="5" strokeLinecap="round" />
      <circle cx="280" cy="180" r="7" fill="#c8343c" stroke="#0f2236" strokeWidth="1.5" />

      {/* hot water pipe, header, nozzles, spray */}
      <path d="M40 300 H390" stroke="#c8343c" strokeWidth="5" fill="none" markerStart="none" />
      <line x1="40" y1="300" x2="100" y2="300" stroke="#c8343c" strokeWidth="1.5" markerEnd={`url(#${ar})`} opacity="0" />
      <path d="M52 318 H92" stroke="#c8343c" strokeWidth="2" markerEnd={`url(#${ar})`} />
      {[190, 235, 280, 325, 370].map((x) => (
        <g key={x}>
          <path d={`M${x - 6} 300 h12 l-6 10z`} fill="#c8343c" />
          <line x1={x} y1="312" x2={x} y2="338" stroke="#0b6e91" strokeWidth="2" strokeDasharray="3 4" />
        </g>
      ))}

      {/* cold water out */}
      <path d="M440 500 H520" stroke="#0b6e91" strokeWidth="5" />
      <path d="M470 484 H512" stroke="#0b6e91" strokeWidth="2" markerEnd={`url(#${aw})`} />

      {/* air in */}
      <path d="M52 436 H128" stroke="#3e4955" strokeWidth="2" markerEnd={`url(#${ab})`} />
      <path d="M508 436 H434" stroke="#3e4955" strokeWidth="2" markerEnd={`url(#${ab})`} />
      {/* air out */}
      {[250, 280, 310].map((x) => (
        <path key={x} d={`M${x} 110 V56`} stroke="#3e4955" strokeWidth="2" markerEnd={`url(#${ab})`} />
      ))}
      {/* air through fill */}
      <path d="M280 336 V210" stroke="#3e4955" strokeWidth="1.5" strokeDasharray="4 5" markerEnd={`url(#${ab})`} opacity=".7" />

      {/* callouts */}
      {callouts.map(([n, cx, cy, tx, ty]) => (
        <g key={n}>
          <line x1={cx} y1={cy} x2={tx} y2={ty} stroke="#0f2236" strokeWidth="1" />
          <circle cx={tx} cy={ty} r="2.5" fill="#0f2236" />
          <circle cx={cx} cy={cy} r="12" fill="#ffffff" stroke="#0f2236" strokeWidth="1.3" />
          <text x={cx} y={cy + 4.5} textAnchor="middle" fontSize="13" fontWeight="600" fill="#0f2236" fontFamily="var(--font-mono), monospace">{n}</text>
        </g>
      ))}
    </svg>
  );
}
