import { useState, useEffect } from 'react';
import { useCurrentLocation } from './useCurrentLocation';

const useTopPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedDistance, setSelectedDistance] = useState(500);
  const [data, setData] = useState([]);
  const userLocation = useCurrentLocation();

  const formatDate = (date) => {
    return `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`;
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleDistanceChange = (distance) => {
    setSelectedDistance(distance);
  };

  useEffect(() => {
    const getNearbyBands = async () => {
      const url = `http://localhost:8080/nearbyEvent?longitude=${userLocation.longitude}&latitude=${userLocation.latitude}&date=${formatDate(selectedDate)}&maxDist=${selectedDistance}`;
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    };
    if (userLocation) {
      getNearbyBands();
    }
  }, [selectedDate, selectedDistance, userLocation]);

  return {
    selectedDate,
    selectedDistance,
    data,
    userLocation,
    handleDateChange,
    handleDistanceChange,
  };
};

export { useTopPage };
