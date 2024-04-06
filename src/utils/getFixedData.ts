import { StatsData } from '../interfaces/StatsData';

const getHighlightedInfos = (stats: StatsData[]) => {

    let allInfos = []

    // calculating story rr2021 - story rr2020
    const storyFirstRR = (stats.filter(item => item.type === 'story' && item.year === 2020).reduce((sum, item) => sum + item.reach_rate, 0)) / (stats.filter(item => item.type === 'story' && item.year === 2020).length)
    const storySecondRR = (stats.filter(item => item.type === 'story' && item.year === 2021).reduce((sum, item) => sum + item.reach_rate, 0)) / (stats.filter(item => item.type === 'story' && item.year === 2021).length)
    const storyRR_difference = {
        type: "stories",
        percentageDifference: storySecondRR - storyFirstRR,
        isIncreased: storySecondRR > storyFirstRR,
        text: "Stories Reach Rate"
    }

    allInfos.push(storyRR_difference)

    // calculating static rr2021 - static rr2020
    const staticFirstRR = (stats.filter(item => item.type === 'static' && item.year === 2020).reduce((sum, item) => sum + item.reach_rate, 0)) / (stats.filter(item => item.type === 'static' && item.year === 2020).length)
    const staticSecondRR = (stats.filter(item => item.type === 'static' && item.year === 2021).reduce((sum, item) => sum + item.reach_rate, 0)) / (stats.filter(item => item.type === 'static' && item.year === 2021).length)
    const staticRR_difference = {
        type: "static",
        percentageDifference: staticSecondRR - staticFirstRR,
        isIncreased: staticSecondRR > staticFirstRR,
        text: "Static Posts Reach Rate"
    }

    allInfos.push(staticRR_difference)

    // calculating reels rr2021 - reels rr2020
    const reelsFirstRR = (stats.filter(item => item.type === 'reels' && item.year === 2020).reduce((sum, item) => sum + item.reach_rate, 0)) / (stats.filter(item => item.type === 'reels' && item.year === 2020).length)
    const reelsSecondRR = (stats.filter(item => item.type === 'reels' && item.year === 2021).reduce((sum, item) => sum + item.reach_rate, 0)) / (stats.filter(item => item.type === 'reels' && item.year === 2021).length)
    const reelsRR_difference = {
        type: "video",
        percentageDifference: reelsSecondRR - reelsFirstRR,
        isIncreased: reelsSecondRR > reelsFirstRR,
        text: "Reels Reach Rate"
    }

    allInfos.push(reelsRR_difference)

    // calculating average RR2021 - average RR2020
    const data2020 = stats.filter(item => item.year === 2020);
    const averages2020 = Object.entries(
        data2020.reduce<{ [key: string]: number[] }>((acc, cur) => ({
            ...acc,
            [cur.influencer]: (acc[cur.influencer] || []).concat(cur.reach_rate),
        }), {})
    ).map(([influencer, reachRates]) => ({
        influencer,
        average: reachRates.reduce((sum, rate) => sum + rate, 0) / reachRates.length,
    }));

    const data2021 = stats.filter(item => item.year === 2021);
    const averages2021 = Object.entries(
        data2021.reduce<{ [key: string]: number[] }>((acc, cur) => ({
            ...acc,
            [cur.influencer]: (acc[cur.influencer] || []).concat(cur.reach_rate),
        }), {})
    ).map(([influencer, reachRates]) => ({
        influencer,
        average: reachRates.reduce((sum, rate) => sum + rate, 0) / reachRates.length,
    }));

    const averageRR2020 = averages2020.reduce((sum, item) => sum + item.average, 0) / averages2020.length;
    const averageRR2021 = averages2021.reduce((sum, item) => sum + item.average, 0) / averages2021.length;

    const averageRR_difference = {
        type: "all",
        percentageDifference: averageRR2021 - averageRR2020,
        isIncreased: averageRR2021 > averageRR2020,
        text: "Reach Rate in total"
    }

    allInfos.push(averageRR_difference)

    // calculating total content count difference in percentage
    const totalContentCount2020 = stats.filter(item => item.year === 2020).length;
    const totalContentCount2021 = stats.filter(item => item.year === 2021).length;
    const totalContentCount_difference = {
        type: "all",
        percentageDifference: ((totalContentCount2021 - totalContentCount2020) / totalContentCount2020) * 100,
        isIncreased: totalContentCount2021 > totalContentCount2020,
        text: "Total number of content"
    }

    allInfos.push(totalContentCount_difference)

    // calculating total story count difference in percentage
    const totalStoryCount2020 = stats.filter(item => item.year === 2020 && item.type === 'story').length;
    const totalStoryCount2021 = stats.filter(item => item.year === 2021 && item.type === 'story').length;
    const totalStoryCount_difference = {
        type: "stories",
        percentageDifference: ((totalStoryCount2021 - totalStoryCount2020) / totalStoryCount2020) * 100,
        isIncreased: totalStoryCount2021 > totalStoryCount2020,
        text: "Count of stories"
    }

    allInfos.push(totalStoryCount_difference)

    // calculating total static count difference in percentage
    const totalStaticCount2020 = stats.filter(item => item.year === 2020 && item.type === 'static').length;
    const totalStaticCount2021 = stats.filter(item => item.year === 2021 && item.type === 'static').length;
    const totalStaticCount_difference = {
        type: "static",
        percentageDifference: ((totalStaticCount2021 - totalStaticCount2020) / totalStaticCount2020) * 100,
        isIncreased: totalStaticCount2021 > totalStaticCount2020,
        text: "Count of static posts"
    }

    allInfos.push(totalStaticCount_difference)

    // calculating total reels count difference in percentage
    const totalReelsCount2020 = stats.filter(item => item.year === 2020 && item.type === 'reels').length;
    const totalReelsCount2021 = stats.filter(item => item.year === 2021 && item.type === 'reels').length;
    const totalReelsCount_difference = {
        type: "video",
        percentageDifference: ((totalReelsCount2021 - totalReelsCount2020) / totalReelsCount2020) * 100,
        isIncreased: totalReelsCount2021 > totalReelsCount2020,
        text: "Count of reels"
    }

    allInfos.push(totalReelsCount_difference)

    const sortedInfos = allInfos.sort((a, b) => a.percentageDifference - b.percentageDifference)
    return { positive: sortedInfos.slice(-2), negative: sortedInfos.slice(0, 2) }

}

