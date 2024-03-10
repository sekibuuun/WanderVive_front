import React from 'react';
import { DisplayMap } from './displayMap';
import ArtistInfo from './artistInfo';
import { useLocation } from 'react-router-dom';
import ArtistLink from './artistLink';
import EventInfo from './eventInfo';

const ArtistPage = () => {
  const location = useLocation();
  const { event, bandId } = location.state;
  console.log(bandId);
  console.log(event);
  const bands = event.bands;
  var selectedBand;
  const otherBands = [];
  bands.forEach((band) => {
    if (band.bandId == bandId) {
      selectedBand = band;
    } else {
      otherBands.push(band);
    }
  });
  return (
    <>
      <ArtistInfo artist={selectedBand} />
      <ArtistLink event={event} />
      <EventInfo event={event} />
      <h3>当日、出演するその他のミュージシャン</h3>
      <DisplayMap longitude={event.longitude} latitude={event.latitude} />
    </>
  );
};

export default ArtistPage;
