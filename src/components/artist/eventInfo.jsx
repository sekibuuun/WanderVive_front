import React from 'react';
import { Card, Text, Divider, Heading, Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
const EventInfo = (props) => {
  return (
    <>
      <Card p={8} variant={'outline'}>
        <Heading size="md">
          {props.event.eventName} @{props.event.livehouseName}
        </Heading>
        <Divider />
        <span>¥{props.event.fee}</span>
        <Divider />
        <div>
          <Text>
            open:{props.event.startTime} start:{props.event.openTime}
          </Text>
        </div>
        {props.event.homePage ? (
          <Link href={props.event.homePage} isExternal textAlign="end">
            HP
            <ExternalLinkIcon mx="2px" />
          </Link>
        ) : null}
      </Card>
    </>
  );
};

export default EventInfo;
