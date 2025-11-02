
import React from 'react';
import { DailyForecast, SafetyRating } from './types';
import { SunIcon, CloudIcon, RainIcon, CautionIcon } from './Icons';

interface ForecastCardProps {
  forecast: DailyForecast;
}

const getRatingClass = (rating: SafetyRating) => {
  switch (rating) {
    case SafetyRating.SAFE:
      return 'bg-green-500/20 text-green-400 border-green-500/30';
    case SafetyRating.CAUTION:
      return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
    case SafetyRating.UNSAFE:
      return 'bg-red-500/20 text-red-400 border-red-500/30';
  }
};

const getWeatherIcon = (conditions: string) => {
    const lowerConditions = conditions.toLowerCase();
    if (lowerConditions.includes('rain') || lowerConditions.includes('showers')) {
        return <RainIcon className="h-10 w-10 text-blue-400" />;
    }
    if (lowerConditions.includes('cloudy') || lowerConditions.includes('overcast')) {
        return <CloudIcon className="h-10 w-10 text-gray-400" />;
    }
    if (lowerConditions.includes('sunny') || lowerConditions.includes('clear')) {
        // FIX: Removed unsupported 'stroke' and 'fill' props. The component's styling is handled via className.
        return <SunIcon className="h-10 w-10 text-yellow-300" />;
    }
    return <CloudIcon className="h-10 w-10 text-gray-400" />;
};


const ForecastCard: React.FC<ForecastCardProps> = ({ forecast }) => {
  return (
    <div className="bg-gray-800/60 rounded-lg p-4 flex flex-col items-center text-center space-y-3 border border-gray-700 flex-shrink-0 w-40 shadow-sm">
      <h3 className="font-bold text-lg text-white">{forecast.day}</h3>
      {getWeatherIcon(forecast.conditions)}
      <p className="text-xs text-gray-400 h-10">{forecast.conditions}</p>
      <div className={`text-sm font-bold px-3 py-1 rounded-full border ${getRatingClass(forecast.safety_rating)}`}>
        {forecast.safety_rating}
      </div>
    </div>
  );
};

interface ForecastSectionProps {
  forecasts: DailyForecast[];
}

const ForecastSection: React.FC<ForecastSectionProps> = ({ forecasts }) => {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-4 text-cyan-400">7-Day UAV Forecast</h2>
      <div className="flex space-x-4 overflow-x-auto pb-4 -mx-4 px-4 scrolling-touch">
        {forecasts.map((forecast) => (
          <ForecastCard key={forecast.day} forecast={forecast} />
        ))}
      </div>
    </section>
  );
};

export default ForecastSection;