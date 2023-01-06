import type { Interpolation, Theme } from "@emotion/react";
import React from "react";

type Props = React.SVGProps<SVGSVGElement> & {
  css?: Interpolation<Theme>;
};

export default function Logo64(props: Props) {
  return (
    <svg
      viewBox="0 0 57 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M56.4256 17L49.4974 21M56.4256 17V25M56.4256 17L49.4974 13M28.7128 65V57M28.7128 65L35.641 61M28.7128 65L21.7846 61M1 17L7.9282 21M1 17V25M1 17L7.9282 13M28.7128 33L35.641 29M28.7128 33L21.7846 29M28.7128 33V41M49.4974 53L56.4256 49V41M7.9282 53L1 49V41M21.7846 5L28.7128 1L35.641 5"
        stroke="#F26419"
      />
      <path
        d="M56.4597 49V17L28.7468 33V65L56.4597 49Z"
        fill="#F26419"
        fillOpacity="0.4"
      />
      <path
        d="M1 49L28.7128 65V33L1 17V49Z"
        fill="#F26419"
        fillOpacity="0.3"
      />
      <path
        d="M56.4256 17L28.7128 1L1 17L28.7128 33L56.4256 17Z"
        fill="#F26419"
        fillOpacity="0.2"
      />
    </svg>
  );
}
