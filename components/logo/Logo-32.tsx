import type { Interpolation, Theme } from "@emotion/react";
import React from "react";

type Props = React.SVGProps<SVGSVGElement> & {
  css?: Interpolation<Theme>;
};

export default function Logo32(props: Props) {
  return (
    <svg
      viewBox="0 0 30 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M28.7128 9L25.2487 11M28.7128 9V13M28.7128 9L25.2487 7M14.8564 33V29M14.8564 33L18.3205 31M14.8564 33L11.3923 31M1 9L4.4641 11M1 9V13M1 9L4.4641 7M14.8564 17L18.3205 15M14.8564 17L11.3923 15M14.8564 17V21M25.2487 27L28.7128 25V21M4.4641 27L1 25V21M11.3923 3L14.8564 1L18.3205 3"
        stroke="currentColor"
      />
      <path
        d="M28.7298 25V9L14.8734 17V33L28.7298 25Z"
        fill="currentColor"
        fillOpacity="0.4"
      />
      <path d="M1 25L14.8564 33V17L1 9V25Z" fill="currentColor" fillOpacity="0.3" />
      <path
        d="M28.7128 9L14.8564 1L1 9L14.8564 17L28.7128 9Z"
        fill="currentColor"
        fillOpacity="0.2"
      />
    </svg>
  );
}
