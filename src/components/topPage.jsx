import React from 'react';
import DatePicker from 'react-datepicker';
import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import Header from './header';

const TopPage = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <Header />
      <h3>
        
      </h3>
      <h3></h3>
      <DatePicker closeOnScroll={true} showIcon selected={startDate} onChange={(date) => setStartDate(date)} />
    </>
  );
};

export { TopPage };
