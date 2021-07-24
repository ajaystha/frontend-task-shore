import React, { FC, SVGProps } from 'react';

const TriangleDown: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={7} height={4} viewBox="0 0 7 4" {...props}>
      <path data-name="Triangle Copy" d="M0 0h7L3.5 4z" fill="#192a44" />
    </svg>
  );
};

export default TriangleDown;
