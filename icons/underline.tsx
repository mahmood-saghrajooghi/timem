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
        d="M18 4a1 1 0 1 0-2 0v7a4 4 0 0 1-8 0V4a1 1 0 1 0-2 0v7a6 6 0 0 0 12 0V4zM7 19a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2H7z"
        fill="currentColor"
      />
    </svg>
  );
}
