import React, { FC, SVGProps } from 'react';

const Padnote: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={12.29}
      height={16}
      viewBox="0 0 12.29 16"
      {...props}
    >
      <path
        d="M11.786 16H.5a.508.508 0 01-.5-.521V1.765a.507.507 0 01.5-.52h2.234V.52a.507.507 0 01.5-.52h6.051a.507.507 0 01.5.52v.725h2a.507.507 0 01.5.52v13.714a.508.508 0 01-.499.521zM1.01 2.286v12.673h10.27V2.286H9.79V3.2a.507.507 0 01-.5.52H3.239a.507.507 0 01-.5-.52v-.914zm2.734-1.245v1.638H8.78V1.041zm2.512 11.53H2.623a.521.521 0 010-1.041h3.646a.521.521 0 01-.013 1.041zM9.9 10.057H2.623a.521.521 0 010-1.041H9.9a.521.521 0 010 1.041zm0-2.527H2.623a.508.508 0 01-.5-.521.513.513 0 01.5-.52H9.9a.521.521 0 010 1.041z"
        fill="#fff"
        opacity={0.5}
      />
    </svg>
  );
};

export default Padnote;