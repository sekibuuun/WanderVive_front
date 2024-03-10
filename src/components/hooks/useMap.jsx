import { useRef, useEffect, useState } from 'react';

export const useMap = (option) => {
  const ref = useRef(null);
  const [map, setMap] = useState();

  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, option));
    }
  }, [ref, map]);
  return ref;
};
