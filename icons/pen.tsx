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
        d="M17.707 2.293a1 1 0 0 0-1.414 0L14 4.586l-1.293-1.293a1 1 0 0 0-1.414 0l-6 6a1 1 0 0 0 1.414 1.414L12 5.414l.586.586-2.293 2.293-7 7A1 1 0 0 0 3 16v4a1 1 0 0 0 1 1h4a1 1 0 0 0 .707-.293l7-7 6-6a1 1 0 0 0 0-1.414l-4-4zm-3 4.414L17 4.414 19.586 7 15 11.586 12.414 9l2.293-2.293zM5 16.414l6-6L13.586 13l-6 6H5v-2.586z"
        fill="currentColor"
      />
    </svg>
  );
}
