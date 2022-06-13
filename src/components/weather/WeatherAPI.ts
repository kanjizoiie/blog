import axios, { Response } from 'redaxios';

export interface WeatherAPIData {
  coord: {
    lat: number,
    lng: number
  },
  weather: Array<{
    id: number,
    main: string,
    description: string,
    icon: string,
    icon_url: string,
  }>,
  base: string,
  main: {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    humidity: number
  },
  visibility: number,
  wind: {
    speed: number,
    deg: number
  },
  clouds: {
    all: number
  },
  dt: number,
  sys: {
    type: number,
    id: number,
    message: number,
    country: string,
    sunrise: number,
    sunset: number
  },
  timezone: number,
  id: number,
  name: string,
  cod: number
}

enum WEATHERAPI_UNITS {
  metric = 'metric',
  standard = 'standard',
  imperial = 'imperial',
}

export default class WeatherAPI {
  active: boolean;

  APIKey: string;

  units: WEATHERAPI_UNITS;

  baseURL = 'http://api.openweathermap.org/data/2.5';

  iconURL = 'http://openweathermap.org/img/wn/10d@2x.png';

  constructor(APIKey: string, active?: boolean) {
    this.active = active;
    this.APIKey = APIKey;
    this.units = WEATHERAPI_UNITS.metric;
  }

  private getApiRequest(api: string, searchParams: object): Promise<WeatherAPIData> {
    const sp = new URLSearchParams({
      units: this.units,
      appid: this.APIKey,
      ...searchParams,
    });
    if (this.active) {
      return axios
        .get(`${this.baseURL}/${api}?${sp}`)
        .then((response: Response<WeatherAPIData>) => response.data);
    }
    return new Promise((resolve) => { resolve(require('./sample.json')); });
  }

  /**
   * @deprecated This does not work anymore
   * @param {number} lat latitude
   * @param {number} lng longitude
   * @returns response.
   */
  getWeatherAtLocation(lat: number, lng: number) {
    return this.getApiRequest('weather', { lat, lng });
  }

  /**
   * Gets the weather at a location specified by geocode, can be city name or anything.
   * @param {string} q Geocode location to get the weather at.
   * @returns {object} weather
   */
  getWeatherAtGeocode(q: string) {
    return this.getApiRequest('weather', { q });
  }
}
