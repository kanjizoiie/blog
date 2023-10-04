import {
  Spinner,
  Stat, StatHelpText, StatLabel, StatNumber,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import axios, { Response } from 'redaxios';
import { WeatherAPIData } from './WeatherAPI';

export interface WeatherProps {
  geocode?: string;
  position?: Array<number>;
  onWeatherChange?: (data: WeatherAPIData) => void;
}

function Weather({ geocode, position, onWeatherChange }: WeatherProps) {
  const [state, setState] = useState<WeatherAPIData>();
  const client = axios.create({ baseURL: 'http://localhost:8080' });

  React.useEffect(() => {
    client.get('/weather')
      .then((response) => {
        console.log(response);
        return response.data;
      })
      .then((data) => { setState(data); });
  }, []);

  React.useEffect(() => {
    if (!position) return;
  }, [position]);

  React.useEffect(() => {
    if (onWeatherChange) onWeatherChange(state);
  }, [state]);

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