const getFixedData = (stats: StatsData[]) => {

    const storyFirstRR = (stats.filter(item => item.type === 'story' && item.year === 2020).reduce((sum, item) => sum + item.reach_rate, 0)) / (stats.filter(item => item.type === 'story' && item.year === 2020).length)
    const storySecondRR = (stats.filter(item => item.type === 'story' && item.year === 2021).reduce((sum, item) => sum + item.reach_rate, 0)) / (stats.filter(item => item.type === 'story' && item.year === 2021).length)
    const staticFirstRR = (stats.filter(item => item.type === 'static' && item.year === 2020).reduce((sum, item) => sum + item.reach_rate, 0)) / (stats.filter(item => item.type === 'static' && item.year === 2020).length)
    const staticSecondRR = (stats.filter(item => item.type === 'static' && item.year === 2021).reduce((sum, item) => sum + item.reach_rate, 0)) / (stats.filter(item => item.type === 'static' && item.year === 2021).length)
    const reelsFirstRR = (stats.filter(item => item.type === 'reels' && item.year === 2020).reduce((sum, item) => sum + item.reach_rate, 0)) / (stats.filter(item => item.type === 'reels' && item.year === 2020).length)
    const reelsSecondRR = (stats.filter(item => item.type === 'reels' && item.year === 2021).reduce((sum, item) => sum + item.reach_rate, 0)) / (stats.filter(item => item.type === 'reels' && item.year === 2021).length)

    const data2020 = stats.filter(item => item.year === 2020);
    const averages2020 = Object.entries(
        data2020.reduce<{ [key: string]: number[] }>((acc, cur) => ({
            ...acc,
            [cur.influencer]: (acc[cur.influencer] || []).concat(cur.reach_rate),
        }), {})
    ).map(([influencer, reachRates]) => ({
        influencer,
        average: reachRates.reduce((sum, rate) => sum + rate, 0) / reachRates.length,
    }));
    averages2020.sort((a, b) => b.average - a.average);

    let top3ReachRateInfluencers2020: { name: string, averageRR: number, totalCount: number }[] = [];
    averages2020.slice(0, 3).forEach(item => {
        top3ReachRateInfluencers2020.push({ name: item.influencer, averageRR: parseFloat(item.average.toFixed(2)), totalCount: data2020.filter(e => e.influencer === item.influencer).length })
    })

    const data2021 = stats.filter(item => item.year === 2021);
    const averages2021 = Object.entries(
        data2021.reduce<{ [key: string]: number[] }>((acc, cur) => ({
            ...acc,
            [cur.influencer]: (acc[cur.influencer] || []).concat(cur.reach_rate),
        }), {})
    ).map(([influencer, reachRates]) => ({
        influencer,
        average: reachRates.reduce((sum, rate) => sum + rate, 0) / reachRates.length,
    }));
    averages2021.sort((a, b) => b.average - a.average);

    let top3ReachRateInfluencers2021: { name: string, averageRR: number, totalCount: number }[] = [];
    averages2021.slice(0, 3).forEach(item => {
        top3ReachRateInfluencers2021.push({ name: item.influencer, averageRR: parseFloat(item.average.toFixed(2)), totalCount: data2021.filter(e => e.influencer === item.influencer).length })
    })

    const average2020_RR = averages2020.reduce((sum, item) => sum + item.average, 0) / averages2020.length;
    const average2021_RR = averages2021.reduce((sum, item) => sum + item.average, 0) / averages2021.length;

    /****** ***/

    let fixedData = {
        story: {
            firstRR: storyFirstRR,
            firstPercentage: ((stats.filter(e => e.year === 2020 && e.type === 'story').length / stats.filter(e => e.year === 2020).length) * 100).toFixed(1),
            firstNum: stats.filter(e => e.year === 2020 && e.type === 'story').length,
            secondRR: storySecondRR,
            secondPercentage: ((stats.filter(e => e.year === 2021 && e.type === 'story').length / stats.filter(e => e.year === 2021).length) * 100).toFixed(1),
            secondNum: stats.filter(e => e.year === 2021 && e.type === 'story').length,
            didIncrease: storySecondRR > storyFirstRR
        },
        static: {
            firstRR: staticFirstRR,
            firstPercentage: ((stats.filter(e => e.year === 2020 && e.type === 'static').length / stats.filter(e => e.year === 2020).length) * 100).toFixed(1),
            firstNum: stats.filter(e => e.year === 2020 && e.type === 'static').length,
            secondRR: staticSecondRR,
            secondPercentage: ((stats.filter(e => e.year === 2021 && e.type === 'static').length / stats.filter(e => e.year === 2021).length) * 100).toFixed(1),
            secondNum: stats.filter(e => e.year === 2021 && e.type === 'static').length,
            didIncrease: staticSecondRR > staticFirstRR
        },
        reels: {
            firstRR: reelsFirstRR,
            firstPercentage: ((stats.filter(e => e.year === 2020 && e.type === 'reels').length / stats.filter(e => e.year === 2020).length) * 100).toFixed(1),
            firstNum: stats.filter(e => e.year === 2020 && e.type === 'reels').length,
            secondRR: reelsSecondRR,
            secondPercentage: ((stats.filter(e => e.year === 2021 && e.type === 'reels').length / stats.filter(e => e.year === 2021).length) * 100).toFixed(1),
            secondNum: stats.filter(e => e.year === 2021 && e.type === 'reels').length,
            didIncrease: reelsSecondRR > reelsFirstRR
        },
        top3ReachRateInfluencers2020,
        top3ReachRateInfluencers2021,
        average2020_RR,
        average2021_RR,
        highlightedInfos: getHighlightedInfos(stats)
    }

    return fixedData;
}

export default getFixedData;