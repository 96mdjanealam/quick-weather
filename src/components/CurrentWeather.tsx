import React from "react";
import type { CurrentWeatherProps } from "../types/types";
import { icons } from "../assets/icons";
import { Pin } from "lucide-react";

const CurrentWeather: React.FC<CurrentWeatherProps> = ({
  currentQuery,
  selected,
}) => {
  console.log(currentQuery);

  const getWeatherIcon = (iconCode: string) => {
    switch (iconCode) {
      case "01d":
      case "01n":
        return <img src={`${icons.clear_sky}`} className="w-14 h-14" />;
      case "02d":
      case "02n":
        return <img src={`${icons.few_clouds}`} className="w-14 h-14" />;
      case "03d":
      case "03n":
        return <img src={`${icons.scattered_clouds}`} className="w-14 h-14" />;
      case "04d":
      case "04n":
        return <img src={`${icons.scattered_clouds}`} className="w-14 h-14" />;
      case "09d":
      case "09n":
      case "10d":
      case "10n":
        return <img src={`${icons.rain}`} className="w-14 h-14" />;
      case "11d":
      case "11n":
        return <img src={`${icons.thunder_storm}`} className="w-14 h-14" />;
      case "13d":
      case "13n":
        return <img src={`${icons.snow}`} className="w-14 h-14" />;
      case "50d":
      case "50n":
        return <img src={`${icons.mist}`} className="w-14 h-14" />;
      default:
        return <img src={`${icons.clear_sky}`} className="w-14 h-14" />;
    }
  };

  return (
    <>
      {currentQuery.data && !currentQuery.isLoading && !currentQuery.error && (
        <div>
          <div className="bg-[linear-gradient(-45deg,#9333EA,#3B82F6)] rounded-lg p-6">
            <div>
              <div className="flex items-center w-full justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold">
                    {currentQuery.data.name}, {currentQuery.data.sys.country}
                  </h3>
                  <p className="text-sm text-white/80 mt-1">
                    {new Date().toLocaleDateString("en-US", {
                      weekday: "long",
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
                </div>

                <Pin />
              </div>

              <div className="flex justify-between items-end w-full mt-2">
                <div className="">
                  {getWeatherIcon(currentQuery.data.weather[0].icon)}
                </div>
                <div className="text-5xl">
                  {Math.round(currentQuery.data.main.temp)}°
                  {selected === "metric"
                    ? "C"
                    : selected === "imperial"
                    ? "F"
                    : "K"}
                </div>
              </div>
            </div>

            {/* Weather details */}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="bg-white/10 rounded-lg p-3">
              <div className="text-sm text-white/80">Feels Like</div>
              <div className="text-xl">
                {Math.round(currentQuery.data.main.feels_like)}°
              </div>
            </div>
            <div className="bg-white/10 rounded-lg p-3">
              <div className="text-sm text-white/80">Humidity</div>
              <div className="text-xl">{currentQuery.data.main.humidity}%</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3">
              <div className="text-sm text-white/80">Wind</div>
              <div className="text-xl">
                {currentQuery.data.wind.speed}{" "}
                {selected === "metric" ? "m/s" : "mph"}
              </div>
            </div>
            <div className="bg-white/10 rounded-lg p-3">
              <div className="text-sm text-white/80">Max temperature</div>
              <div className="text-xl">
                {Math.round(currentQuery.data.main.temp_max)}°
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CurrentWeather;
