import { useState } from 'react';
import { Tabs, TabList, Tab, Flex, TabPanel, TabPanels } from '@chakra-ui/react';

const SelectDistance = ({ onSelectDistanceChange }) => {
  const [selectedDistance, setSelectedDistance] = useState(50);
  const meters = [50, 100, 500, 1000, 2000];
  const handleButtonClick = (distance) => {
    setSelectedDistance(distance);
    onSelectDistanceChange(distance);
  };

  return (
    <>
      <Flex h={100} justify="center">
        <Tabs variant="soft-rounded" colorScheme="purple" width={395}>
          <TabList>
            {meters.map((meter) => (
              <Tab>
                <button key={meter} onClick={() => handleButtonClick(meter)}>
                  {meter}
                </button>
              </Tab>
            ))}
          </TabList>
          <TabPanels>
            {meters.map((meter) => (
              <TabPanel>
                <p>{meter}m</p>
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </Flex>
    </>
  );
};

export { SelectDistance };
