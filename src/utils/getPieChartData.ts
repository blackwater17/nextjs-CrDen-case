import { StatsData } from '../interfaces/StatsData';

// returns array of objects with type and percentage props
const getPieChartData = (stats: StatsData[]) => {
    const topics = stats.map((stat: StatsData) => stat.type);
    const topicsOccurrence = topics.reduce((acc: Record<string, number>, topic: string) => {
        acc[topic] = acc[topic] ? acc[topic] + 1 : 1;
        return acc;
    }, {});
    const totalTopics = topics.length;
    return Object.entries(topicsOccurrence).map(([topic, occurrence]) => ({
        name: topic,
        percentage: parseFloat(((occurrence / totalTopics) * 100).toFixed(2)),
    }));
}

export default getPieChartData;