import {
  Spinner,
  Stat, StatHelpText, StatLabel, StatNumber,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import WeatherAPI, { WeatherAPIData } from './WeatherAPI';

function Weather(props: any) {
  const [state, setState] = useState<WeatherAPIData>();
  const api = new WeatherAPI('10456d4dfb4a90729790ada8bf436fd1', false);
  const weather = api
    .getWeatherAtGeocode('sundsvall')
    .then((data) => { setState(data); });
  if (state) {
    return (
      <div>
        <Stat>
          <StatLabel>{state.name}</StatLabel>
          <StatNumber>{`${state.main.temp} °C`}</StatNumber>
          <StatHelpText>{`${state.wind.speed} m/s (${state.wind.deg}°)`}</StatHelpText>
          <StatHelpText>{`Känns som: ${state.main.feels_like} °C`}</StatHelpText>
        </Stat>
      </div>
    );
  }
  return <Spinner />;
}

export default Weather;
