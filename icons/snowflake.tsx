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
        d="M13 3a1 1 0 1 0-2 0v2.586l-1.95-1.95A1 1 0 1 0 7.636 5.05L11 8.414V11H8.414L5.05 7.636A1 1 0 1 0 3.636 9.05L5.586 11H3a1 1 0 1 0 0 2h2.586l-1.95 1.95a1 1 0 1 0 1.414 1.414L8.414 13H11v2.586L7.636 18.95a1 1 0 1 0 1.414 1.414l1.95-1.95V21a1 1 0 1 0 2 0v-2.586l1.95 1.95a1 1 0 1 0 1.414-1.414L13 15.586V13h2.586l3.364 3.364a1 1 0 1 0 1.414-1.414L18.414 13H21a1 1 0 1 0 0-2h-2.586l1.95-1.95a1 1 0 1 0-1.414-1.414L15.586 11H13V8.414l3.364-3.364a1 1 0 0 0-1.414-1.414L13 5.586V3z"
        fill="currentColor"
      />
    </svg>
  );
}
