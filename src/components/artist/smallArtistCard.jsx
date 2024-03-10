import { Box, Card, CardBody, Image, Stack, Text } from '@chakra-ui/react';

const SmallArtistCard = ({ band }) => {
  return (
    <Box paddingX={8}>
      <Card backgroundColor={'purple.400'} direction={'row'} overflow="hidden" variant="outline" paddingX={3}>
        <Image objectFit="contain" maxW={100} src={band.image.replace('./', '/')} alt="band" />
        <Stack>
          <CardBody>
            <Stack spacing="4">
              <Box>
                <Text color="white" fontSize="sm">
                  {band.gerne}
                </Text>
                <Text color="white" fontSize="ms" fontWeight="bold">
                  {band.bandName}
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Stack>
      </Card>
    </Box>
  );
};

export { SmallArtistCard };
