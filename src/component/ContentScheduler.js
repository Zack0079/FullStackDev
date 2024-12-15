import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

const ContentScheduler = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <h3>Schedule Content</h3>
      <Calendar onChange={setDate} value={date} />
      <p>Selected Date: {date.toDateString()}</p>
    </div>
  );
};

export default ContentScheduler;