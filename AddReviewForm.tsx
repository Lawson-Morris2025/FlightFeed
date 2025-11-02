
import React, { useState } from 'react';
import { LocationReview } from './types';
import { StarIcon } from './Icons';

interface AddReviewFormProps {
    locationId: string;
    onAddReview: (review: Omit<LocationReview, 'review_id' | 'date'>) => void;
}

const AddReviewForm: React.FC<AddReviewFormProps> = ({ locationId, onAddReview }) => {
    const [username, setUsername] = useState('');
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [reviewText, setReviewText] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!username.trim() || rating === 0 || !reviewText.trim()) {
            alert('Please fill out all fields and provide a rating.');
            return;
        }
        setIsSubmitting(true);
        
        // Simulate network delay for better UX
        setTimeout(() => {
            onAddReview({
                location_id: locationId,
                username,
                rating,
                review_text: reviewText,
            });
            // Reset form
            setUsername('');
            setRating(0);
            setHoverRating(0);
            setReviewText('');
            setIsSubmitting(false);
        }, 300);
    };

    return (
        <div className="mt-4 pt-4 border-t border-gray-700">
            <h4 className="font-semibold text-cyan-400 mb-3 text-base">Leave a Review</h4>
            <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                        <label htmlFor={`username-${locationId}`} className="sr-only">Username</label>
                        <input 
                            type="text" 
                            id={`username-${locationId}`}
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Your pilot name"
                            className="block w-full bg-gray-900 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div>
                         <label className="sr-only">Rating</label>
                         <div className="flex items-center justify-center bg-gray-900 border border-gray-600 rounded-md h-full">
                            {[...Array(5)].map((_, i) => {
                                const ratingValue = i + 1;
                                return (
                                    <button
                                        type="button"
                                        key={ratingValue}
                                        className="p-1"
                                        onClick={() => setRating(ratingValue)}
                                        onMouseEnter={() => setHoverRating(ratingValue)}
                                        onMouseLeave={() => setHoverRating(0)}
                                        aria-label={`Rate ${ratingValue} out of 5 stars`}
                                    >
                                        <StarIcon className={`w-6 h-6 transition-colors duration-150 ${ratingValue <= (hoverRating || rating) ? 'text-yellow-400' : 'text-gray-500 hover:text-gray-400'}`} />
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div>
                    <label htmlFor={`review_text-${locationId}`} className="sr-only">Review</label>
                    <textarea 
                        id={`review_text-${locationId}`}
                        rows={3}
                        value={reviewText}
                        onChange={(e) => setReviewText(e.target.value)}
                        placeholder="Share your experience..."
                        className="block w-full bg-gray-900 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                        required
                    />
                </div>
                <div>
                    <button 
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex justify-center bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-md transition duration-200 disabled:bg-gray-600 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit Review'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddReviewForm;
