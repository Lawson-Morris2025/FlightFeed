
import React, { useState } from 'react';
import { EnvelopeIcon } from './Icons.tsx';

type SubmissionStatus = 'idle' | 'sending' | 'success' | 'error';

const FeedbackButton: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        subject: 'FlightFeed Feedback / Location Recommendation',
        message: '',
    });
    const [submissionStatus, setSubmissionStatus] = useState<SubmissionStatus>('idle');

    // IMPORTANT: Replace this with your actual Formspree endpoint.
    const formspreeEndpoint = 'https://formspree.io/f/mnnoworr';

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmissionStatus('sending');

        try {
            const response = await fetch(formspreeEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmissionStatus('success');
                setFormData({ email: '', subject: 'FlightFeed Feedback / Location Recommendation', message: '' });
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            console.error(error);
            setSubmissionStatus('error');
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        // Reset status after a short delay to allow fade-out animation
        setTimeout(() => setSubmissionStatus('idle'), 300);
    }

    return (
        <>
            <button
                onClick={() => setIsModalOpen(true)}
                className="fixed bottom-6 right-6 bg-cyan-600 hover:bg-cyan-700 text-white rounded-full p-4 shadow-lg transition-transform transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-cyan-500 z-20"
                aria-label="Provide feedback or recommend a place"
            >
                <EnvelopeIcon className="h-6 w-6" />
            </button>

            {isModalOpen && (
                <div 
                    className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-30"
                    aria-modal="true"
                    role="dialog"
                >
                    <div className="bg-gray-800 rounded-lg shadow-xl p-6 w-full max-w-md border border-gray-700 relative">
                        <button
                            onClick={closeModal}
                            className="absolute top-3 right-3 text-gray-400 hover:text-white"
                            aria-label="Close modal"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <div className="flex items-center space-x-3 mb-4">
                            <EnvelopeIcon className="h-8 w-8 text-cyan-400" />
                             <h2 className="text-xl font-bold text-white">Feedback & Recommendations</h2>
                        </div>
                       
                        {submissionStatus === 'success' ? (
                            <div className="text-center py-8">
                                <h3 className="text-lg font-semibold text-green-400 mb-2">Thank you!</h3>
                                <p className="text-gray-300">Your feedback has been sent successfully.</p>
                            </div>
                        ) : (
                             <form onSubmit={handleSubmit} className="space-y-4">
                                <p className="text-gray-300 text-sm">
                                    Have a suggestion, found a bug, or want to recommend a new flying spot? We'd love to hear from you!
                                </p>
                                <div>
                                    <label htmlFor="email" className="sr-only">Your Email (Optional)</label>
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Your Email (Optional)"
                                        className="block w-full bg-gray-900 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="sr-only">Subject</label>
                                    <input
                                        id="subject"
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        required
                                        className="block w-full bg-gray-900 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="sr-only">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        placeholder="Your message..."
                                        required
                                        className="block w-full bg-gray-900 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                                    />
                                </div>
                                
                                {submissionStatus === 'error' && (
                                    <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>
                                )}

                                <button
                                    type="submit"
                                    disabled={submissionStatus === 'sending'}
                                    className="w-full text-center bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2.5 px-4 rounded-md transition duration-200 disabled:bg-gray-600 disabled:cursor-not-allowed"
                                >
                                    {submissionStatus === 'sending' ? 'Sending...' : 'Send Feedback'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default FeedbackButton;