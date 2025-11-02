
import React, { useState, useCallback } from 'react';
import { flightData } from './data';
import Header from './Header';
import ForecastSection from './ForecastSection';
import LocationsSection from './LocationsSection';
import FeedbackButton from './FeedbackButton';
import { LocationReview } from './types';

const App: React.FC = () => {
  const [reviews, setReviews] = useState<LocationReview[]>(flightData.location_reviews);

  const handleAddReview = (newReviewData: Omit<LocationReview, 'review_id' | 'date'>) => {
    const newReview: LocationReview = {
      ...newReviewData,
      review_id: `REV-${Date.now()}`,
      date: new Date().toISOString().split('T')[0],
    };
    setReviews(prevReviews => [newReview, ...prevReviews]);
  };

  return (
    <div className="min-h-screen font-sans">
      <Header />
      <main className="container mx-auto p-4 md:p-6">
        <ForecastSection forecasts={flightData.daily_forecast} />
        <LocationsSection 
          locations={flightData.map_locations} 
          reviews={reviews}
          onAddReview={handleAddReview} 
        />
      </main>
      <FeedbackButton />
    </div>
  );
};

export default App;
