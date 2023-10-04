import {
  Button, ButtonGroup, Center, Heading, useToast, VStack, Text, Box,
} from '@chakra-ui/react';
import React from 'react';
import { Trans } from 'react-i18next';
import axios, { Response } from 'redaxios';

import Weather from './components/weather/Weather';
import { WeatherAPIData } from './components/weather/WeatherAPI';

function App() {
  const client = axios.create({ baseURL: 'http://localhost:8080' });
  const toast = useToast();

  const [status, setStatus] = React.useState<number>();
  const [weather, setWeather] = React.useState<WeatherAPIData>();
  const [position, setPosition] = React.useState<Array<number>>();

  const getStatus = () => {
    client.get('/api')
      .then((value: Response<any>) => {
        setStatus(value.data.status);
      });
  };

  const handleYesButton = () => {
    client.post('/api', {
      shorts_weather: true,
      weather,
      position,
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
    client.post('/api', {
      shorts_weather: false,
      weather,
      position,
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
    if (!navigator.geolocation) return;
    navigator
      .geolocation
      .watchPosition((geoPosition) => {
        setPosition([
          geoPosition.coords.latitude,
          geoPosition.coords.longitude,
        ]);
      });
  });

  React.useEffect(() => {
    getStatus();
  });

  return (
    <div className="app-container">
      <Center h="100%">
        <VStack>
          <Heading as="h1" size="4xl" noOfLines={1}>
            <Trans i18nKey="shortsWeatherTitleKey" />
          </Heading>
          <Text fontSize="2xl">
            <Trans i18nKey="shortsWeatherSubTitleKey" />
          </Text>
          <Text fontSize="6xl">
            {status >= 0 ? '👍' : '👎'}
          </Text>
          <Weather position={position} onWeatherChange={setWeather} />
          <Text>
            {`Din position är: ${position}`}
          </Text>
          <ButtonGroup>
            <Button onClick={handleYesButton} w={150} colorScheme="green">Ja! 👍</Button>
            <Button onClick={handleNoButton} w={150} colorScheme="cyan">Nej! 👎❄️</Button>
          </ButtonGroup>
        </VStack>
      </Center>
    </div>
  );
}

export default App;
