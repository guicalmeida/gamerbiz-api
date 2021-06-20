const Circulo = () => {
  return (
    <svg
      width="216"
      height="216"
      viewBox="0 0 216 216"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.5" filter="url(#filter0_di)">
        <circle
          cx="108"
          cy="108"
          r="89"
          stroke="url(#paint0_linear)"
          strokeWidth="7"
        />
      </g>
      <defs>
        <filter
          id="filter0_di"
          x="0.5"
          y="0.5"
          width="215"
          height="215"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="7.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 0.27451 0 0 0 0 0 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="3" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 0.27451 0 0 0 0 0 0 0 0 1 0"
          />
          <feBlend mode="normal" in2="shape" result="effect2_innerShadow" />
        </filter>
        <linearGradient
          id="paint0_linear"
          x1="108"
          y1="19"
          x2="108"
          y2="197"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F00000" />
          <stop offset="1" stopColor="#FF4600" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default Circulo
