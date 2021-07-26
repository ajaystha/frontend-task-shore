import React, { SVGProps } from 'react';

const Menu = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}>
      <path d="M21 18H3v-2h18v2zm0-5H3v-2h18v2zm0-5H3V6h18v2z" opacity={0.54} />
    </svg>
  );
};

export default Menu;
