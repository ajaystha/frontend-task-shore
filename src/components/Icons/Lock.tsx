import React, { SVGProps } from 'react';

const Lock = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" {...props}>
      <g data-name="Group 2" transform="translate(1 1)">
        <circle
          cx={10}
          cy={10}
          r={10}
          fill="#13293f"
          stroke="#fff"
          strokeMiterlimit={10}
          strokeWidth={2}
        />
        <rect
          data-name="Rectangle 5"
          width={9.231}
          height={7.692}
          rx={2}
          transform="translate(5.385 7.692)"
          fill="#e9c83b"
        />
        <path
          data-name="Combined Shape"
          d="M11.538 7.692V6.154h1.539v1.538zm-4.615 0V6.154a3.077 3.077 0 016.154 0h-1.539a1.539 1.539 0 10-3.077 0v1.538z"
          fill="#dfa039"
        />
        <rect
          data-name="Rectangle 8 Copy 2"
          width={1.538}
          height={3.077}
          rx={0.769}
          transform="translate(9.231 10)"
          fill="#12293f"
        />
      </g>
    </svg>
  );
};

export default Lock;
