import { DisplayMap } from './displayMap';
import { useLocation } from 'react-router-dom';
import ArtistLink from './artistLink';
import EventInfo from './eventInfo';
import { ArtistCard } from './artistCard';
import { SmallArtistCard } from './smallArtistCard';
import { Text } from '@chakra-ui/react';

const ArtistPage = () => {
  const location = useLocation();
  const { event, bandId } = location.state;
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
      <ArtistCard band={selectedBand} />
      <EventInfo event={event} />
      <DisplayMap longitude={event.longitude} latitude={event.latitude} />
      <ArtistLink band={selectedBand} />
      <Text px={8} py={3} fontWeight="bold">
        当日、出演するその他のバンド
      </Text>
      {otherBands.map((band) => (
        <SmallArtistCard key={band} band={band} />
      ))}
    </>
  );
};

export default ArtistPage;
