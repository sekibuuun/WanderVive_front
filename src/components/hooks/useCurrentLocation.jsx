import { useState } from 'react';

export const useCurrentLocation = () => {
  const [userLocation, setUserLocation] = useState(null);

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ latitude, longitude });
      },
      (error) => {
        console.error('Error getting user location:', error);
      },
    );
  } else {
    console.error('Geolocation is not supported by this browser.');
  }

  return userLocation;
};
