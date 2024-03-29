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
        d="M14.021 4H19a1 1 0 1 1 0 2h-4.246l-3.428 12H15a1 1 0 1 1 0 2H5a1 1 0 1 1 0-2h4.246l3.428-12H9a1 1 0 0 1 0-2h5.021z"
        fill="currentColor"
      />
    </svg>
  );
}
