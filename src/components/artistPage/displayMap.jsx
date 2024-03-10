import React from 'react';
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';
import { Center } from '@chakra-ui/react';

const containerStyle = {
  width: '100%',
  height: '300px',
};

const center = {
  lat: 35.0237056,
  lng: 135.7545413,
};

const DisplayMap = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <Center mx={10}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={16} onLoad={onLoad} onUnmount={onUnmount}>
        {/* Child components, such as markers, info windows, etc. */}
        <MarkerF position={center} />
        <></>
      </GoogleMap>
    </Center>
  ) : (
    <></>
  );
};

export { DisplayMap };
