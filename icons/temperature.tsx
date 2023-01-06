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
        d="M9 5a3 3 0 1 1 6 0v8a5 5 0 1 1-6 0V5zm3-1a1 1 0 0 0-1 1v8.535a1 1 0 0 1-.5.866 3 3 0 1 0 2.999 0 1 1 0 0 1-.499-.866V5a1 1 0 0 0-1-1z"
        fill="currentColor"
      />
    </svg>
  );
}
