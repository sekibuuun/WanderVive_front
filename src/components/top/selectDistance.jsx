import { useState } from 'react';
import { Tabs, TabList, Tab, Flex } from '@chakra-ui/react';

const SelectDistance = ({ onSelectDistanceChange }) => {
  const [selectedDistance, setSelectedDistance] = useState(500);
  const meters = [50, 100, 500, 1000, 2000];

  const handleTabChange = (distance) => {
    setSelectedDistance(distance);
    onSelectDistanceChange(distance);
  };

  return (
    <>
      <Flex justify="center" align="center">
        <Tabs
          variant="soft-rounded"
          colorScheme="purple"
          width={395}
          index={meters.indexOf(selectedDistance)}
          onChange={(index) => handleTabChange(meters[index])}
        >
          <TabList justifyContent={'center'}>
            {meters.map((meter) => (
              <Tab key={meter}>{meter}</Tab>
            ))}
          </TabList>
        </Tabs>
      </Flex>
    </>
  );
};

export { SelectDistance };
