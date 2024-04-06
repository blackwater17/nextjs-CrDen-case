import { FixedStatsData } from "../../interfaces/FixedStatsData";

const TopStats = ({ fixedData }: { fixedData: FixedStatsData }) => {

    return (
        <div className="top-stats-container w-full flex justify-between text-2xl">
            <div className="top-stat-title bg-white p-3 rounded-r-2xl">
                REACH RATE
            </div>
            <div className="top-stat-value bg-white p-3 rounded-l-2xl flex flex-row justify-between">
                <div className="percentage text-2xl font-bold">
                    {fixedData.average2021_RR.toFixed(1) + "%"}
                </div>
                <div className="ml-[24px]"></div>
                <div className="year-with-percentage text-xs flex flex-col gap-0">
                    <div className="percentage-value font-bold leading-13 text-green-700 text-sm">
                        {fixedData.average2021_RR && fixedData.average2020_RR && (
                            fixedData.average2021_RR > fixedData.average2020_RR ?
                                `+${(fixedData.average2021_RR - fixedData.average2020_RR).toFixed(1)}%`
                                : null
                        )}
                    </div>
                    <div className="year font-bold leading-13 text-right text-xs text-gray-500">in 2021</div>
                </div>
            </div>
        </div>
    )
}

export default TopStats;