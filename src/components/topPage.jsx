import React from 'react';
import DatePicker from 'react-datepicker';
import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';

const TopPage = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <h3>[date]、近くでできる演奏</h3>
      <DatePicker closeOnScroll={true} showIcon selected={startDate} onChange={(date) => setStartDate(date)} />
    </>
  );
};

export { TopPage };
