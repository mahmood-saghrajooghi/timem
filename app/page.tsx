"use client";

import React, { useCallback, useContext, useState } from "react";
import { Menu } from "@mantine/core";
import { css } from "@emotion/react";
import { Button } from "components/Button";
import { Input } from "components/Input";
import { SpacedChildren } from "components/styled/SpacedChildren";
import { Task } from "components/Task";
import { Topic } from "components/Topic";
import { useAppLoadingContext } from "context/loadingContext";
import { useTopicContext } from "context/topic/context";
import Filter from "icons/filter";
import Search from "icons/search";
import { Switch } from "components/Switch";


const iconButtonCss = css({
  padding: 0,
  width: 26,
  height: 26,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export default function Home() {
  const [, setAppIsLoading] = useAppLoadingContext();

  const {
    updateTask,
    playTask,
    pauseTask,
    addTask,
    filteredTopics,
    filterOptions,
    setFilterOptions,
    updateTopic,
    addNewTopic,
    deleteTask,
  } = useTopicContext();

  const handleSearchInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const searchStr = e?.currentTarget?.value;
      setFilterOptions((c) => ({ ...c, searchStr }));
    },
    []
  );

  return (
    <>
      {/* header */}
      <div className="p-2 pb-0">
        <SpacedChildren
          spaceDirection="right"
          childSpace=".5rem"
          className="bg-white flex"
        >
          <Menu size="md" closeOnItemClick={false} position="bottom-start">
            <Menu.Target>
              <Button css={iconButtonCss} color="light-gray">
                <Filter width={16} />
              </Button>
            </Menu.Target>
            <Menu.Dropdown>
              <div className="py-1 px-1">
                <Menu.Label
                  className="text-sm p-0"
                  css={{ fontFamily: "Roboto Mono, monospace" }}
                >
                  Filter Options
                </Menu.Label>
                <div className="my-1 border-b border-dashed"></div>
                <Menu.Item
                  className="text-sm font-medium h-5 p-0 mb-1"
                  css={{ fontFamily: "Roboto Mono, monospace" }}
                  rightSection={
                    <Switch
                      checked={filterOptions.status === "TODO"}
                      onChange={(event) => {
                        const checked = event.currentTarget.checked;
                        setFilterOptions((c) => ({
                          ...c,
                          status: checked ? "TODO" : null,
                        }));
                      }}
                    />
                  }
                >
                  Show pending
                </Menu.Item>
                <Menu.Item
                  className="text-sm font-medium h-5 p-0"
                  css={{ fontFamily: "Roboto Mono, monospace" }}
                  rightSection={
                    <Switch
                      checked={filterOptions.status === "DONE"}
                      onChange={(event) => {
                        const checked = event.currentTarget.checked;
                        setFilterOptions((c) => ({
                          ...c,
                          status: checked ? "DONE" : null,
                        }));
                      }}
                    />
                  }
                >
                  Show compelete
                </Menu.Item>
              </div>
            </Menu.Dropdown>
          </Menu>
          <div className="relative flex-1 flex">
            <Search
              width={14}
              className="absolute top-1/2 -translate-y-1/2 left-2 text-timem-gray-100"
            />
            <Input
              color="white-outline"
              cSize="sm"
              size={1}
              className="pl-7 flex-1"
              placeholder="Search todos"
              value={filterOptions.searchStr}
              onChange={handleSearchInputChange}
            />
          </div>
          <Button size="sm" onClick={addNewTopic}>
            New topic
          </Button>
        </SpacedChildren>
      </div>

      {/* context */}
      <SpacedChildren
        spaceDirection="bottom"
        childSpace=".5rem"
        className="flex flex-col p-2 pt-0 flex-1 overflow-y-auto"
      >
        {filteredTopics.map((topic) => (
          <Topic
            key={topic.id}
            title={topic.title}
            addTask={() => addTask(topic.id)}
            onUpdateTopic={(updates) => updateTopic(topic.id, updates)}
            pendingTasksCount={
              topic.tasks.filter((tsk) => tsk.status === "TODO").length
            }
            completeTasksCount={
              topic.tasks.filter((tsk) => tsk.status === "DONE").length
            }
            totalTasksCount={topic.tasks.length}
          >
            {topic.tasks
              .filter((t) => t.status !== "DOING")
              .map((task) => (
                <Task
                  key={task.id}
                  status={task.status}
                  title={task.title}
                  desc={task.desc}
                  created={task.created}
                  estimate={task.estimate}
                  deadline={task.deadline}
                  completed={task.completed}
                  onPlay={() => {
                    playTask(task.id);
                    updateTask({
                      topicId: task.topicId,
                      taskId: task.id,
                      taskValues: {
                        status: "DOING",
                      },
                    });
                  }}
                  onPause={() => {
                    pauseTask(task.id);
                  }}
                  onEdit={(taskValues) => {
                    updateTask({
                      topicId: task.topicId,
                      taskId: task.id,
                      taskValues,
                    });
                  }}
                  updateEstimate={(estimate) => {
                    updateTask({
                      topicId: task.topicId,
                      taskId: task.id,
                      taskValues: { estimate },
                    });
                  }}
                  onDone={() => {
                    pauseTask(task.id);
                    updateTask({
                      topicId: task.topicId,
                      taskId: task.id,
                      taskValues: {
                        status: "DONE",
                        completed: new Date(),
                      },
                    });
                  }}
                  onUnDone={() => {
                    updateTask({
                      topicId: task.topicId,
                      taskId: task.id,
                      taskValues: {
                        status: "TODO",
                        completed: null,
                      },
                    });
                  }}
                  onDelete={() => {
                    deleteTask(task.id);
                  }}
                />
              ))}
          </Topic>
        ))}
      </SpacedChildren>
    </>
  );
}
