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
        d="M6 10.6V4a1 1 0 0 1 0-2h12a1 1 0 1 1 0 2v6.6c.932 1.02 1.432 2.034 1.699 2.834.146.438.22.81.26 1.08a4.43 4.43 0 0 1 .04.43v.034l.001.013v.008s-.005-.131 0 .001a1 1 0 0 1-1 1h-6v5a1 1 0 1 1-2 0v-5H5a1 1 0 0 1-1-1v-.022a2.013 2.013 0 0 1 .006-.134 5.07 5.07 0 0 1 .035-.33c.04-.27.114-.642.26-1.08.267-.8.767-1.814 1.699-2.835zM16 4H8v7a1 1 0 0 1-.293.707c-.847.847-1.271 1.678-1.486 2.293H17.78c-.215-.615-.64-1.446-1.486-2.293A1 1 0 0 1 16 11V4z"
        fill="currentColor"
      />
    </svg>
  );
}
