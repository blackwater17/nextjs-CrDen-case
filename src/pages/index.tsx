import React, { useState } from 'react';
import { FixedStatsData } from '../interfaces/FixedStatsData';
import TopStats from '../components/card/TopStats';
import HeaderStats from '../components/card/HeaderStats';
import TopInfluencers from '../components/card/TopInfluencers';
import HighlightedInfos from '../components/card/HighlightedInfos';
import Loading from '../components/Loading';
import getFixedData from '../utils/getFixedData';
import getPieChartData from '../utils/getPieChartData';
import PieChart from '../components/PieChart';

import {
    useQuery,
} from '@tanstack/react-query'

const Home = () => {

    const [fixedData, setFixedData] = useState<FixedStatsData>();

    function StatsComponent() {

        const { isLoading, error, data, refetch } = useQuery({
            queryKey: ['stats'],
            queryFn: () =>
                fetch('../api/stats').then((res) =>
                    res.json(),
                ),
            refetchOnWindowFocus: false,
            enabled: false,
        })

        React.useEffect(() => {
            if (data && !fixedData) {
                setFixedData(getFixedData(data));
            }
            if (!data && !fixedData) {
                refetch();
            }
        }, [data, fixedData, refetch]);

        if (error) return 'An error has occurred: ' + error.message
        if (isLoading || !fixedData) return (<Loading />);

        return (
            <>
                <PieChart data={getPieChartData(data)} />
                <div className="card-container mx-auto max-w-3xl rounded-3xl px-0 py-8 shadow-md relative">
                    <TopStats fixedData={fixedData} />
                    <HeaderStats fixedData={fixedData} />
                    <TopInfluencers fixedData={fixedData} />
                    <HighlightedInfos highlightedInfos={fixedData.highlightedInfos} />
                </div>
            </>
        )
    }

    return (
        <StatsComponent />
    );
}

export default Home;