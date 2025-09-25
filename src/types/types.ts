// Weather data interfaces
export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

export interface Wind {
  speed: number;
  deg: number;
  gust?: number;
}

export interface Sys {
  type?: number;
  id?: number;
  country: string;
  sunrise?: number;
  sunset?: number;
  pod?: string;
}

export interface CurrentWeatherData {
  name: string;
  main: Main;
  weather: Weather[];
  wind: Wind;
  sys: Sys;
}

export interface CurrentWeatherProps {
  currentQuery: {
    data?: CurrentWeatherData;
    isLoading: boolean;
    error?: Error | null;
    refetch: () => void;
  };
  selected: string;
}

export interface ForecastItem {
  dt: number;
  main: Main;
  weather: Weather[];
  clouds: {
    all: number;
  };
  wind: Wind;
  visibility: number;
  pop: number;
  sys: Sys;
  dt_txt: string;
  rain?: {
    "3h": number;
  };
}

export interface City {
  id: number;
  name: string;
  coord: {
    lat: number;
    lon: number;
  };
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}

export interface ForecastData {
  cod: string;
  message: number;
  cnt: number;
  list: ForecastItem[];
  city: City;
}

export interface HourlyForecastProps {
  forecastQuery: {
    data?: ForecastData;
    isLoading: boolean;
    error?: Error | null;
    refetch: () => void;
  };
  selected: string;
}

export interface DailyForecastProps {
  forecastQuery: {
    data?: ForecastData;
    isLoading: boolean;
    error?: Error | null;
    refetch: () => void;
  };
  selected: string;
}