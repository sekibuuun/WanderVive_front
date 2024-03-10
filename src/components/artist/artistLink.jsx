import React from 'react';
import { Button, List, ListItem, Center } from '@chakra-ui/react';
const ArtistLink = ({ band }) => {
  console.log(band);
  return band.tunecore || band.twitter || band.instagram || band.youtube || band.homePage ? (
    <Center>
      <List style={{ padding: '16px' }} display={'flex'} gap={2}>
        {band.tunecore ? (
          <ListItem>
            <Button as="a" color={'white'} bgColor={'rgba(0, 0, 0, 0.737)'} href={band.tunecore}>
              Tunecore
            </Button>
          </ListItem>
        ) : null}
        {band.twitter ? (
          <ListItem>
            <Button as="a" color={'white'} bgColor={'black'} href={band.twitter}>
              X
            </Button>
          </ListItem>
        ) : null}
        {band.instagram ? (
          <ListItem>
            <Button as="a" color={'white'} bgColor={'#E1306C'} href={band.instagram}>
              Instagram
            </Button>
          </ListItem>
        ) : null}
        {band.youtube ? (
          <ListItem>
            <Button as="a" color={'white'} bgColor={'rgba(204,0,0,0.9)'} href={band.youtube}>
              YouTube
            </Button>
          </ListItem>
        ) : null}
        {band.homepage ? (
          <ListItem>
            <Button as="a" href={band.homePage}>
              ホームページ
            </Button>
          </ListItem>
        ) : null}
      </List>
    </Center>
  ) : null;
};

export default ArtistLink;
