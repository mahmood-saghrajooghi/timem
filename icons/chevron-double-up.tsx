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
        d="M11.293 4.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1-1.414 1.414L12 6.414l-5.293 5.293a1 1 0 0 1-1.414-1.414l6-6zM12 12.414l-5.293 5.293a1 1 0 0 1-1.414-1.414l6-6a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1-1.414 1.414L12 12.414z"
        fill="currentColor"
      />
    </svg>
  );
}
