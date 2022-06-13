import { Card, Elevation } from '@blueprintjs/core';
import React, { useState } from 'react';
import WeatherAPI from './WeatherAPI';

function Weather(props: any) {
  const [state, setState] = useState<any>();
  const api = new WeatherAPI('5970b8356691feed630812f7a9272e1c');
  const weather = api
    .getWeatherAtGeocode('sundsvall')
    .then((data) => { setState(data); });

  return (
    <Card className="weather" interactive elevation={Elevation.TWO}>
      {state ? <h2>{state.name}</h2> : null}
      {state ? JSON.stringify(state.weather) : null}
    </Card>
  );
}

export default Weather;
