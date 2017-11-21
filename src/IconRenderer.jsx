import React from 'react'

const IconRenderer = props => {
  const { background, foreground, foreground2, size } = props
  return (
    <div className="icon-renderer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width={size}
        height={size}
        viewBox="0 0 1024 1024"
      >
        <defs>
          <linearGradient id="vs-code-c" x1="0%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#FFF" stopOpacity=".18" />
            <stop offset="48.762%" stopColor="gray" stopOpacity=".08" />
            <stop offset="100%" stopOpacity=".183" />
          </linearGradient>
          <rect
            id="vs-code-b"
            width="690"
            height="840"
            x="171.142"
            y="84.824"
            rx="22"
          />
          <filter
            id="vs-code-a"
            width="106.1%"
            height="105%"
            x="-3.9%"
            y="-1.8%"
            filterUnits="objectBoundingBox"
          >
            <feOffset
              dx="-6"
              dy="6"
              in="SourceAlpha"
              result="shadowOffsetOuter1"
            />
            <feGaussianBlur
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
              stdDeviation="6"
            />
            <feColorMatrix
              in="shadowBlurOuter1"
              values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.12 0"
            />
          </filter>
          <path
            id="vs-code-d"
            d="M537.951034,254.221039 L598.4682,644.286226 L598.4682,644.286226 C598.806888,646.469249 600.851137,647.964377 603.03416,647.625689 C603.590075,647.539441 604.121545,647.3369 604.593863,647.031293 L689.428752,592.140032 L689.428752,592.140032 C690.756966,591.28063 691.453886,589.71916 691.206651,588.156598 L642.036928,277.396418 L642.036928,277.396418 C641.787001,275.816841 640.620253,274.537936 639.070181,274.144485 L542.887849,249.730738 L542.887849,249.730738 C540.746612,249.187233 538.570198,250.48245 538.026692,252.623687 C537.894212,253.145618 537.868478,253.688924 537.951034,254.221039 Z"
          />
          <linearGradient
            id="vs-code-f"
            x1="5.234%"
            x2="50%"
            y1="3.683%"
            y2="50%"
          >
            <stop offset="0%" stopOpacity=".09" />
            <stop offset="100%" stopOpacity="0" />
          </linearGradient>
          <path
            id="vs-code-e"
            d="M689.272893,592.268066 L599.84563,650.275606 L599.84563,650.275606 C598.457165,651.176242 596.657438,651.128814 595.318336,650.156297 L253.392874,401.834522 L253.392874,401.834522 C251.60539,400.536371 251.208708,398.034969 252.50686,396.247486 C252.844821,395.782131 253.27916,395.395128 253.78026,395.112866 L284.671952,377.712009 L284.671952,377.712009 C285.84794,377.049592 287.278689,377.02491 288.476825,377.646371 L688.937859,585.361463 L688.937859,585.361463 C690.898895,586.378633 691.66405,588.792945 690.646881,590.753981 C690.327782,591.369182 689.85432,591.890921 689.272893,592.268066 Z"
          />
          <path
            id="vs-code-h"
            d="M640.847947,280.869329 L324.476633,602.327305 L324.476633,602.327305 C323.604783,603.213173 322.370665,603.643413 321.137043,603.491558 L285.190525,599.066672 L285.190525,599.066672 C282.997935,598.796772 281.439287,596.80053 281.709187,594.60794 C281.794558,593.914411 282.060117,593.255345 282.479422,592.696369 L538.615386,251.241288 L538.615386,251.241288 C539.584259,249.949683 541.234657,249.36722 542.799605,249.764583 L638.981474,274.186575 L638.981474,274.186575 C641.122667,274.730255 642.417707,276.906775 641.874027,279.047968 C641.6995,279.73531 641.34538,280.363898 640.847947,280.869329 Z"
          />
          <filter
            id="vs-code-g"
            width="118.3%"
            height="118.7%"
            x="-9.2%"
            y="-5.9%"
            filterUnits="objectBoundingBox"
          >
            <feOffset dy="12" in="SourceAlpha" result="shadowOffsetOuter1" />
            <feGaussianBlur
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
              stdDeviation="9"
            />
            <feColorMatrix
              in="shadowBlurOuter1"
              values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0"
            />
          </filter>
          <linearGradient id="vs-code-j" x1="100%" x2="50%" y1="0%" y2="5.905%">
            <stop offset="0%" stopOpacity=".3" />
            <stop offset="100%" stopOpacity="0" />
          </linearGradient>
          <polygon
            id="vs-code-i"
            points="259.369 737.918 821.277 830.453 987.705 727.844"
          />
        </defs>
        <g fill="none" fillRule="evenodd">
          <g transform="rotate(-9.2 516.142 504.824)">
            <use fill="#000" filter="url(#vs-code-a)" xlinkHref="#vs-code-b" />
            <use fill={background} xlinkHref="#vs-code-b" />
            <use fill="url(#vs-code-c)" xlinkHref="#vs-code-b" />
          </g>
          <use fill={foreground} xlinkHref="#vs-code-d" />
          <use
            fill="#E0E0E0"
            style={{ mixBlendMode: 'multiply' }}
            xlinkHref="#vs-code-d"
          />
          <use fill={foreground} xlinkHref="#vs-code-e" />
          <use fill="url(#vs-code-f)" xlinkHref="#vs-code-e" />
          <use fill="#000" filter="url(#vs-code-g)" xlinkHref="#vs-code-h" />
          <use fill={foreground} xlinkHref="#vs-code-h" />
          <g>
            <use fill={foreground2} xlinkHref="#vs-code-i" />
            <use fill="url(#vs-code-j)" xlinkHref="#vs-code-i" />
          </g>
          <polygon
            fill={foreground2}
            points="707.82 118.889 895.232 163.332 987.65 727.856 821.531 829.908"
          />
        </g>
      </svg>
    </div>
  )
}

export default IconRenderer