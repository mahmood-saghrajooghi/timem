import type { Theme, Interpolation } from "@emotion/react";
import React from "react";

type Props = React.SVGProps<SVGSVGElement> & {
  css?: Interpolation<Theme>;
};

export default function Icon(props: Props) {
  return (
    <svg
      viewBox="0 0 23 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {" "}
      <path
        d="M11.5 0L22.3253 6.25V18.75L11.5 25L0.674683 18.75V6.25L11.5 0Z"
        fill="currentColor"
      />{" "}
    </svg>
  );
}
