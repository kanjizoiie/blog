interface WeatherAPIData {
  coord: {
    lat: number,
    lng: number
  }
}

enum UNITS {
  metric = 'metric',
  standard = 'standard',
  imperial = 'imperial',
}

export default class WeatherAPI {
  APIKey: string;

  units: UNITS;

  baseURL = 'http://api.openweathermap.org/data/2.5';

  constructor(APIKey: string) {
    this.APIKey = APIKey;
    this.units = UNITS.metric;
  }

  private getApiRequest(api: string, searchParams: object) {
    const sp = new URLSearchParams({
      units: this.units,
      appid: this.APIKey,
      ...searchParams,
    });
    return fetch(`${this.baseURL}/${api}?${sp}`)
      .then((result: Response) => result.json())
      .catch((reason) => console.error(reason));
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
