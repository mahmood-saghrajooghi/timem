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
        d="M7 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h6.5a4.5 4.5 0 0 0 1.545-8.728A4.5 4.5 0 0 0 11.5 4H7zm4.5 7H8V6h3.5a2.5 2.5 0 0 1 0 5zM8 13h5.5a2.5 2.5 0 0 1 0 5H8v-5z"
        fill="currentColor"
      />
    </svg>
  );
}
