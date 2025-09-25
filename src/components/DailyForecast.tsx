import React from "react";
import type { DailyForecastProps, ForecastItem } from "../types/types";
import { icons } from "../assets/icons";


const DailyForecast: React.FC<DailyForecastProps> = ({ forecastQuery }) => {
  // Group forecast data by day
  const groupForecastByDay = (list: ForecastItem[]) => {
    const grouped: { [key: string]: ForecastItem[] } = {};
    
    list.forEach(item => {
      const date = new Date(item.dt * 1000).toDateString();
      if (!grouped[date]) {
        grouped[date] = [];
      }
      grouped[date].push(item);
    });
    
    return Object.entries(grouped);
  };

  const forecastByDay = forecastQuery.data ? groupForecastByDay(forecastQuery.data.list) : [];

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
         return <img src={`${icons.snow}`} className="w-10 h-10"/>;
       case '50d':
       case '50n':
         return <img src={`${icons.mist}`}className="w-10 h-10" />;
       default:
         return <img src={`${icons.clear_sky}`} className="w-10 h-10" />;
     }
   };

  return (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4">Daily forecast</h3>
      {forecastQuery.data && !forecastQuery.isLoading && !forecastQuery.error && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {forecastByDay.map(([date, dayData], index) => {
            const firstForecast = dayData[0];
            const dateObj = new Date(date);
            const dayName = dateObj.toLocaleDateString('en-US', { weekday: 'short' });
            
            return (
              <div key={index} className="bg-white/10 rounded-lg p-3 text-center flex flex-col items-center">                
                <div className="text-sm font-medium mb-1">{dayName}</div>
                <div className="py-2">
                  {getWeatherIcon(firstForecast.weather[0].icon)}
                </div>
                <div className="text-lg font-bold">
                  {Math.round(firstForecast.main.temp_max)}°
                </div>
                <div className="text-xs text-white/80">
                  {Math.round(firstForecast.main.temp_min)}°
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DailyForecast;