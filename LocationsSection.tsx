
import React, { useState } from 'react';
import { MapLocation, LocationReview } from './types.ts';
import { MapPinIcon, StarIcon } from './Icons.tsx';
import AddReviewForm from './AddReviewForm.tsx';

interface LocationCardProps {
  location: MapLocation;
  reviews: LocationReview[];
  isSelected: boolean;
  onToggle: () => void;
  onAddReview: (review: Omit<LocationReview, 'review_id' | 'date'>) => void;
}

const getNfzStatusColor = (status: string): string => {
    const lowerStatus = status.toLowerCase();
    const restrictionKeywords = ['permission', 'restrictions', 'advisory', 'avoid', 'strictly', 'helipad'];
    const warningKeywords = ['wind', 'windy'];

    if (restrictionKeywords.some(keyword => lowerStatus.includes(keyword))) {
        return 'text-red-400 font-semibold';
    }
    if (warningKeywords.some(keyword => lowerStatus.includes(keyword))) {
        return 'text-yellow-400 font-semibold';
    }
    return 'text-green-400';
};


const LocationCard: React.FC<LocationCardProps> = ({ location, reviews, isSelected, onToggle, onAddReview }) => {
  const averageRating = reviews.length > 0
    ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
    : 0;

  const getSafetyScoreClass = (score: number) => {
    if (score >= 4) return 'bg-green-500/20 text-green-400';
    if (score === 3) return 'bg-yellow-500/20 text-yellow-400';
    return 'bg-red-500/20 text-red-400';
  };

  return (
    <div className="bg-gray-800/60 rounded-lg border border-gray-700 shadow-sm overflow-hidden transition-all duration-300">
      <button 
        className="w-full text-left p-4 hover:bg-gray-700/50 focus:outline-none focus:bg-gray-700/50 transition-colors" 
        onClick={onToggle}
        aria-expanded={isSelected}
        aria-controls={`location-details-${location.location_id}`}
      >
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-bold text-lg text-white">{location.name}</h3>
            <p className="text-sm text-gray-400 flex items-center mt-1">
              <MapPinIcon className="w-4 h-4 mr-1.5 flex-shrink-0" />
              <span>{location.subArea ? `${location.subArea}, ` : ''}{location.area}</span>
            </p>
          </div>
          <div className="text-right flex-shrink-0 ml-4">
            <div className="flex items-center justify-end">
              <StarIcon className={`w-5 h-5 ${averageRating > 0 ? 'text-yellow-400' : 'text-gray-500'}`} />
              <span className="ml-1.5 font-bold text-white">{averageRating.toFixed(1)}</span>
              <span className="text-sm text-gray-400 ml-1">({reviews.length})</span>
            </div>
            <p className={`text-xs mt-1.5 px-2 py-0.5 rounded-full inline-block ${getSafetyScoreClass(location.safety_score)}`}>
              Safety Score: {location.safety_score}/5
            </p>
          </div>
        </div>
        <p className="text-xs text-gray-400 mt-2 truncate">
          <span className="text-gray-500">NFZ Status: </span>
          <span className={getNfzStatusColor(location.nfz_status)}>{location.nfz_status}</span>
        </p>
      </button>
      
      {isSelected && (
        <div id={`location-details-${location.location_id}`} className="p-4 bg-gray-900/50 border-t border-gray-700">
          <h4 className="font-semibold text-cyan-400 mb-3 text-base">Pilot Reviews</h4>
          {reviews.length > 0 ? (
            <div className="space-y-3 mb-4">
              {reviews.map(review => (
                <div key={review.review_id} className="bg-gray-800 p-3 rounded-md border border-gray-700">
                  <div className="flex justify-between items-center mb-1">
                    <p className="font-semibold text-sm text-white">{review.username}</p>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-600'}`} />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-300 italic">"{review.review_text}"</p>
                  <p className="text-xs text-gray-500 text-right mt-1">{new Date(review.date).toLocaleDateString()}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-400 italic mb-4">No reviews yet. Be the first to share your experience!</p>
          )}
          <AddReviewForm locationId={location.location_id} onAddReview={onAddReview} />
        </div>
      )}
    </div>
  );
};

interface LocationsSectionProps {
  locations: MapLocation[];
  reviews: LocationReview[];
  onAddReview: (review: Omit<LocationReview, 'review_id' | 'date'>) => void;
}

const LocationsSection: React.FC<LocationsSectionProps> = ({ locations, reviews, onAddReview }) => {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  const toggleLocation = (locationId: string) => {
    setSelectedLocation(prevId => (prevId === locationId ? null : locationId));
  };

  return (
    <section>
      <h2 className="text-xl font-semibold mb-4 text-cyan-400">Flight Locations</h2>
      <div className="space-y-4">
        {locations.map(location => {
          const locationReviews = reviews
            .filter(r => r.location_id === location.location_id)
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
          return (
            <LocationCard
              key={location.location_id}
              location={location}
              reviews={locationReviews}
              isSelected={selectedLocation === location.location_id}
              onToggle={() => toggleLocation(location.location_id)}
              onAddReview={onAddReview}
            />
          );
        })}
      </div>
    </section>
  );
};

export default LocationsSection;