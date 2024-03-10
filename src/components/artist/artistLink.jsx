import React from 'react';

const ArtistLink = (props) => {
  return (
    <ul>
      {props.tunecore ? <a href={props.event.tunecore}>Tunecore</a> : null}
      {props.twitter ? <a href={props.event.twitter}>X</a> : null}
      {props.instagram ? <a href={props.event.instagram}>Instagram</a> : null}
      {props.youtube ? <a href={props.event.youtube}>YouTube</a> : null}
      {props.homepage ? <a href={props.event.homePage}>ホームページ</a> : null}
    </ul>
  );
};

export default ArtistLink;
