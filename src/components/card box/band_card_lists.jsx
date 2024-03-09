// import React from 'react';
// import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';

// const BandCard = () => {
//   //関数

//   return (
//     <Card maxW="sm">
//       <CardBody>
//         <Image
//           src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
//           alt="Green double couch with wooden legs"
//           borderRadius="lg"
//         />
//         <Stack mt="6" spacing="3">
//           <Heading size="md">Living room Sofa</Heading>
//           <Text>
//             This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people
//             who love a chic design with a sprinkle of vintage design.
//           </Text>
//           <Text color="blue.600" fontSize="2xl">
//             $450
//           </Text>
//         </Stack>
//       </CardBody>
//       <Divider />
//       <CardFooter>
//         <ButtonGroup spacing="2">
//           <Button variant="solid" colorScheme="blue">
//             Buy now
//           </Button>
//           <Button variant="ghost" colorScheme="blue">
//             Add to cart
//           </Button>
//         </ButtonGroup>
//       </CardFooter>
//     </Card>
//   );
// };
// export { BandCard };

import React from 'react';
import { Card, CardBody, CardFooter, Stack, Heading, Divider, ButtonGroup, Button } from '@chakra-ui/react';

const BandCard = () => {
  // 関数

  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">リビングルーム用ソファ</Heading>
          <Text>
            このソファは、モダンなトロピカルスペース、バロックインスパイアードスペース、アーストーンのトーンを持つスペース、そしてヴィンテージデザインをちりばめたシックなデザインが好きな人々に最適です。
          </Text>
          <Text color="blue.600" fontSize="2xl">
            $450
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            今すぐ購入
          </Button>
          <Button variant="ghost" colorScheme="blue">
            カートに追加
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};
export { BandCard };
