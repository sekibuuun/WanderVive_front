import { Card, CardBody, Image, Stack, Text, Divider, Center } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const ArtistCardList = ({ data }) => {
  return (
    <>
      {data.contents?.flatMap((event) =>
        event.bands?.map((band) => (
          <Link
            key={event.eventId + ':' + band.bandId}
            to={`/bands/${band.bandId}`}
            state={{ event, bandId: band.bandId }}
          >
            <Center padding={5}>
              <Card w="100%" padding={3} border="1px solid" borderColor="gray.400">
                <CardBody>
                  <Center>
                    {band.image && (
                      <Image
                        src={'/images/' + band.bandName + '.png'}
                        alt="bandImg"
                        borderRadius="lg"
                        boxSize={200}
                        w="100%"
                        h="auto"
                        objectFit="cover"
                        objectPosition="align"
                      />
                    )}
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
          </Link>
        )),
      ) || null}
    </>
  );
};

export { ArtistCardList };
