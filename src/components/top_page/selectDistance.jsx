import { useState } from 'react';

const SelectDistance = ({ onSelectDistanceChange }) => {
  const [selectedDistance, setSelectedDistance] = useState(50);
  const meters = [50, 100, 500, 1000, 2000];
  const handleButtonClick = (distance) => {
    setSelectedDistance(distance);
    onSelectDistanceChange(distance);
  };

  return (
    <div>
      {meters.map((meter) => (
        <button key={meter} onClick={() => handleButtonClick(meter)}>
          {meter}
        </button>
      ))}
    </div>
  );
};

export { SelectDistance };
