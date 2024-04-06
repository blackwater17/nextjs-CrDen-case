import React from 'react';
import { Influencer } from '../interfaces/Influencer';

interface PopoverProps {
  influencer: Influencer;
}

const Popover: React.FC<PopoverProps> = ({ influencer }) => {
  return (
    <div className="absolute bg-white shadow-lg p-4 rounded-md border border-gray-300 min-w-[250px] max-w-[320px]"
         style={{ left: '10px', top: '44px' }}>
      <ul className="list-disc pl-4">
        <li className="text-sm text-gray-700 text-left">Influencer: {influencer.name}</li>
        <li className="text-sm text-gray-700 text-left">Average Reach Rate: {influencer.averageRR}%</li>
        <li className="text-sm text-gray-700 text-left">Total count: {influencer.totalCount}</li>
      </ul>
    </div>
  );
}

export default Popover;