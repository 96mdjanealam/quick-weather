import React from "react";
import type { HourlyForecastProps } from "../types/types";
import { icons } from "../assets/icons";

const HourlyForecast: React.FC<HourlyForecastProps> = ({ forecastQuery }) => {
  
 const getWeatherIcon = (iconCode: string) => {
     switch(iconCode) {
       case '01d':
       case '01n':
         return <img src={`${icons.clear_sky}`} className="w-10 h-10" />;
       case '02d':
       case '02n':
         return <img src={`${icons.few_clouds}`} className="w-10 h-10" />;
       case '03d':
       case '03n':
         return <img src={`${icons.scattered_clouds}`} className="w-10 h-10" />;
       case '04d':
       case '04n':
         return <img src={`${icons.scattered_clouds}`} className="w-10 h-10" />;
       case '09d':
       case '09n':
       case '10d':
       case '10n':
         return <img src={`${icons.rain}`} className="w-10 h-10" />;
       case '11d':
       case '11n':
         return <img src={`${icons.thunder_storm}`} className="w-10 h-10" />;
       case '13d':
       case '13n':
         return <img src={`${icons.snow}`}  className="w-10 h-10" />;
       case '50d':
       case '50n':
         return <img src={`${icons.mist}`} className="w-10 h-10" />;
       default:
         return <img src={`${icons.clear_sky}`} className="w-10 h-10" />;
     }
   };

  // Format time from dt_txt
  const formatTime = (dtTxt: string) => {
    const date = new Date(dtTxt);
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      hour12: true 
    });
  };

  // Get today's forecast (first 8 items)
  const todayForecast = forecastQuery.data ? forecastQuery.data.list.slice(0, 8) : [];

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Hourly forecast</h3>
        <div className="bg-white/20 rounded-md px-3 py-1 text-sm">
          {forecastQuery.data ? 
            new Date(forecastQuery.data.list[0].dt_txt).toLocaleDateString('en-US', { 
              weekday: 'long' 
            }) : 'Today'
          }
        </div>
      </div>
      {forecastQuery.data && !forecastQuery.isLoading && !forecastQuery.error && (
        <div className="space-y-3">
          {todayForecast.map((hour, index) => (
            <div key={index} className="flex justify-between items-center py-2 border-b border-white/10 last:border-b-0">
              <div className="flex items-center gap-3">
                {getWeatherIcon(hour.weather[0].icon)}
                <span>{formatTime(hour.dt_txt)}</span>
              </div>
              <span className="font-semibold">
                {Math.round(hour.main.temp)}°
              </span>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default HourlyForecast;