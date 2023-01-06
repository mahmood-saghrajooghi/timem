import type { Interpolation, Theme } from '@emotion/react';
import React from 'react';

type Props = React.SVGProps<SVGSVGElement> & {
  css?: Interpolation<Theme>;
};

export default function Logo256(props: Props) {
  return (
    <svg viewBox="0 0 224 260" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M222.703 66L194.99 82M222.703 66V98M222.703 66L194.99 50M111.851 258V226M111.851 258L139.564 242M111.851 258L84.1384 242M1 66L28.7128 82M1 66V98M1 66L28.7128 50M111.851 130L139.564 114M111.851 130L84.1384 114M111.851 130V162M194.99 210L222.703 194V162M28.7128 210L1 194V162M84.1384 18L111.851 2L139.564 18"
        stroke="currentColor"
        stroke-width="2"
      />
      <path
        d="M222.839 194V66L111.987 130V258L222.839 194Z"
        fill="currentColor"
        fillOpacity="0.4"
      />
      <path
        d="M1 194L111.851 258V130L1 66V194Z"
        fill="currentColor"
        fillOpacity="0.3"
      />
      <path
        d="M222.703 66L111.851 2L1 66L111.851 130L222.703 66Z"
        fill="currentColor"
        fillOpacity="0.2"
      />
    </svg>
  );
}
