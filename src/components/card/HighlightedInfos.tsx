import { HighlightedInfos, HighlightedInfo } from '../../interfaces/HighlightedInfos';

const HighlightedInfos = ({ highlightedInfos }: { highlightedInfos: HighlightedInfos }) => {

    return (
        <div className="highlighted-infos-container w-full px-3 mt-3">
            {highlightedInfos.negative.map((info: HighlightedInfo, index: number) => (
                <div key={index} className={"highlighted-info w-full mb-2 border border-black rounded-lg flex justify-between items-center gap-x-5 p-2 highlighted-info--" + info.type}>
                    <div className="highlighted-text flex flex-row items-center">
                        <div className="highlighted-info-type font-bold text-sm w-20 text-left">{info.type.toUpperCase()}</div>
                        <div className="highlighted-info-message font-bold text-sm">
                            {info.text} is decreased by
                            {" " + Math.abs(info.percentageDifference).toFixed(1)}%
                        </div>
                    </div>
                    <div className="success-info success-info--improve w-24 rounded-lg py-1 font-bold flex justify-center items-center text-sm bg-orange-200">IMPROVE</div>
                </div>
            ))}
            {highlightedInfos.positive.map((info: HighlightedInfo, index: number) => (
                <div key={index} className={"highlighted-info w-full mb-2 border border-black rounded-lg flex justify-between items-center gap-x-5 p-2 highlighted-info--" + info.type}>
                    <div className="highlighted-text flex flex-row items-center">
                        <div className="highlighted-info-type font-bold text-sm w-20 text-left">{info.type.toUpperCase()}</div>
                        <div className="highlighted-info-message font-bold text-sm">
                            {info.text} is increased by
                            {" " + Math.abs(info.percentageDifference).toFixed(1)}%
                        </div>
                    </div>
                    <div className="success-info success-info--great w-24 rounded-lg py-1 font-bold flex justify-center items-center text-sm bg-green-200">GREAT</div>
                </div>
            ))}
        </div>
    )
}

export default HighlightedInfos;