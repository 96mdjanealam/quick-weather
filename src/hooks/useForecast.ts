import { useQuery } from "@tanstack/react-query";
import type { ForecastData } from "../types/types";

interface ForecastQueryProps {
  searchCity: string;
  selected: string;
}

export const useForecast = ({ searchCity, selected }: ForecastQueryProps) => {
  return useQuery<ForecastData, Error>({
    queryKey: ["forecast", searchCity, selected],
    queryFn: async () => {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/forecast?q=${searchCity}&appid=${import.meta.env.VITE_WEATHER_KEY}&units=${selected}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch forecast data");
      }

      return response.json();
    },
    enabled: !!searchCity,
    staleTime: 10 * 60 * 1000,
  });
};