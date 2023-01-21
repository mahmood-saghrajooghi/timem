import type { ReactNode } from "react";

export function EventWrapper(props: any) {
  const { children } = props;
  return (
    <div className="bg-white">{children}</div>
  )
}