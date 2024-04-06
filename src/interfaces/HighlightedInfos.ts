export interface HighlightedInfo {
    type: string,
    text: string,
    percentageDifference: number
    isIncreased: boolean,
}

export interface HighlightedInfos {
    positive: HighlightedInfo[];
    negative: HighlightedInfo[];
}
