import sampleBandImg from '../images/sampleband.png';
import { Card, CardBody, Image, Stack, Text, Divider, Center } from '@chakra-ui/react';

const ArtistCard = () => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Center>
          <Image
            src={sampleBandImg}
            alt="bandImd"
            borderRadius="lg"
            boxSize={200}
            objectFit="cover"
            objectPosition="align"
          />
        </Center>
        <Divider my="6" />
        <Stack mt="6" spacing="3">
          <Text color="gray">ジャンル</Text>
          <Text color="black" fontSize="2xl" fontWeight="bold">
            バンド名
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

export { ArtistCard };
