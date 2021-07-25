import React, { SVGProps } from 'react';

const Monitor = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={14.11}
      height={13}
      viewBox="0 0 14.11 13"
      {...props}
    >
      <path
        d="M10.334 13H3.776a.493.493 0 110-.986h2.781V9.75H.5a.49.49 0 01-.5-.493V.493A.49.49 0 01.5 0h13.113a.49.49 0 01.5.493v8.764a.49.49 0 01-.5.493h-6.06v2.263h2.781a.493.493 0 110 .986zM1 7.2v1.563h12.114V7.2zM1 .987v5.237h12.114V.987z"
        fill="#9294a3"
      />
    </svg>
  );
};

export default Monitor;
