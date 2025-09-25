import React, { useEffect, useState } from "react";
import { ChevronRight, Search, Sun } from "lucide-react";
import CurrentWeather from "./components/CurrentWeather";
import HourlyForecast from "./components/HourlyForecast";
import DailyForecast from "./components/DailyForecast";
import { useCurrentWeather } from "./hooks/useCurrentWeather";
import { useForecast } from "./hooks/useForecast";
import LoadingSpinner from "./components/LoadingSpinner";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("metric");
  const [searchCity, setSearchCity] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");

  const units = ["metric", "imperial", "standard"];

  const handleSelect = (unit: string) => {
    setSelected(unit);
    setIsOpen(false);
  };

  const currentQuery = useCurrentWeather({ searchCity, selected });

  const forecastQuery = useForecast({ searchCity, selected });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setSearchCity(inputValue.trim());
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    if (searchCity && currentQuery.isSuccess && forecastQuery.isSuccess) {
      setInputValue("");
    }
  }, [currentQuery.isSuccess, forecastQuery.isSuccess, searchCity]);


  return (
    <div className="mx-auto min-h-dvh bg-[linear-gradient(-45deg,#1E1B4B,#581C87,#1E1B4B)] text-white py-8">
      <div className="container mx-auto p-4 lg:w-[70%]">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <Sun className="text-yellow-400" size={24} />
            <h1 className="text-2xl font-semibold">Quick Weather</h1>
          </div>

          {/* Units dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="px-3 py-1 bg-white/10 rounded-md text-sm flex items-center gap-1"
            >
              <span>Units</span>
              <ChevronRight
                className={`w-4 h-4 transition-transform duration-200 ${
                  isOpen ? "rotate-90" : ""
                }`}
              />
            </button>

            {isOpen && (
              <ul className="absolute right-0 mt-1 bg-white/10 border border-white/20 rounded-md shadow-lg w-full">
                {units.map((unit) => (
                  <li
                    key={unit}
                    className={`px-3 cursor-pointer hover:bg-white/20 text-center ${
                      selected === unit ? "bg-white/20" : ""
                    }`}
                    onClick={() => handleSelect(unit)}
                  >
                    {unit === "metric"
                      ? "°C"
                      : unit === "imperial"
                      ? "°F"
                      : "K"}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Main content */}
        <div className="py-6">
          <h2 className="text-center text-3xl mb-10">
            How's the sky looking today?
          </h2>

          {/* Search bar */}
          <form
            onSubmit={handleSearch}
            className="flex items-center gap-2 mb-10 md:w-[70%] mx-auto"
          >
            <div className="flex items-center w-full bg-white/10 rounded-md px-3 py-2">
              <Search className="text-gray-300 mr-2" size={20} />
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Search for a place..."
                className="w-full bg-transparent outline-none text-white placeholder-gray-300"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 px-4 py-2 rounded-md text-sm font-medium"
            >
              Search
            </button>
          </form>

          {/* Weather display */}
          {searchCity ? (
            currentQuery.isLoading || forecastQuery.isLoading ? (
              <LoadingSpinner />
            ) : currentQuery.isSuccess && forecastQuery.isSuccess ? (
              <div className=" flex flex-col sm:flex-row w-full  justify-between gap-4">
                {/* Current weather card */}
                <div className="flex flex-col sm:w-2/3 lg:w-3/4  gap-4">
                  <CurrentWeather
                    currentQuery={currentQuery}
                    selected={selected}
                  />
                  {/* Daily forecast */}
                  <DailyForecast
                    forecastQuery={forecastQuery}
                    selected={selected}
                  />
                </div>

                {/* Hourly forecast */}
                <div className="bg-white/10 sm:w-1/3 lg:w-1/4 rounded-lg p-6">
                  <HourlyForecast
                    forecastQuery={forecastQuery}
                    selected={selected}
                  />
                </div>
              </div>
            ) : currentQuery.isError || forecastQuery.isError ? (
              <div className="mt-10 text-center">
                <p>Data not found! Try with a valid city/place name.</p>
              </div>
            ) : (
              <div className="mt-10 text-center">
                <LoadingSpinner />
              </div>
            )
          ) : (
            <div className="flex flex-col gap-4 items-center mt-10">
              <img
                className="h-20 w-20"
                src="https://img.icons8.com/?size=100&id=ObuWtTlsoTj6&format=png&color=000000"
                alt=""
              />
              <p>Search for a city to see weather information!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
