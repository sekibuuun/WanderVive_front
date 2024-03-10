import { Card, CardBody, Image, Stack, Text, Divider, Center } from '@chakra-ui/react';

const ArtistCard = ({ artistData }) => {
  const cards = [];

  if (artistData.contents && artistData.contents.length > 0) {
    artistData.contents.forEach((event) => {
      if (event.bands && event.bands.length > 0) {
        event.bands.forEach((band) => {
          cards.push(
            <Center key={band.bandId} padding={5}>
              <Card w="100%" padding={3} border="1px solid" borderColor="gray.400">
                <CardBody>
                  <Center>
                    <Image
                      src={band.image}
                      alt="bandImg"
                      borderRadius="lg"
                      w="100%"
                      h="auto"
                      objectFit="cover"
                      objectPosition="align"
                    />
                  </Center>
                  <Divider my="3" />
                  <Stack spacing="2" mx={2}>
                    <Text color="gray" fontSize="sm">
                      {band.gerne}
                    </Text>
                    <Text color="black" fontSize="lg" fontWeight="bold">
                      {band.bandName}
                    </Text>
                  </Stack>
                </CardBody>
              </Card>
            </Center>,
          );
        });
      }
    });
  }

  return cards;
};

export { ArtistCard };
