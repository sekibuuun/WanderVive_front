import { Card, CardBody, Image, Stack, Text, Divider, Center } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const ArtistCard = ({ data }) => {
  const cards = [];

  if (data.contents && data.contents.length > 0) {
    data.contents.forEach((event) => {
      if (event.bands && event.bands.length > 0) {
        event.bands.forEach((band) => {
          cards.push(
            <Link to="/artist" state={{ event: event, bandId: band.bandId }}>
              <Card maxW="sm">
                <CardBody>
                  <Center>
                    <Image
                      src={band.image}
                      alt="bandImg"
                      borderRadius="lg"
                      boxSize={200}
                      objectFit="cover"
                      objectPosition="align"
                    />
                  </Center>
                  <Divider my="6" />
                  <Stack mt="6" spacing="3">
                    <Text color="gray">{band.gerne}</Text>
                    <Text color="black" fontSize="2xl" fontWeight="bold">
                      {band.bandName}
                    </Text>
                  </Stack>
                </CardBody>
              </Card>
            </Link>,
          );
        });
      }
    });
  }

  return cards;
};

export { ArtistCard };
