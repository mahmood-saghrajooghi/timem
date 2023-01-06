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
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5 4.797c1.517-.312 2.67-.33 3.626-.211 1.119.14 2.018.473 3.023.85l.03.012c.987.37 2.08.78 3.447.95 1.104.139 2.355.118 3.874-.158v8.963c-1.517.312-2.67.33-3.626.211-1.119-.14-2.018-.473-3.023-.85l-.03-.012c-.987-.37-2.08-.78-3.447-.95-1.104-.139-2.355-.118-3.874.158V4.797zm14.758-.767c-1.9.475-3.275.523-4.384.384-1.119-.14-2.018-.473-3.023-.85l-.03-.012c-.987-.37-2.08-.78-3.447-.95-1.387-.174-3.006-.098-5.096.423A1 1 0 0 0 3 4v17a1 1 0 1 0 2 0v-5.203c1.517-.312 2.67-.33 3.626-.211 1.119.14 2.018.473 3.023.85l.03.012c.987.37 2.08.78 3.447.95 1.391.174 3.017.097 5.117-.428A1 1 0 0 0 21 16V5a1 1 0 0 0-1.242-.97z"
        fill="currentColor"
      />
    </svg>
  );
}
