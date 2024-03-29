import React from 'react';
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';
import { Center } from '@chakra-ui/react';

const containerStyle = {
  width: '100%',
  height: '300px',
};

const DisplayMap = (props) => {
  const center = {
    lat: props.latitude,
    lng: props.longitude,
  };
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    map.setZoom(15);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <Center mx={10}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={1} onLoad={onLoad} onUnmount={onUnmount}>
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
