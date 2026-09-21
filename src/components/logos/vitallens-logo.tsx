const VitalLensLogo = () => (
  <svg
    viewBox="0 0 400 224"
    preserveAspectRatio="xMidYMid slice"
    className="w-full h-full"
    role="img"
    aria-label="VitalLens heartbeat trace"
  >
    <rect width="400" height="224" fill="#fdf2f2" />

    <g stroke="#f6e0e0" strokeWidth="1">
      <line x1="0" y1="56" x2="400" y2="56" />
      <line x1="0" y1="112" x2="400" y2="112" />
      <line x1="0" y1="168" x2="400" y2="168" />
      <line x1="80" y1="0" x2="80" y2="224" />
      <line x1="160" y1="0" x2="160" y2="224" />
      <line x1="240" y1="0" x2="240" y2="224" />
      <line x1="320" y1="0" x2="320" y2="224" />
    </g>

    {/* baseline pulse trace, always visible */}
    <polyline
      points="0,112 60,112 90,112 120,32 150,192 180,68 210,112 260,112 300,112 330,32 360,192 390,68 400,112"
      fill="none"
      stroke="#c73529"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity={0.28}
    />

    {/* traveling highlight - only sweeps while the card is hovered */}
    <polyline
      points="0,112 60,112 90,112 120,32 150,192 180,68 210,112 260,112 300,112 330,32 360,192 390,68 400,112"
      fill="none"
      stroke="#c73529"
      strokeWidth={5}
      strokeLinecap="round"
      strokeLinejoin="round"
      pathLength={100}
      strokeDasharray="14 86"
      className="[animation-play-state:paused] group-hover:[animation-play-state:running] animate-[vitallens-sweep_2.6s_linear_infinite]"
    />
  </svg>
);

export default VitalLensLogo;
