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
        d="M8.5 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm2 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm5-12a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm2 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm-2 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
        fill="currentColor"
      />
    </svg>
  );
}
