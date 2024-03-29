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
        d="M9 11.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm2-1a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1zm1 2a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2h-3zm0 3a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2h-3zm-2-2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
        fill="currentColor"
      />
      <path
        d="M9 2a1 1 0 0 0-1 1H6a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2a1 1 0 0 0-1-1H9zm7 3h2v15H6V5h2v1a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V5zm-6 0V4h4v1h-4z"
        fill="currentColor"
      />
    </svg>
  );
}
