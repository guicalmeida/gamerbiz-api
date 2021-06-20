const Quadrado = () => {
  return (
    <svg
      width="194"
      height="198"
      viewBox="0 0 194 198"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.5" filter="url(#filter0_di)">
        <rect
          x="18.5676"
          y="19.0098"
          width="156.34"
          height="159.492"
          stroke="url(#paint0_linear)"
          strokeWidth="7"
        />
      </g>
      <defs>
        <filter
          id="filter0_di"
          x="0.067627"
          y="0.509766"
          width="193.34"
          height="196.492"
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
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 0.27451 0 0 0 0 0 0 0 0 1 0"
          />
          <feBlend mode="normal" in2="shape" result="effect2_innerShadow" />
        </filter>
        <linearGradient
          id="paint0_linear"
          x1="96.7376"
          y1="19.0098"
          x2="96.7376"
          y2="178.502"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F00000" />
          <stop offset="1" stopColor="#FF4600" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default Quadrado
