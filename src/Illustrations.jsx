// Dessins SVG de la section d'accueil (pas d'image à héberger)

// Lignes de code affichées sur l'écran : [décalage, largeur, couleur]
const lignesCode = [
  [0, 40, '#f59e0b'], [0, 70, '#ef4444'],
  [10, 55, '#a855f7'], [10, 90, '#22c55e'],
  [20, 35, '#ef4444'], [20, 60, '#e2e8f0'],
  [20, 80, '#38bdf8'],
  [30, 120, '#22c55e'], [30, 30, '#f59e0b'],
  [30, 95, '#38bdf8'],
  [20, 25, '#ef4444'], [20, 70, '#e2e8f0'],
  [30, 110, '#22c55e'],
  [10, 140, '#ef4444'],
  [20, 50, '#38bdf8'], [20, 85, '#e2e8f0'],
  [0, 30, '#f59e0b'],
]

export function Ordinateur() {
  return (
    <svg className="ordinateur" viewBox="0 0 400 300" role="img" aria-label="Ordinateur portable avec du code à l'écran">
      {/* Écran */}
      <rect x="40" y="10" width="320" height="190" rx="12" fill="#2a2a2a" />
      <rect x="52" y="22" width="296" height="166" rx="4" fill="#1e2433" />
      <rect x="52" y="22" width="296" height="10" fill="#323a4d" />
      <circle cx="326" cy="27" r="2" fill="#f59e0b" />
      <circle cx="333" cy="27" r="2" fill="#22c55e" />
      <circle cx="340" cy="27" r="2" fill="#ef4444" />

      {/* Arborescence de fichiers */}
      {Array.from({ length: 12 }, (_, i) => (
        <g key={i}>
          <rect x={62 + (i % 3) * 5} y={42 + i * 11} width="4" height="4" fill="#38bdf8" />
          <rect x={70 + (i % 3) * 5} y={43 + i * 11} width={22 + (i % 4) * 5} height="2" fill="#94a3b8" />
        </g>
      ))}
      <line x1="112" y1="34" x2="116" y2="186" stroke="#94a3b8" strokeWidth="0.8" />

      {/* Lignes de code */}
      {lignesCode.map(([dec, larg, coul], i) => (
        <rect key={i} x={126 + dec} y={40 + i * 8.5} width={larg} height="3" rx="1.5" fill={coul} />
      ))}

      {/* Base et clavier */}
      <path d="M20 205 h360 l-10 85 a8 8 0 0 1 -8 7 h-324 a8 8 0 0 1 -8 -7 z" fill="#f1f1f1" />
      {Array.from({ length: 5 }, (_, ligne) =>
        Array.from({ length: 13 }, (_, col) => (
          <rect
            key={`${ligne}-${col}`}
            x={42 + col * 24.5}
            y={214 + ligne * 14}
            width="21"
            height="11"
            rx="2"
            fill="#2a2a2a"
          />
        )),
      )}
    </svg>
  )
}

// Balise </> en filigrane derrière le texte
export function MotifCode() {
  return (
    <svg className="motif-code" viewBox="0 0 120 80" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="35,15 10,40 35,65" />
        <line x1="70" y1="8" x2="50" y2="72" />
        <polyline points="85,15 110,40 85,65" />
      </g>
    </svg>
  )
}

export function IconeGithub() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  )
}
