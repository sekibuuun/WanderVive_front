import sampleBandImg from '../images/sampleband.png';
import { Card, CardBody, Image, Stack, Text } from '@chakra-ui/react';


const SmallArtistCard = () => {
  return (
    <Card backgroundColor={'purple'} direction={'row'} overflow="hidden" variant="outline">
      <Image objectFit="contain" maxW={100} src={sampleBandImg} alt="band" />

      <Stack>
        <CardBody backgro>
          <Stack spacing="3">
            <Text color="white" fontSize="ms" fontWeight="bold">
              バンド名
            </Text>
            <Text color="white" fontSize="sm">
              ジャンル
            </Text>
          </Stack>
        </CardBody>
      </Stack>
    </Card>

    // <Card  direction={'row'} overflow ="hidden" variant="outline" rounded="full">
    //   <Image objectFit="contain" maxW={100} src={sampleBandImg} alt="band" />

    //   <Stack >
    //     <CardBody >
    //       <Stack spacing="3">
    //         <Text color="black" fontSize="ms" fontWeight="bold">
    //           バンド名
    //         </Text>
    //         <Text color="gray" fontSize="sm">
    //           ジャンル
    //         </Text>
    //       </Stack>
    //     </CardBody>
    //   </Stack>
    // </Card>
  );
};

export { SmallArtistCard };
