import { css } from "@emotion/react";
import dayjs from "dayjs";
import React, { useCallback, useRef, useState, useEffect } from "react";
import classNames from "classnames";
import OutsideClickHandler from "react-outside-click-handler";

import Add from "icons/add";
import Play from "icons/play";
import Pause from "icons/pause";
import Check from "icons/check";
import Close from "icons/close";
import Delete from "icons/delete";
import Polygon from "icons/polygon";
import ChevronDown from "icons/chevron-down";

import { Label } from "components/Label";
import { SpacedChildren } from "components/styled/SpacedChildren";
import { Button, iconButtonCss, iconButtonCssSm } from "components/Button";
import { DateDiff } from "components/DateDiff";
import { Input } from "components/Input";
import { useCustomTimer } from "hooks/useCustomTimer";
import { getDateDiffString } from "utils/date-dift";
import { EstimateType, TaskStatus, TaskType } from "types/TaskTypes";
import { TaskLabel } from "./TaskLabel";
import { ThemeComponentColor, ThemeVariant } from "utils/theme-utils";

export const taskColors: Record<TaskStatus, string> = {
  DOING: "border-l-timem-blue-900",
  TODO: "border-l-timem-yellow-900",
  DONE: "border-l-timem-green-900",
  FAILED: "border-l-timem-red-900",
};

interface TaskProps {
  status: TaskStatus;
  title: string;
  desc: string;
  estimate: { h: number; m: number; s: number };
  deadline: Date;
  completed: Date | null;
  created: Date;
  isPlaying?: boolean;
  showDetails?: boolean;
  updateEstimate?: (estimate: EstimateType) => void;
  onPlay?: () => void;
  onPause?: () => void;
  onDone?: () => void;
  onUnDone?: () => void;
  onDelete?: () => void;
  onEdit?: (props: Partial<TaskType>) => void;
}

