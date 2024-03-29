import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Center } from '@chakra-ui/react';

const Calendar = ({ onDateChange }) => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <Center h="100%" m={3}>
      <DatePicker
        closeOnScroll={true}
        showIcon
        selected={startDate}
        dateFormat="yyyy/MM/dd"
        onChange={(date) => {
          setStartDate(date);
          onDateChange(date);
        }}
      />
    </Center>
  );
};

export { Calendar };
