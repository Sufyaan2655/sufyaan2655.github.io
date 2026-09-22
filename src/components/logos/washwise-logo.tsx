const WashWiseLogo = () => (
  <svg
    viewBox="0 0 640 640"
    preserveAspectRatio="xMidYMid slice"
    className="w-full h-full"
    role="img"
    aria-label="WashWise logo"
  >
    <defs>
      <pattern id="washwise-weave-a" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
        <line x1="0" y1="0" x2="0" y2="9" stroke="#2f6b58" strokeWidth={1} />
      </pattern>
      <pattern id="washwise-weave-b" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(-45)">
        <line x1="0" y1="0" x2="0" y2="9" stroke="#0f2b23" strokeWidth={1} />
      </pattern>
      <radialGradient id="washwise-vignette" cx="50%" cy="46%" r="72%">
        <stop offset="0" stopColor="#000000" stopOpacity={0} />
        <stop offset="1" stopColor="#000000" stopOpacity={0.22} />
      </radialGradient>
      <linearGradient id="washwise-sheen-gradient" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stopColor="#ffffff" stopOpacity={0} />
        <stop offset="0.5" stopColor="#ffffff" stopOpacity={0.3} />
        <stop offset="1" stopColor="#ffffff" stopOpacity={0} />
      </linearGradient>
      <clipPath id="washwise-clip">
        <rect width="640" height="640" />
      </clipPath>
    </defs>

    <rect width="640" height="640" fill="#173f36" />
    <rect width="640" height="640" fill="url(#washwise-weave-a)" opacity={0.5} />
    <rect width="640" height="640" fill="url(#washwise-weave-b)" opacity={0.5} />
    <rect width="640" height="640" fill="url(#washwise-vignette)" />

    <circle cx="132" cy="311" r="42" fill="#2a7d68" />
    <text
      x="132"
      y="311"
      textAnchor="middle"
      dominantBaseline="central"
      fontFamily="'Space Grotesk', Arial, sans-serif"
      fontSize="43"
      fontWeight={700}
      fill="#f4f3ed"
    >
      W
    </text>

    <text
      x="179"
      y="336"
      fontFamily="Georgia, 'Times New Roman', serif"
      fontSize="70"
      fontWeight={700}
      fill="#f4f3ed"
    >
      ASHWISE
    </text>

    <text
      x="320"
      y="404"
      textAnchor="middle"
      fontFamily="'Space Grotesk', Arial, sans-serif"
      fontSize="19"
      fontWeight={700}
      letterSpacing="3.4"
      fill="#a9c9bd"
    >
      LAUNDRY, WITHOUT THE WAITING
    </text>

    {/* fabric sheen - a soft band of light that only sweeps across while
        the card is hovered, like a glint off clean, pressed cloth. The
        tilt lives on the outer group (a static SVG attribute) so the CSS
        keyframe below only has to animate a plain translateX. */}
    <g clipPath="url(#washwise-clip)">
      <g transform="rotate(20 320 320)">
        <rect
          x="-260"
          y="-40"
          width="220"
          height="720"
          fill="url(#washwise-sheen-gradient)"
          className="[animation-play-state:paused] group-hover:[animation-play-state:running] animate-[washwise-sheen_2.8s_ease-in-out_infinite]"
        />
      </g>
    </g>
  </svg>
);

export default WashWiseLogo;
