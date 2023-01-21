import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import styled from "@emotion/styled";

import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import enUS from "date-fns/locale/en-US";

import { TimeSlotWrapper } from "./TimeSlotWrapper";
import { EventWrapper } from "./EventWrapper";

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const CalendarWrapper = styled.div`
  overflow-x: auto;
  .rbc-calendar {
    .rbc-time-column {
      .rbc-timeslot-group {
        min-height: 80px;
        .rbc-time-slot {
          border-top: 0;
        }
      }
    }
  }
`;

export function MyCalendar() {
  return (
    <CalendarWrapper>
      <Calendar
        localizer={localizer}
        events={[
          {
            end: new Date(),
            start: new Date(Date.now() - 1000 * 100 * 50),
            title: "test",
          },
        ]}
        timeslots={6}
        step={10}
        components={{
          timeSlotWrapper: TimeSlotWrapper,
          // eventWrapper: EventWrapper,
          // timeGutterWrapper: TimeSlotWrapper,
          // timeGutterHeader: TimeSlotWrapper,
        }}
        onSelectSlot={(slotInfo) => {
          console.log(slotInfo);
        }}
        eventPropGetter={(event, start, end, isSelected) => {
          console.log({ event, start, end, isSelected });
          return {
            className: "bg-timem-green-200",
          };
        }}
        selectable
        startAccessor="start"
        defaultView="week"
        endAccessor="end"
      />
    </CalendarWrapper>
  );
}
