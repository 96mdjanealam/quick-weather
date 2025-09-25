import { useQuery } from "@tanstack/react-query";
import type { CurrentWeatherData } from "../types/types";


interface CurrentWeatherQueryProps {
  searchCity: string;
  selected: string;
}

export const useCurrentWeather = ({ searchCity, selected }: CurrentWeatherQueryProps) => {
  return useQuery<CurrentWeatherData, Error>({
    queryKey: ["currentWeather", searchCity, selected],
    queryFn: async () => {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/weather?q=${searchCity}&appid=${import.meta.env.VITE_WEATHER_KEY}&units=${selected}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch current weather data");
      }
      
      return response.json();
    },
    enabled: !!searchCity,
    staleTime: 5 * 60 * 1000,
  });
};