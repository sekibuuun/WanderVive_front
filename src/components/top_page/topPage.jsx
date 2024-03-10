import { useState, useEffect } from 'react';
import { Calendar } from './calendar';
import { SelectDistance } from './selectDistance';
import { Subtitle } from './subtitle';
import { useCurrentLocation } from '../hooks/useCurrentLocation';

const TopPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedDistance, setSelectedDistance] = useState(10000000);
  const userLocation = useCurrentLocation();

  const formatDate = (date) => {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    // ここで選択された日付を使用できます
    console.log('Selected Date:', date);
  };

  const handleDistanceChange = (distance) => {
    setSelectedDistance(distance);
    // ここで選択された距離を使用できます
    console.log('Selected Distance:', distance);
  };

  useEffect(() => {
    const getNearbyBands = async () => {
      const url = `/api/nearbyEvent?longitude=${userLocation.longitude}&latitude=${userLocation.latitude}&${formatDate(selectedDate)}&maxDist=${selectedDistance}`;
      console.log('URL:', url);
      const response = await fetch(url);
      const data = await response.json();
      console.log('Nearby Bands:', data);
    };
    if (userLocation) {
      getNearbyBands();
    }
  }, [selectedDate, selectedDistance, userLocation]);

  return (
    <div>
      {selectedDate && <Subtitle date={selectedDate} distance={selectedDistance} />}
      <Calendar onDateChange={handleDateChange} />
      <SelectDistance onSelectDistanceChange={handleDistanceChange} />
    </div>
  );
};

export { TopPage };

// import React from 'react';
// import DatePicker from 'react-datepicker';
// import { Heading, Center, VStack } from '@chakra-ui/react';
// import { ArtistCard } from '../artistCard';
// import { Search } from './search';

// return (
//   <>
//     <Center h="100%">
//       <Heading as="h2" size="xl">
//         {startDate.getMonth() + 1}月{startDate.getDate()}日、近くで聴ける演奏
//       </Heading>
//     </Center>

//     <Center h="100%">
//       <Heading as="h2" size="xl">
//         検索日時と範囲を指定
//       </Heading>
//     </Center>
//     <Center h="100%">
//       <DatePicker closeOnScroll={true} showIcon selected={startDate} onChange={(date) => setStartDate(date)} />
//     </Center>
//     <VStack>
//       <ArtistCard />
//       <ArtistCard />
//       <ArtistCard />
//     </VStack>
//   </>
