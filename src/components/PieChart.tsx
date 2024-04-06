import React from 'react';
import { PieChart as RechartsPieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

interface DataItem {
    name: string;
    percentage: number;
}

interface PieChartProps {
    data: DataItem[];
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']; // colors for pie slices

const PieChart: React.FC<PieChartProps> = ({ data }) => {

    const [displayPieChart, setDisplayPieChart] = React.useState(false);

    return (
        <>
            <div className="flex justify-end mb-6">
                <button onClick={() => setDisplayPieChart(!displayPieChart)} className="bg-blue-500 hover:bg-blue-700 text-white text-xs font-bold py-1 px-2 rounded">
                    {displayPieChart ? "Hide" : "View"} Pie Chart
                </button>
            </div>
            {displayPieChart &&
                <div className="w-full max-w-md mx-auto mb-8">
                    <RechartsPieChart width={400} height={400} className="mx-auto">
                        <Pie
                            data={data}
                            dataKey="percentage"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={100}
                            fill="#8884d8"
                            label
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Legend
                            iconType="circle"
                            layout="horizontal"
                            verticalAlign="bottom"
                            align="center"
                            wrapperStyle={{ fontSize: "24px" }}
                        />
                        <Tooltip
                            contentStyle={{ fontSize: '14px', padding: '0 12px' }}
                            wrapperStyle={{ zIndex: 1000 }}
                        />
                    </RechartsPieChart>
                </div>
            }
        </>
    );
}

export default PieChart;

