import React, { SVGProps } from 'react';

const Profile = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={14}
      height={13.21}
      viewBox="0 0 14 13.21"
      {...props}
    >
      <path
        d="M13.505 13.21H.494A.487.487 0 010 12.721a4.685 4.685 0 014.7-4.658h4.6a4.685 4.685 0 014.7 4.658.487.487 0 01-.495.489zM4.7 9.042a3.71 3.71 0 00-3.677 3.189h11.954A3.709 3.709 0 009.3 9.042zm2.277-1.629A3.734 3.734 0 013.23 3.7a3.747 3.747 0 017.494 0 3.734 3.734 0 01-3.747 3.713zm0-6.445A2.733 2.733 0 109.735 3.7 2.749 2.749 0 006.977.968z"
        fill="#fff"
      />
    </svg>
  );
};

export default Profile;
