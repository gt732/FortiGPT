import React, { useContext } from 'react';
import { Flex, Heading, Text } from '@chakra-ui/react';
import { AppContext } from '../../AppContext';
import Vpn from '../vpn/Vpn';
import Highcpu from '../system/Highcpu';
import Highmemory from '../system/Highmemory';
import Bgp from '../routing/Bgp';
import Packetflow from '../connectivity/Packetflow';
import Interfaces from '../network/Interfaces';

export default function Main() {
  const { appData } = useContext(AppContext);
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justify="center"
      height="100vh"
    >
      <Heading as="h1" fontSize="3xl" fontWeight="bold" color="white">
        🤖 FortiGPT Troubleshooting Assistant 🤖
      </Heading>
      {(appData.problemCategory === 'problemcategory' ||
        appData.problemCategory === 'system' ||
        appData.problemCategory === 'connectivity' ||
        appData.problemCategory === 'vpn' ||
        appData.problemCategory === 'network' ||
        appData.problemCategory === 'routing') &&
        appData.problemType === 'problemtype' && (
          <>
            <Text as="h1" color="white">
              Welcome to the FortiGPT Troubleshooting Assistant!
            </Text>
            <Text as="h1" color="white">
              👈 Please fill in the following information and choose a
              category/problem type on the sidebar to get started 👈
            </Text>
            <br />
          </>
        )}
      {appData.problemCategory === 'network' &&
        appData.problemType === 'interfaces' && <Interfaces />}

      {appData.problemCategory === 'system' &&
        appData.problemType === 'highcpu' && <Highcpu />}

      {appData.problemCategory === 'system' &&
        appData.problemType === 'highmemory' && <Highmemory />}

      {appData.problemCategory === 'vpn' &&
        appData.problemType === 'vpndown' && <Vpn />}

      {appData.problemCategory === 'routing' &&
        appData.problemType === 'bgp' && <Bgp />}

      {appData.problemCategory === 'connectivity' &&
        appData.problemType === 'packetflow' && <Packetflow />}
    </Flex>
  );
}
