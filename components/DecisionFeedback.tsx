
import React from 'react';

interface DecisionFeedbackProps {
  message: string | null;
}

const DecisionFeedback: React.FC<DecisionFeedbackProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div 
      className="my-4 p-4 bg-sky-700/80 text-sky-100 rounded-lg shadow-md transition-opacity duration-500 ease-in-out"
      // Basic key change can help trigger CSS transitions if needed, but here simple conditional rendering is enough.
    >
      <p className="text-center italic">{message}</p>
    </div>
  );
};

export default DecisionFeedback;
