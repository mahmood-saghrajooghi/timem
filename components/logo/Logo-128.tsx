import type { Interpolation, Theme } from "@emotion/react";
import React from "react";

type Props = React.SVGProps<SVGSVGElement> & {
  css?: Interpolation<Theme>;
};

export default function Logo128(props: Props) {
  return (
    <svg
      viewBox="0 0 113 132"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M111.851 34L97.9949 42M111.851 34V50M111.851 34L97.9949 26M56.4256 130V114M56.4256 130L70.282 122M56.4256 130L42.5692 122M1 34L14.8564 42M1 34V50M1 34L14.8564 26M56.4256 66L70.282 58M56.4256 66L42.5692 58M56.4256 66V82M97.9949 106L111.851 98V82M14.8564 106L1 98V82M42.5692 10L56.4256 2L70.282 10"
        stroke="currentColor"
        stroke-width="2"
      />
      <path
        d="M111.919 98V34L56.4937 66V130L111.919 98Z"
        fill="currentColor"
        fillOpacity="0.4"
      />
      <path
        d="M1 98L56.4256 130V66L1 34V98Z"
        fill="currentColor"
        fillOpacity="0.3"
      />
      <path
        d="M111.851 34L56.4256 2L1 34L56.4256 66L111.851 34Z"
        fill="currentColor"
        fillOpacity="0.2"
      />
    </svg>
  );
}
