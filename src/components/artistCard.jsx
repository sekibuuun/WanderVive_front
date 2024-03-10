import { Card, CardBody, Image, Stack, Text, Divider, Center } from '@chakra-ui/react';

const ArtistCard = ({ artistData }) => {
  const cards = [];

  if (artistData.contents && artistData.contents.length > 0) {
    artistData.contents.forEach((event) => {
      if (event.bands && event.bands.length > 0) {
        event.bands.forEach((band) => {
          cards.push(
            <Card maxW="sm" key={band.bandId}>
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
            </Card>,
          );
        });
      }
    });
  }

  return cards;
};

export { ArtistCard };
