import styled from "styled-components";

function Calendar() {
  return (
    <StyledCalendar>
      <StyledCalendarIframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Europe%2FLondon&amp;src=bTdzbjczZ3JlZW9sZzNlcHY2cXN2ZjNjM29AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23616161"></StyledCalendarIframe>
    </StyledCalendar>

  );
}

// 
const StyledCalendar = styled.div`
  
`;
const StyledCalendarIframe = styled.iframe`
  border: solid 1px #777;
  width: 100vw;
  height: 60vh; 
  frameborder: 0;
  scrolling: no;
`;

export default Calendar;
