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
        d="M7 2a1 1 0 0 0-1 1v4H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-2h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2V3a1 1 0 0 0-1-1H7zm10 12H7a1 1 0 0 0-1 1v2H4V9h16v8h-2v-2a1 1 0 0 0-1-1zm-1-7H8V4h8v3zM5 10v2h3v-2H5zm11 6v4H8v-4h8z"
        fill="currentColor"
      />
    </svg>
  );
}
