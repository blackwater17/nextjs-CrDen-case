import { HighlightedInfos } from "./HighlightedInfos"
import { Influencer } from "./Influencer"

export interface StatsItem {
    firstNum: number,
    didIncrease: boolean,
    firstPercentage: string,
    firstRR: number,
    secondNum: number,
    secondPercentage: string,
    secondRR: number
}

export interface FixedStatsData {
    story: StatsItem,
    static: StatsItem,
    reels: StatsItem,
    top3ReachRateInfluencers2020: Influencer[],
    top3ReachRateInfluencers2021: Influencer[],
    average2020_RR: number,
    average2021_RR: number,
    highlightedInfos: HighlightedInfos
}