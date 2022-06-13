import {
  Button, ButtonGroup, Center, Heading, VStack, WrapItem,
} from '@chakra-ui/react';
import React from 'react';
import Weather from './components/weather/Weather';

function App() {
  return (
    <div className="app-container">
      <Center h="100%">
        <VStack>
          <Heading pb={10} as="h1" size="4xl" noOfLines={1}>Är det shortsväder? 🩳</Heading>
          <Weather />
          <ButtonGroup>
            <Button w={150} colorScheme="green">Ja! ☀️</Button>
            <Button w={150} colorScheme="cyan">Nej! ❄️</Button>
          </ButtonGroup>
        </VStack>
      </Center>
    </div>
  );
}

export default App;
