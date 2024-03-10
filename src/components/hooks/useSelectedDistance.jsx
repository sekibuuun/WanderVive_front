import { useState } from 'react';

const useSelectedDistance = (onSelectDistanceChange) => {
  const [selectedDistance, setSelectedDistance] = useState(500);

  const handleTabChange = (distance) => {
    setSelectedDistance(distance);
    onSelectDistanceChange(distance);
  };

  return { selectedDistance, handleTabChange };
};

export { useSelectedDistance };
