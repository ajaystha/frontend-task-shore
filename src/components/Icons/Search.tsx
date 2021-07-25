import React, { SVGProps } from 'react';

const Search = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12" {...props}>
      <path
        d="M11.576 12a.417.417 0 01-.3-.124L7.652 8.252a4.563 4.563 0 01-2.983 1.087 4.69 4.69 0 113.583-1.687l3.623 3.623a.425.425 0 010 .6.416.416 0 01-.299.125zM4.669.849a3.821 3.821 0 103.821 3.82A3.825 3.825 0 004.669.849z"
        fill="#9b9b9b"
      />
    </svg>
  );
};

export default Search;
