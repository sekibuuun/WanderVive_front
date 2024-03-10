import { Card, CardBody, Image, Stack, Text, Divider, Center } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const ArtistCardList = ({ data }) => {
  const cards = [];

  if (data.contents && data.contents.length > 0) {
    data.contents.forEach((event) => {
      if (event.bands && event.bands.length > 0) {
        event.bands.forEach((band) => {
          cards.push(
            <Link to={`/bands/${band.bandId}`} state={{ event: event, bandId: band.bandId }}>
              <Center key={band.bandId} padding={5}>
                <Card w="100%" padding={3} border="1px solid" borderColor="gray.400">
                  <CardBody>
                    <Center>
                      {band.image ? (
                        <Image
                          src={band.image}
                          alt="bandImg"
                          borderRadius="lg"
                          boxSize={200}
                          w="100%"
                          h="auto"
                          objectFit="cover"
                          objectPosition="align"
                        />
                      ) : null}
                    </Center>
                    <Divider my="6" />
                    <Stack mt="6" spacing="3">
                      <Stack spacing="2" mx={2}>
                        <Text color="gray" fontSize="sm">
                          {band.gerne}
                        </Text>
                        <Text color="black" fontSize="lg" fontWeight="bold">
                          {band.bandName}
                        </Text>
                      </Stack>
                    </Stack>
                  </CardBody>
                </Card>
              </Center>
            </Link>,
          );
        });
      }
    });
  }

  return cards;
};

export { ArtistCardList };
