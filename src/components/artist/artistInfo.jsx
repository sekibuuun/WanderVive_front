import ArtistLink from './artistLink';

const ArtistInfo = (props) => {
  return (
    <>
      <div>
        <p>{props.artist.genre}</p>
        <h2>{props.artist.bandName}</h2>
      </div>
      <ArtistLink links={props.band} />
    </>
  );
};

export default ArtistInfo;
