import { React } from 'react';
import { Wrapper, Map, Marker, Status } from '@googlemaps/react-wrapper';
import { useMap } from '../hooks/useMap';
import { Wrap } from '@chakra-ui/react';

const VIEW_STYLE = {
  width: '100%',
  aspectRatio: '16 / 9',
};

const Content = (props) => {
  const option = {
    center: props.position,
    zoom: 10,
  };
  const ref = useMap(option);
  return <div style={VIEW_STYLE} ref={ref} />;
};

const DisplayMap = (props) => {
  const position = { lat: 35.6973225, lng: 139.8265658 };
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const render = (status) => {
    return <h1>{status}</h1>;
  };
  return (
    <>
      <h3>演奏場所の表示</h3>
      <Wrapper apiKey={apiKey} render={render}>
        <Content position={position} />
      </Wrapper>
    </>
  );
};

export default DisplayMap;
