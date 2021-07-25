import React, { FC, SVGProps } from 'react';

const Close: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={26.896}
      height={24.976}
      viewBox="0 0 26.896 24.976"
      {...props}
    >
      <g data-name="Group 1" fill="none" stroke="#707070" strokeWidth={2}>
        <path data-name="Line 1" d="M3.552 1.327l19.786 22.312" strokeWidth={1.99922} />
        <path data-name="Line 2" d="M23.514 1.627L3.382 23.643" />
      </g>
    </svg>
  );
};

export default Close;
