import {
  Button, ButtonGroup, Center, Heading, useToast, VStack, Text
} from '@chakra-ui/react';
import React from 'react';
import Weather from './components/weather/Weather';

function App() {
  const toast = useToast();

  const handleYesButton = () => {
    toast({
      title: 'Tack för infon!',
      description: 'Då är det ju bara att dra på dig shortsen då!',
      status: 'success',
      duration: 9000,
      isClosable: true,
    });
  };

  const handleNoButton = () => {
    toast({
      title: 'Tack för infon!',
      description: 'Vill du ha tips för långbyxor?',
      status: 'warning',
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <div className="app-container">
      <Center h="100%">
        <VStack>
          <Heading as="h1" size="4xl" noOfLines={1}>
            Är det shortsväder? 🩳
          </Heading>
          <Text fontSize="2xl">
            De flesta säger: ✅👍
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
