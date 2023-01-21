import type { ReactNode } from "react";

import Add from "icons/add";

export function TimeSlotWrapper(props: any) {
  const { children, resource } = props;
  return (
    <div className="flex-1 relative group/item">
      {children}
      {!resource && (
        <div className="flex items-center absolute top-0 left-0 w-full h-full opacity-0 group-hover/item:opacity-100 bg-timem-green-200">
          <Add width={12} className="text-timem-green-900" />
        </div>
      )}
    </div>
  );
}
