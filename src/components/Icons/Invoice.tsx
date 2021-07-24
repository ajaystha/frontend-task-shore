import React, { FC, SVGProps } from 'react';

const Invoice: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={13} height={15} viewBox="0 0 13 15" {...props}>
      <path
        d="M12.466 15H.534A.539.539 0 010 14.458V3.979a.385.385 0 00.012-.056.363.363 0 01.014-.06.079.079 0 01.013-.051.522.522 0 01.092-.142L3.113.181a.353.353 0 01.1-.089.084.084 0 01.024-.015.065.065 0 00.019-.012l.05-.018.055-.02a.043.043 0 01.026-.014.456.456 0 01.13-.013h8.949A.526.526 0 0113 .53v13.94a.526.526 0 01-.534.53zM1.068 4.548v9.393h10.863V1.059h-7.88v2.96a.526.526 0 01-.534.529zm1.915-2.572L1.68 3.5h1.3zm7.36 7.339H2.658a.53.53 0 110-1.059h7.685a.533.533 0 01.534.53.526.526 0 01-.534.529zm0-2.558H2.658a.53.53 0 110-1.059h7.685a.53.53 0 110 1.059z"
        fill="#9294a3"
      />
    </svg>
  );
};

export default Invoice;