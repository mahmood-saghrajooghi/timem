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
        d="M21.707 3.707a1 1 0 0 0-1.414-1.414L16 6.586V5a1 1 0 1 0-2 0v4a1 1 0 0 0 1 1h4a1 1 0 1 0 0-2h-1.586l4.293-4.293zm-19.414 18a1 1 0 0 1 0-1.414L6.586 16H5a1 1 0 1 1 0-2h4a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-1.586l-4.293 4.293a1 1 0 0 1-1.414 0z"
        fill="currentColor"
      />
    </svg>
  );
}
