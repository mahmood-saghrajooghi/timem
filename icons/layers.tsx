import type { Theme, Interpolation } from "@emotion/react";
import React from "react";

type Props = React.SVGProps<SVGSVGElement> & {
  css?: Interpolation<Theme>;
};

export default function Icon(props: Props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.514 2.126a1 1 0 0 1 .972 0l9 5a1 1 0 0 1 0 1.748l-9 5a1 1 0 0 1-.972 0l-9-5a1 1 0 0 1 0-1.748l9-5zM5.06 8L12 11.856 18.94 8 12 4.144 5.06 8z"
        fill="currentColor"
      />
      <path
        d="M2.126 11.514a1 1 0 0 1 1.36-.388L12 15.856l8.514-4.73a1 1 0 0 1 .972 1.748l-9 5a1 1 0 0 1-.972 0l-9-5a1 1 0 0 1-.388-1.36z"
        fill="currentColor"
      />
      <path
        d="M2.126 15.514a1 1 0 0 1 1.36-.388L12 19.856l8.514-4.73a1 1 0 0 1 .972 1.748l-9 5a1 1 0 0 1-.972 0l-9-5a1 1 0 0 1-.388-1.36z"
        fill="currentColor"
      />
    </svg>
  );
}
