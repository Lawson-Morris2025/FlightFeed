
import React from 'react';
import { DroneIcon } from './Icons';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800/50 backdrop-blur-sm sticky top-0 z-10 border-b border-gray-700/50">
      <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <DroneIcon className="h-8 w-8 text-cyan-400" />
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
            FlightFeed
          </h1>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <p className="text-sm text-gray-400">Location</p>
            <p className="font-semibold text-gray-200">Cardiff, UK</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
