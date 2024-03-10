import React from 'react';
import { DisplayMap } from './displayMap';

const ArtistPage = (props) => {
  return (
    <>
      <h3>当日、出演するその他のミュージシャン</h3>
      <DisplayMap longitude={props.longitude} latitude={props.latitude} />
    </>
  );
};

export default ArtistPage;
