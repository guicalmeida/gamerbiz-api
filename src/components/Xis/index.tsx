const Xis = () => {
  return (
    <svg
      width="202"
      height="202"
      viewBox="0 0 202 202"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.5" filter="url(#filter0_di)">
        <path
          d="M185.605 15.6052L15.6053 185.605M15.6053 15.6052L185.605 185.605"
          stroke="url(#paint0_linear)"
          strokeWidth="7"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_di"
          x="0.105255"
          y="0.105225"
          width="201"
          height="201"
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
          <feGaussianBlur stdDeviation="6" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.941176 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
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
          <feGaussianBlur stdDeviation="7.5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.941176 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
          />
          <feBlend mode="normal" in2="shape" result="effect2_innerShadow" />
        </filter>
        <linearGradient
          id="paint0_linear"
          x1="100.605"
          y1="15.6052"
          x2="100.605"
          y2="185.605"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F00000" />
          <stop offset="1" stopColor="#FF4600" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default Xis
