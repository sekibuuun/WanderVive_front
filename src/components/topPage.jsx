import React from 'react';
import DatePicker from 'react-datepicker';
import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { Heading, Center, VStack } from '@chakra-ui/react';
import { ArtistCard } from './artistCard';

const TopPage = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <Center h="100%">
        <Heading as="h2" size="xl">
          {startDate.getMonth() + 1}月{startDate.getDate()}日、近くで聴ける演奏
        </Heading>
      </Center>

      <Center h="100%">
        <Heading as="h2" size="xl">
          検索日時と範囲を指定
        </Heading>
      </Center>
      <Center h="100%">
        <DatePicker closeOnScroll={true} showIcon selected={startDate} onChange={(date) => setStartDate(date)} />
      </Center>
      <VStack>
        <ArtistCard />
        <ArtistCard />
        <ArtistCard />
      </VStack>
    </>
  );
};

export { TopPage };