export function Task({
  status = "TODO",
  title,
  desc,
  estimate,
  deadline,
  completed,
  created,
  isPlaying = false,
  showDetails,
  onPause,
  onPlay,
  onDone,
  onUnDone,
  onEdit,
  updateEstimate,
  onDelete,
}: TaskProps) {
  const [isExpanded, setIsExpanded] = useState<boolean>(showDetails || false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const {
    isEditing: isEditingTaskEstimate,
    start,
    pause,
    renderTime,
    inputProps,
    handleExitEditingMode,
    labelProps,
  } = useCustomTimer({
    expiryTimestamp: estimate,
    onEdit: (estimate) => {
      updateEstimate?.(estimate);
    },
    onExpire: onPause,
  });
  const [syncTaskDate, setSyncTaskDate] = useState<Date>(deadline);
  const [taskLabels, setTaskLabels] = useState<
    {
      color: ThemeComponentColor;
      variant: ThemeVariant;
      title: string;
      id: string;
    }[]
  >([]);
  const descRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const toggleIsExpanded = useCallback(() => setIsExpanded((c) => !c), []);
  const handleDiscard = useCallback(() => {
    if (!titleRef.current || !descRef.current) {
      return;
    }
    titleRef.current.innerText = title;
    descRef.current.innerText = desc;
    setIsEditing(false);
  }, [titleRef, descRef, title, desc]);
  const handleSave = useCallback(() => {
    if (!titleRef.current || !descRef.current) {
      return;
    }
    onEdit?.({
      title: titleRef.current.innerText,
      desc: descRef.current.innerText,
    });
    setIsEditing(false);
  }, [titleRef, descRef]);

  useEffect(() => {
    if (isPlaying) {
      start();
    } else {
      pause();
    }
  }, [isPlaying]);

  const handleTitleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.metaKey && e.code === "Enter") {
        handleSave();
        var p = titleRef.current,
          s = window.getSelection(),
          r = document.createRange();
        if (!p || !s || !r) {
          return;
        }
        r.setStart(p, 1);
        r.setEnd(p, 1);
        s.removeAllRanges();
        s.addRange(r);
      }
      if (e.code === "Escape") {
        handleDiscard();
        var p = titleRef.current,
          s = window.getSelection(),
          r = document.createRange();
        if (!p || !s || !r) {
          return;
        }
        r.setStart(p, 1);
        r.setEnd(p, 1);
        s.removeAllRanges();
        s.addRange(r);
      }
    },
    []
  );

  return (
    <SpacedChildren
      spaceDirection="bottom"
      childSpace="0.5rem"
      className={classNames(
        "relative bg-white px-2 py-2 border-l-4 border border-timem-gray-100",
        taskColors[status]
      )}
      css={{ borderLeftStyle: "solid" }}
    >
      {/* content */}
      <SpacedChildren
        childSpace=".5rem"
        spaceDirection="right"
        className="flex pb-2 text-timem-gray-700 font-medium text-sm tracking-wide border-b border-dashed border-timem-gray-100"
      >
        <div
          contentEditable
          className="outline-0 leading-5"
          ref={titleRef}
          onInput={(e) => {
            setIsEditing(true);
          }}
          onKeyDown={handleTitleKeyDown}
        >
          {title}
        </div>

        {/* lables */}
        <SpacedChildren
          childSpace=".5rem"
          spaceDirection="right"
          className="flex-1 flex items-center ml-auto"
        >
          {taskLabels.map((label) => (
            <TaskLabel
              title={label.title}
              setTitle={(title: string) =>
                setTaskLabels((c) => c.map((l) => (l.id === label.id ? { ...l, title } : l)))
              }
              color={label.color}
              variant={label.variant}
              setColor={({
                color,
                variant,
              }: {
                color: ThemeComponentColor;
                variant: ThemeVariant;
              }) =>
                setTaskLabels((c) =>
                  c.map((l) =>
                    l.id === label.id ? { ...l, color, variant } : l
                  )
                )
              }
            />
          ))}
          <Button
            color="green"
            variant="light"
            css={iconButtonCssSm}
            onClick={() => {
              setTaskLabels((c) => [
                ...c,
                {
                  title: "",
                  // TODO: get this infor from user preferences
                  color: "gray",
                  variant: "light",
                  id: crypto.randomUUID(),
                },
              ]);
            }}
          >
            <Add width={12} />
          </Button>
        </SpacedChildren>

        <SpacedChildren
          childSpace=".5rem"
          spaceDirection="right"
          className="flex items-center ml-auto"
        >
          {isEditingTaskEstimate ? (
            <OutsideClickHandler onOutsideClick={handleExitEditingMode}>
              <Input
                {...inputProps}
                color="white-outline"
                variant="dark"
                cSize="sm"
                autoFocus
                className="h-[20px] py-0 flex items-center"
              />
            </OutsideClickHandler>
          ) : (
            <Label
              {...labelProps}
              color="light-gray"
              variant="dark"
              size="sm"
              className="h-[20px] py-0 flex items-center"
            >
              {renderTime()}
            </Label>
          )}
          <Button
            onClick={toggleIsExpanded}
            color="light-gray"
            css={css([iconButtonCss, { width: 20, height: 20 }])}
          >
            <ChevronDown
              className="text-timem-gray-500"
              css={css({ transform: isExpanded ? "rotate(180deg)" : "" })}
              width={12}
            />
          </Button>
        </SpacedChildren>
      </SpacedChildren>
      <div
        contentEditable
        ref={descRef}
        onInput={() => setIsEditing(true)}
        className={classNames(
          "pb-2 text-timem-gray-700 font-medium text-xs tracking-normal outline-0 border-b border-dashed border-timem-gray-100",
          { hidden: !isExpanded }
        )}
      >
        {desc}
      </div>
      {/* footer */}
      <SpacedChildren
        childSpace=".25rem"
        spaceDirection="right"
        className="flex items-end"
      >
        {/* footer-left  */}

        <Label size="xs" className="whitespace-nowrap pl-0" color="white">
          <span className="text-timem-gray-400 mr-1">Created:</span>
          <span className="font-bold">
            {getDateDiffString(
              created,
              dayjs(new Date()).subtract(1, "days").toDate()
            )}
          </span>
        </Label>
        {completed !== null ? (
          <Label size="xs" className="whitespace-nowrap" color="white-outline">
            Completed:{" "}
            {getDateDiffString(new Date(), dayjs(completed).toDate())}
          </Label>
        ) : null}

        <div className="flex items-center h-6">
          <Polygon width={4} className={`text-timem-gray-900`} />
        </div>

        <Label size="xs" className="whitespace-nowrap" color="white">
          <span className="text-timem-gray-400 mr-1">Deadline:</span>

          <DateDiff
            minDate={dayjs(new Date()).add(1, "days").toDate()}
            value={syncTaskDate}
            onChange={(v) => {
              if (!v) {
                return;
              }
              setSyncTaskDate(v);
              onEdit?.({ deadline: v });
            }}
            required
          />
        </Label>

        {/* footer-right */}
        <SpacedChildren
          childSpace=".25rem"
          spaceDirection="right"
          className="flex ml-auto text-timem-gray-900"
        >
          {isEditing && (
            <>
              <Button
                size="xs"
                color="white-outline"
                css={css({ height: 20, paddingTop: 0, paddingBottom: 0 })}
                onClick={handleDiscard}
              >
                Discard
              </Button>
              <Button
                size="xs"
                css={css({ height: 20, paddingTop: 0, paddingBottom: 0 })}
                onClick={handleSave}
              >
                Save
              </Button>
            </>
          )}
          {!isEditing && status === "TODO" && (
            <Button
              onClick={onDelete}
              color="white"
              variant="light"
              css={iconButtonCss}
            >
              <Delete width={13} />
            </Button>
          )}
          {!isPlaying && !isEditing && status !== "DONE" && (
            <Button
              onClick={onPlay}
              color="white"
              variant="light"
              css={iconButtonCss}
            >
              <Play width={16} />{" "}
            </Button>
          )}
          {isPlaying && !isEditing && status !== "DONE" && (
            <Button
              onClick={onPause}
              color="white"
              variant="light"
              css={iconButtonCss}
            >
              <Pause width={20} />
            </Button>
          )}

          {!isEditing && status !== "DONE" && (
            <Button
              onClick={onDone}
              color="white"
              variant="light"
              css={iconButtonCss}
            >
              <Check width={14} />
            </Button>
          )}
          {!isEditing && status === "DONE" && (
            <Button
              onClick={onUnDone}
              color="white"
              variant="light"
              css={iconButtonCss}
            >
              <Close width={14} />
            </Button>
          )}
        </SpacedChildren>
      </SpacedChildren>
    </SpacedChildren>
  );
}
