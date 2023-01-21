import type { MantineColor } from "@mantine/core";
import { useRef } from "react";
import classNames from "classnames";
import { Popover, Tooltip } from "@mantine/core";

import { Label } from "components/Label";
import { Input } from "components/Input";
import { sleep } from "utils/sleep";
import {
  themeBgColorClassNames,
  ThemeComponentColor,
  themeTextColorClassNames,
  ThemeVariant,
} from "utils/theme-utils";

const DEFAULT_LABEL_NAME = "Add label";

const TOOLTIP_COLOR_MAP: Record<ThemeComponentColor, MantineColor> = {
  gray: "gray",
  red: "red",
  yellow: "yellow",
  green: "green",
  blue: "blue",
  primary: "orange",
  secondary: "gray",
  "light-gray": "gray",
  "white-outline": "gray",
  dark: "dark",
  white: "gray",
};

interface TaskLabelProps {
  title: string;
  setTitle: (title: string) => void;
  color: ThemeComponentColor;
  variant: ThemeVariant;
  setColor: (args: {
    color: ThemeComponentColor;
    variant: ThemeVariant;
  }) => void;
}

export function TaskLabel({
  title,
  setTitle,
  color: selectedColor,
  variant: selectedVariant,
  setColor,
}: TaskLabelProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <Popover
      width={200}
      onOpen={async () => {
        // Takes some time to for the input element to be rendered
        // We need to wait for it to be rendered before we can focus it
        await sleep(50);
        inputRef.current?.focus();
      }}
      position="bottom-start"
      transition="pop-top-left"
    >
      <Popover.Target>
        <button ref={buttonRef}>
          <Label
            size="xxs"
            color={selectedColor}
            variant={selectedVariant}
            className="text-xs"
          >
            {title ? title : DEFAULT_LABEL_NAME}
          </Label>
        </button>
      </Popover.Target>
      <Popover.Dropdown>
        <div className="py-1 px-1">
          <div className="mb-2">
            <Input
              color="white-outline"
              cSize="sm"
              value={title}
              onChange={(e) => setTitle(e.currentTarget.value)}
              placeholder={DEFAULT_LABEL_NAME}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  
                  buttonRef.current?.focus();
                }
              }}
              ref={inputRef}
            />
          </div>

          <div className="mt-1 mb-2 border-b border-dashed"></div>
          <div className="grid grid-cols-3 gap-2">
            {Object.keys(themeBgColorClassNames)
              .filter((color) => !["white", "dark"].includes(color))
              .map((color: string) =>
                Object.keys(
                  themeBgColorClassNames[color as ThemeComponentColor]
                ).map((variant: string) => (
                  <Tooltip
                    label={`${variant} ${color}`}
                    color={TOOLTIP_COLOR_MAP[color as ThemeComponentColor]}
                    key={`${variant} ${color}`}
                  >
                    <button
                      className={classNames(
                        "uppercase h-5 flex justify-center items-center",
                        themeBgColorClassNames[color as ThemeComponentColor][
                          variant as ThemeVariant
                        ].base,
                        themeTextColorClassNames[color as ThemeComponentColor][
                          variant as ThemeVariant
                        ],
                        {
                          [`ring ring-timem-${color}-600`]:
                            color === selectedColor &&
                            variant === selectedVariant,
                        }
                      )}
                      onClick={() => {
                        setColor({
                          color: color as ThemeComponentColor,
                          variant: variant as ThemeVariant,
                        });
                        buttonRef.current?.focus();
                      }}
                    >
                      {variant[0]}
                      {color[0]}
                    </button>
                  </Tooltip>
                ))
              )}
          </div>
        </div>
      </Popover.Dropdown>
    </Popover>
  );
}
