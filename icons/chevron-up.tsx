import type { Theme, Interpolation } from "@emotion/react";
import React from "react";

type Props = React.SVGProps<SVGSVGElement> & {
  css?: Interpolation<Theme>;
};

export default function Icon(props: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.293 7.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1-1.414 1.414L12 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414l6-6z"
        fill="currentColor"
      />
    </svg>
  );
}
