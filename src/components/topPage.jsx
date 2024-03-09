import React from 'react';
import DatePicker from 'react-datepicker';
import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';

const TopPage = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <h3>
        {startDate.getMonth() + 1}月{startDate.getDate()}日、近くでできる演奏
      </h3>
      <h3>検索日時と範囲を指定</h3>
      <DatePicker closeOnScroll={true} showIcon selected={startDate} onChange={(date) => setStartDate(date)} />
    </>
  );
};

export { TopPage };
