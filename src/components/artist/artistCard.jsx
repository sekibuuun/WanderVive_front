import { Card, CardBody, Image, Stack, Text, Divider, Center } from '@chakra-ui/react';

const ArtistCard = ({ band = {} }) => {
  return (
    <Card w="auto" margin={5} border="1px solid" borderColor="gray.400">
      <CardBody>
        <Center>
          {band.image ? (
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
  );
};

export { ArtistCard };
