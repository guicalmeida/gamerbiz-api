const Triangulo = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 260 223">
      <g filter="url(#filter5000_di)" opacity=".5">
        <path
          stroke="url(#paint5000_linear)"
          strokeWidth="6"
          d="M24 203.5L130 21l106.5 182.5H24z"
        />
      </g>
      <defs>
        <linearGradient
          id="paint5000_linear"
          x1="130.25"
          x2="130.25"
          y1="21"
          y2="203.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F00000" />
          <stop offset="1" stopColor="#FF4600" />
        </linearGradient>
        <filter
          id="filter5000_di"
          width="246.936"
          height="215.463"
          x="6.78821"
          y="3.03735"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="6" />
          <feColorMatrix values="0 0 0 0 0.941176 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="7.5" />
          <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 0.941176 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
          <feBlend in2="shape" result="effect2_innerShadow" />
        </filter>
      </defs>
    </svg>
  )
}

export default Triangulo
