import type { Theme, Interpolation  } from '@emotion/react';
import React from "react";

type Props = React.SVGProps<SVGSVGElement> & {
  css?: Interpolation<Theme>;
};

export default function Icon(props: Props) {
  return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M8 7a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V9.414l-8.293 8.293a1 1 0 0 1-1.414-1.414L14.586 8H9a1 1 0 0 1-1-1z" fill="currentColor"/></svg>
    );
}