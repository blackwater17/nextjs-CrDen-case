import { NextApiRequest, NextApiResponse } from 'next';
import { StatsData } from '../../interfaces/StatsData';

const mockStatsData: StatsData[] = [
    {
        "influencer": "AA",
        "year": 2020,
        "type": "story",
        "reach_rate": 32
    },
    {
        "influencer": "BB",
        "year": 2020,
        "type": "reels",
        "reach_rate": 33
    },
    {
        "influencer": "CC",
        "year": 2020,
        "type": "story",
        "reach_rate": 35
    },
    {
        "influencer": "BB",
        "year": 2020,
        "type": "reels",
        "reach_rate": 85
    },
    {
        "influencer": "CC",
        "year": 2020,
        "type": "static",
        "reach_rate": 45
    },
    {
        "influencer": "AA",
        "year": 2020,
        "type": "static",
        "reach_rate": 14
    },
    {
        "influencer": "DD",
        "year": 2020,
        "type": "story",
        "reach_rate": 55
    },
    {
        "influencer": "EE",
        "year": 2020,
        "type": "story",
        "reach_rate": 35
    },
    {
        "influencer": "FF",
        "year": 2020,
        "type": "reels",
        "reach_rate": 51
    },
    {
        "influencer": "EE",
        "year": 2020,
        "type": "static",
        "reach_rate": 23
    },
    {
        "influencer": "FF",
        "year": 2020,
        "type": "reels",
        "reach_rate": 135
    },
    {
        "influencer": "GG",
        "year": 2020,
        "type": "static",
        "reach_rate": 22
    },
    {
        "influencer": "FF",
        "year": 2020,
        "type": "story",
        "reach_rate": 28
    },
    {
        "influencer": "HH",
        "year": 2020,
        "type": "story",
        "reach_rate": 29
    },
    {
        "influencer": "AA",
        "year": 2020,
        "type": "story",
        "reach_rate": 10
    },
    {
        "influencer": "CC",
        "year": 2020,
        "type": "story",
        "reach_rate": 4
    },
    {
        "influencer": "BB",
        "year": 2020,
        "type": "static",
        "reach_rate": 23
    },
    {
        "influencer": "CC",
        "year": 2021,
        "type": "reels",
        "reach_rate": 53
    },
    {
        "influencer": "BB",
        "year": 2021,
        "type": "static",
        "reach_rate": 12
    },
    {
        "influencer": "CC",
        "year": 2021,
        "type": "static",
        "reach_rate": 34
    },
    {
        "influencer": "AA",
        "year": 2021,
        "type": "story",
        "reach_rate": 53
    },
    {
        "influencer": "DD",
        "year": 2021,
        "type": "story",
        "reach_rate": 52
    },
    {
        "influencer": "EE",
        "year": 2021,
        "type": "story",
        "reach_rate": 75
    },
    {
        "influencer": "FF",
        "year": 2021,
        "type": "story",
        "reach_rate": 45
    },
    {
        "influencer": "EE",
        "year": 2021,
        "type": "reels",
        "reach_rate": 88
    },
    {
        "influencer": "FF",
        "year": 2021,
        "type": "reels",
        "reach_rate": 98
    },
    {
        "influencer": "GG",
        "year": 2021,
        "type": "static",
        "reach_rate": 20
    },
    {
        "influencer": "FF",
        "year": 2021,
        "type": "story",
        "reach_rate": 60
    },
    {
        "influencer": "HH",
        "year": 2021,
        "type": "story",
        "reach_rate": 66
    },
    {
        "influencer": "AA",
        "year": 2021,
        "type": "reels",
        "reach_rate": 90
    },
    {
        "influencer": "GG",
        "year": 2021,
        "type": "reels",
        "reach_rate": 187
    },
    {
        "influencer": "FF",
        "year": 2021,
        "type": "story",
        "reach_rate": 73
    },
    {
        "influencer": "HH",
        "year": 2021,
        "type": "story",
        "reach_rate": 60
    },
    {
        "influencer": "AA",
        "year": 2021,
        "type": "story",
        "reach_rate": 42
    },
    {
        "influencer": "CC",
        "year": 2021,
        "type": "story",
        "reach_rate": 24
    }
]

export default async function handler(req: NextApiRequest, res: NextApiResponse<StatsData[]>) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    res.status(200).json(mockStatsData)
}