import React from 'react';
import { DisplayMap } from './displayMap';

const ArtistPage = (props) => {
  return (
    <>
      <DisplayMap longitude={props.longitude} latitude={props.latitude} />
      <h3>当日、出演するその他のミュージシャン</h3>
    </>
  );
};

export default ArtistPage;
