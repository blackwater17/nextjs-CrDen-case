import { FixedStatsData } from "../../interfaces/FixedStatsData";
import { useState } from 'react';
import Popover from '../Popover';
import { Influencer } from "../../interfaces/Influencer";

const TopInfluencers = ({ fixedData }: { fixedData: FixedStatsData }) => {

    const [hoveredInfluencer, setHoveredInfluencer] = useState<string | null>(null);
    const [hoveredYear, setHoveredYear] = useState<number | null>(null);

    const handleMouseOver = (name: string, year: number) => {
        setHoveredInfluencer(name);
        setHoveredYear(year);
    };

    const handleMouseOut = () => {
        setHoveredInfluencer(null);
    };

    return (
        <div className="top-influencers-container w-full flex justify-between items-center p-4 bg-white">
            <div className="influencer-group flex justify-center gap-5">
                {fixedData?.top3ReachRateInfluencers2020.map((influencer: Influencer, index: number) => (
                    <div className="relative" key={index}>
                        <div
                            onMouseOver={() => handleMouseOver(influencer.name, 2020)}
                            onMouseOut={handleMouseOut}
                            className="cursor-default z-10 influencer w-[30px] h-[30px] rounded-full flex items-center justify-center text-sm bg-gray-300 border border-black"
                        >
                            {influencer.name}
                        </div>
                        {hoveredInfluencer === influencer.name && hoveredYear === 2020 && (
                            <Popover influencer={influencer} />
                        )}
                    </div>
                ))}
            </div>
            <div className="top-influencers-title text-xs"> <strong>TOP 3 INFLUENCERS </strong>BY REACH RATE</div>
            <div className="influencer-group flex justify-center gap-5">
                {fixedData?.top3ReachRateInfluencers2021.map((influencer: Influencer, index: number) => (
                    <div className="relative" key={index}>
                        <div
                            onMouseOver={() => handleMouseOver(influencer.name, 2021)}
                            onMouseOut={handleMouseOut}
                            className="cursor-default z-10 influencer w-[30px] h-[30px] rounded-full flex items-center justify-center text-sm bg-gray-300 border border-black"
                        >
                            {influencer.name}
                        </div>
                        {hoveredInfluencer === influencer.name && hoveredYear === 2021 && (
                            <Popover influencer={influencer} />
                        )}
                    </div>
                ))}
            </div>

        </div>
    )
}

export default TopInfluencers;