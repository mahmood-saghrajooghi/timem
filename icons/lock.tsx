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
        d="M12 4c1.648 0 3 1.352 3 3v3H9V7c0-1.648 1.352-3 3-3zm5 6V7c0-2.752-2.248-5-5-5S7 4.248 7 7v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1zM6 12h12v8H6v-8z"
        fill="currentColor"
      />
    </svg>
  );
}
