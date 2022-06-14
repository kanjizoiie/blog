import {
  Button, ButtonGroup, Center, Heading, useToast, VStack, Text, Box,
} from '@chakra-ui/react';
import React from 'react';
import axios, { Response } from 'redaxios';
import Weather from './components/weather/Weather';

const serverURL = `${process.env.SERVER_HOST}/api`;

function App() {
  const toast = useToast();

  const [status, setStatus] = React.useState<number>();

  const getStatus = () => {
    axios.get(serverURL)
      .then((value: Response<any>) => {
        setStatus(value.data.status);
      });
  };
  const handleYesButton = () => {
    axios.post(serverURL, {
      shorts_weather: true,
    }).then(() => {
      getStatus();
      toast({
        title: 'Tack för infon!',
        description: 'Då är det ju bara att dra på dig shortsen då!',
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
    });
  };

  const handleNoButton = () => {
    axios.post(serverURL, {
      shorts_weather: false,
    }).then(() => {
      getStatus();
      toast({
        title: 'Tack för infon!',
        description: 'Vill du ha tips för långbyxor?',
        status: 'warning',
        duration: 9000,
        isClosable: true,
      });
    });
  };

  React.useEffect(() => {
    getStatus();
  });

  return (
    <div className="app-container">
      <Center h="100%">
        <VStack>
          <Heading as="h1" size="4xl" noOfLines={1}>
            Är det shortsväder? 🩳
          </Heading>
          <Text fontSize="2xl">
            De flesta säger:
          </Text>
          <Text fontSize="6xl">
            {status >= 0 ? '👍' : '👎'}
          </Text>
          <Weather />
          <ButtonGroup>
            <Button onClick={handleYesButton} w={150} colorScheme="green">Ja! ☀️</Button>
            <Button onClick={handleNoButton} w={150} colorScheme="cyan">Nej! ❄️</Button>
          </ButtonGroup>
        </VStack>
      </Center>
    </div>
  );
}

export default App;
