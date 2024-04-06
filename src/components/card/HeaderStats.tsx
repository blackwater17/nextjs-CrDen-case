import { useEffect, useRef } from 'react';
import { FixedStatsData } from '../../interfaces/FixedStatsData';

const HeaderStats = ({ fixedData }: { fixedData: FixedStatsData }) => {

    const headerStatsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setTimeout(() => {

            let elements = headerStatsRef.current?.querySelectorAll<HTMLElement>(".stat-filler");
            elements?.forEach(element => {
                let width = element.getAttribute("data-width");
                if (width) {
                    element.style.width = width;
                }
            });

            let differenceSpans = headerStatsRef.current?.querySelectorAll<HTMLElement>(".stat-filler-difference");
            differenceSpans?.forEach(span => {
                span.classList.add("opacity-100");
            });

        }, 200);
    }, []);

    return (
        <div className="header-stats-container mt-5 text-2xl" ref={headerStatsRef}>

            <div className="header-stat header-stat--top-row w-full mx-auto flex flex-row justify-between text-sm px-2 mb-0">
                <div className="prev-year-stat year-stat w-40 relative py-3 px-2 text-lg text-left">2020</div>
                <div className="stat-values flex flex-row gap-1 items-center justify-center w-[280px] text-xs">
                    <div className="first-year-percentage year-percentage w-[50px] text-gray-600">%</div>
                    <div className="first-year-number year-number w-[50px]">#</div>
                    <div className="stat-type w-[100px]">TYPE</div>
                    <div className="second-year-number year-number w-[50px]">#</div>
                    <div className="second-year-percentage year-percentage w-[50px] text-gray-600">%</div>
                </div>
                <div className="next-year-stat year-stat w-40 relative py-3 px-2 text-lg text-right">2021</div>
            </div>

            <div className={`header-stat header-stat--stories w-full mx-auto mb-2 flex flex-row justify-between text-sm`}>
                <div className={`prev-year-stat w-40 relative py-3 px-2 text-lg year-stat text-white text-left ${!fixedData?.story.didIncrease ? 'bigger-stat' : 'smaller-stat'}`} >
                    <div className="stat-filler absolute top-0 h-full left-0 rounded-tr-lg rounded-br-lg w-0" data-width={fixedData?.story?.firstRR + "%"}></div>
                    {fixedData?.story?.firstRR + "%"}
                </div>
                <div className="stat-values flex flex-row gap-1 items-center justify-center w-[280px] text-xs">
                    <div className="first-year-percentage year-percentage w-[50px] text-gray-600">
                        {fixedData?.story?.firstPercentage}
                    </div>
                    <div className="first-year-number year-number w-[50px]">
                        {fixedData?.story?.firstNum}
                    </div>
                    <div className="stat-type w-[100px]">STORIES</div>
                    <div className="second-year-number year-number w-[50px]">
                        {fixedData?.story?.secondNum}
                    </div>
                    <div className="second-year-percentage year-percentage w-[50px] text-gray-600">
                        {fixedData?.story?.secondPercentage}
                    </div>
                </div>
                <div className={`next-year-stat flex flex-row justify-end gap-x-[8px] items-center w-40 relative text-lg year-stat text-white text-right ${fixedData?.story.didIncrease ? 'bigger-stat' : 'smaller-stat'}`}>

                    <span className="stat-filler-text absolute right-0 py-0 px-2 top-1/2 transform -translate-y-1/2">
                        {fixedData?.story?.secondRR + "%"}
                    </span>

                    <div className="stat-filler h-full rounded-l-lg relative w-0" data-width={fixedData?.story?.secondRR + "%"}>
                        <span className={`stat-filler-difference text-green text-sm font-bold opacity-0 absolute -left-14 top-1/2 transform -translate-y-1/2 ${fixedData.story.secondRR > fixedData.story.firstRR ? 'text-green-600' : 'text-red-600'}`}>
                            {`${fixedData.story.secondRR > fixedData.story.firstRR ? '+' : ''}${(fixedData.story.secondRR - fixedData.story.firstRR).toFixed(1)}%`}
                        </span>
                    </div>

                </div>
            </div>

            <div className={`header-stat header-stat--static-posts w-full mx-auto mb-2 flex flex-row justify-between text-sm`}>
                <div className={`prev-year-stat w-40 relative py-3 px-2 text-lg year-stat text-white text-left ${!fixedData?.static.didIncrease ? 'bigger-stat' : 'smaller-stat'}`}>
                    <div className="stat-filler absolute top-0 h-full left-0 rounded-tr-lg rounded-br-lg w-0" data-width={fixedData?.static?.firstRR + "%"}></div>
                    {fixedData?.static?.firstRR + "%"}
                </div>
                <div className="stat-values flex flex-row gap-1 items-center justify-center w-[280px] text-xs">
                    <div className="first-year-percentage year-percentage w-[50px] text-gray-600">
                        {fixedData?.static?.firstPercentage}
                    </div>
                    <div className="first-year-number year-number w-[50px]">
                        {fixedData?.static?.firstNum}
                    </div>
                    <div className="stat-type w-[100px]">STATIC POSTS</div>
                    <div className="second-year-number year-number w-[50px]">
                        {fixedData?.static?.secondNum}
                    </div>
                    <div className="second-year-percentage year-percentage w-[50px] text-gray-600">
                        {fixedData?.static?.secondPercentage}
                    </div>
                </div>
                <div className={`next-year-stat flex flex-row justify-end gap-x-[8px] items-center w-40 relative text-lg year-stat text-white text-right ${fixedData?.static.didIncrease ? 'bigger-stat' : 'smaller-stat'}`}>

                    <span className="stat-filler-text absolute right-0 py-0 px-2 top-1/2 transform -translate-y-1/2">
                        {fixedData?.static?.secondRR + "%"}
                    </span>

                    <div className="stat-filler h-full rounded-l-lg relative w-0" data-width={fixedData?.static?.secondRR + "%"}>
                        <span className={`stat-filler-difference text-green text-sm font-bold opacity-0 absolute -left-14 top-1/2 transform -translate-y-1/2 ${fixedData.static.secondRR > fixedData.static.firstRR ? 'text-green-600' : 'text-red-600'}`}>
                            {`${fixedData.static.secondRR > fixedData.static.firstRR ? '+' : ''}${(fixedData.static.secondRR - fixedData.static.firstRR).toFixed(1)}%`}
                        </span>
                    </div>

                </div>
            </div>

            <div className={`header-stat header-stat--reels w-full mx-auto mb-2 flex flex-row justify-between text-sm`}>
                <div className={`prev-year-stat w-40 relative py-3 px-2 text-lg year-stat text-white text-left ${!fixedData?.reels.didIncrease ? 'bigger-stat' : 'smaller-stat'}`}>
                    <div className="stat-filler absolute top-0 h-full left-0 rounded-tr-lg rounded-br-lg w-0" data-width={fixedData?.reels?.firstRR + "%"}></div>
                    {fixedData?.reels?.firstRR + "%"}
                </div>
                <div className="stat-values flex flex-row gap-1 items-center justify-center w-[280px] text-xs">
                    <div className="first-year-percentage year-percentage w-[50px] text-gray-600">
                        {fixedData?.reels?.firstPercentage}
                    </div>
                    <div className="first-year-number year-number w-[50px]">
                        {fixedData?.reels?.firstNum}
                    </div>
                    <div className="stat-type w-[100px]">REELS</div>
                    <div className="second-year-number year-number w-[50px]">
                        {fixedData?.reels?.secondNum}
                    </div>
                    <div className="second-year-percentage year-percentage w-[50px] text-gray-600">
                        {fixedData?.reels?.secondPercentage}
                    </div>
                </div>
                <div className={`next-year-stat flex flex-row justify-end gap-x-[8px] items-center w-40 relative text-lg year-stat text-white text-right ${fixedData?.reels.didIncrease ? 'bigger-stat' : 'smaller-stat'}`}>

                    <span className="stat-filler-text absolute right-0 py-0 px-2 top-1/2 transform -translate-y-1/2">
                        {fixedData?.reels?.secondRR + "%"}
                    </span>

                    <div className="stat-filler h-full rounded-l-lg relative w-0" data-width={fixedData?.reels?.secondRR + "%"}>
                        <span className={`stat-filler-difference text-green text-sm font-bold opacity-0 absolute -left-14 top-1/2 transform -translate-y-1/2 ${fixedData.reels.secondRR > fixedData.reels.firstRR ? 'text-green-600' : 'text-red-600'}`}>
                            {`${fixedData.reels.secondRR > fixedData.reels.firstRR ? '+' : ''}${(fixedData.reels.secondRR - fixedData.reels.firstRR).toFixed(1)}%`}
                        </span>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default HeaderStats;