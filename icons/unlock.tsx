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
        d="M12 4c-1.648 0-3 1.352-3 3v3h9a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h1V7c0-2.752 2.248-5 5-5s5 2.248 5 5a1 1 0 1 1-2 0c0-1.648-1.352-3-3-3zm-6 8v8h12v-8H6z"
        fill="currentColor"
      />
    </svg>
  );
}
