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
        d="M11 2a6 6 0 0 0-5.986 6.41 5 5 0 0 0 .737 9.432 1 1 0 1 0 .498-1.936 3.002 3.002 0 0 1 .09-5.833 1 1 0 0 0 .758-1.194A4 4 0 1 1 14.92 7.2a1 1 0 0 0 .999.8H16a4 4 0 0 1 1.6 7.668 1 1 0 1 0 .8 1.832 6.001 6.001 0 0 0-1.729-11.463A6.002 6.002 0 0 0 11 2zm1.894 11.447a1 1 0 1 0-1.788-.894l-2 4A1 1 0 0 0 10 18h2.382l-1.276 2.553a1 1 0 1 0 1.788.894l2-4A1 1 0 0 0 14 16h-2.382l1.276-2.553z"
        fill="currentColor"
      />
    </svg>
  );
}
