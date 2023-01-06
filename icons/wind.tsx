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
        d="M18.806 12.919a4 4 0 1 0-3.787-6.586 1 1 0 0 0 1.49 1.334 1.992 1.992 0 0 1 1.695-.657A2 2 0 0 1 18 11H3a1 1 0 1 0 0 2h15c.276 0 .546-.028.806-.081zM5 10h5.516a2.5 2.5 0 1 0-1.88-4.167 1 1 0 0 0 1.491 1.334A.5.5 0 1 1 10.5 8H5a1 1 0 0 0 0 2zm11.5 4H8a1 1 0 1 0 0 2h8.5a.5.5 0 1 1-.373.833 1 1 0 1 0-1.49 1.334A2.5 2.5 0 1 0 16.517 14H16.5z"
        fill="currentColor"
      />
    </svg>
  );
}
