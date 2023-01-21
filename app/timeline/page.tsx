"use client";

import moment from "moment";
import { SpacedChildren } from "components/styled/SpacedChildren";
import { TimelineItem } from "components/TimelineItem";
import { MyCalendar } from "components/calendar/Calendar";

const timeline = () => {
  return (
    <>
      <MyCalendar />
      {/* context */}
      {/* <SpacedChildren
        spaceDirection="bottom"
        childSpace="-.5rem"
        className="flex flex-col p-2 flex-1 overflow-y-auto"
      >
        <TimelineItem
          title="test"
          desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, laboriosam."
          completed={new Date()}
          color="green"
          estimate={{ h: 0, m: 25, s: 0 }}
          doneIn={{ h: 0, m: 25, s: 0 }}
        />
        <TimelineItem
          title="test"
          desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, laboriosam."
          completed={new Date()}
          color="red"
          estimate={{ h: 0, m: 25, s: 0 }}
          doneIn={{ h: 0, m: 25, s: 0 }}
        />
        <TimelineItem
          title="test"
          desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, laboriosam."
          completed={new Date()}
          color="primary"
          estimate={{ h: 0, m: 25, s: 0 }}
          doneIn={{ h: 0, m: 25, s: 0 }}
        />
        <TimelineItem
          title="test"
          desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, laboriosam."
          completed={new Date()}
          color="blue"
          estimate={{ h: 0, m: 25, s: 0 }}
          doneIn={{ h: 0, m: 25, s: 0 }}
        />
        <TimelineItem
          title="test"
          desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, laboriosam."
          completed={new Date()}
          color="gray"
          estimate={{ h: 0, m: 25, s: 0 }}
          doneIn={{ h: 0, m: 25, s: 0 }}
        />
        <TimelineItem
          title="test"
          desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, laboriosam."
          completed={new Date()}
          color="secondary"
          estimate={{ h: 0, m: 25, s: 0 }}
          doneIn={{ h: 0, m: 25, s: 0 }}
        />
      </SpacedChildren> */}
    </>
  );
};

export default timeline;
