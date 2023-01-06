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
        d="M12.65 2.24a1 1 0 0 0-1.301.001l-.089.077a31.487 31.487 0 0 0-1.053.982 34.26 34.26 0 0 0-2.479 2.69c-.902 1.094-1.823 2.373-2.522 3.722C4.511 11.052 4 12.528 4 14a8 8 0 1 0 16 0c0-1.472-.511-2.948-1.206-4.288-.7-1.35-1.62-2.628-2.522-3.723a34.258 34.258 0 0 0-3.299-3.462l-.322-.286zM6 14c0-1.028.364-2.177.981-3.368.614-1.182 1.443-2.341 2.29-3.371A32.25 32.25 0 0 1 12 4.35a32.255 32.255 0 0 1 2.728 2.909c.848 1.03 1.677 2.19 2.29 3.372.618 1.191.982 2.34.982 3.368a6 6 0 0 1-12 0z"
        fill="currentColor"
      />
      <path
        d="M8.36 14.042a1 1 0 0 0-.674 1.243 4.508 4.508 0 0 0 3.029 3.029 1 1 0 1 0 .57-1.917 2.508 2.508 0 0 1-1.682-1.682 1 1 0 0 0-1.243-.673z"
        fill="currentColor"
      />
    </svg>
  );
}
