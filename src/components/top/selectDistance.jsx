import { Tabs, TabList, Tab, Flex } from '@chakra-ui/react';
import { useSelectedDistance } from '../hooks/useSelectedDistance';

const SelectDistance = ({ onSelectDistanceChange }) => {
  const { selectedDistance, handleTabChange } = useSelectedDistance(onSelectDistanceChange);
  const meters = [50, 100, 500, 1000, 2000];

  return (
    <>
      <Flex justify="center" align="center" my={3}>
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
