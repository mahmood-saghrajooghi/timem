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
        d="M2 5.5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-13zm9 0H4v3h7v-3zm2 0v3h7v-3h-7zm7 5h-7v3h7v-3zm0 5h-7v3h7v-3zm-9 3v-3H4v3h7zm-7-5h7v-3H4v3z"
        fill="currentColor"
      />
    </svg>
  );
}
