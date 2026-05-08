import React, { useState } from 'react';
import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    Tooltip,
    CartesianGrid,
} from 'recharts';

const TrafficMetrics = ({
    title = "Traffic Flow Metrics",
    timeframe = "Last 15 hours",
}) => {
    const [selectedTime, setSelectedTime] = useState('15h');

    // Dummy Graph Data
    const data = [
        { time: '1AM', flow: 20 },
        { time: '3AM', flow: 35 },
        { time: '5AM', flow: 28 },
        { time: '7AM', flow: 48 },
        { time: '9AM', flow: 65 },
        { time: '11AM', flow: 52 },
        { time: '1PM', flow: 72 },
        { time: '3PM', flow: 58 },
        { time: '5PM', flow: 80 },
        { time: '7PM', flow: 60 },
    ];

    const legendItems = [
        {
            label: 'Congestion',
            color: 'bg-yellow-400',
            text: 'text-slate-700',
        },
        {
            label: 'Crash',
            color: 'bg-red-500',
            text: 'text-slate-700',
        },
        {
            label: 'Theft',
            color: 'bg-blue-500',
            text: 'text-slate-700',
        },
    ];

    return (
        <div className="w-full p-6 mt-2 bg-white border border-slate-200 rounded-3xl shadow-2xl font-sans">

            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="text-lg font-bold tracking-tight text-slate-800">
                        {title}
                    </h3>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-slate-400 font-semibold">
                        {timeframe}
                    </p>
                </div>

                {/* Time Selector */}
                <div className="flex p-1 border shadow-sm bg-slate-50 rounded-xl border-slate-200">
                    {['1h', '15h', '24h'].map((t) => (
                        <button
                            key={t}
                            onClick={() => setSelectedTime(t)}
                            className={`px-4 py-1.5 text-[11px] font-bold rounded-lg transition-all duration-300 ${selectedTime === t
                                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-200'
                                    : 'text-slate-500 hover:text-blue-500'
                                }`}
                        >
                            {t}
                        </button>
                    ))}
                </div>
            </div>

            {/* Graph + Legend */}
            <div className="flex flex-col gap-6 lg:flex-row">

                {/* Chart Area */}
                <div className="relative flex-1 p-4 overflow-hidden border shadow-inner bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl border-slate-100">

                    {/* Glow Effect */}
                    <div className="absolute w-40 h-40 bg-blue-400 rounded-full -top-10 -right-10 blur-3xl opacity-10"></div>

                    <div className="relative h-64">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={data}>
                                <CartesianGrid
                                    strokeDasharray="3 3"
                                    stroke="#e2e8f0"
                                />

                                <XAxis
                                    dataKey="time"
                                    tick={{
                                        fontSize: 11,
                                        fill: '#64748b',
                                        fontWeight: 600,
                                    }}
                                    axisLine={false}
                                    tickLine={false}
                                />

                                <Tooltip
                                    contentStyle={{
                                        borderRadius: '16px',
                                        border: 'none',
                                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                        background: 'white',
                                        fontSize: '12px',
                                    }}
                                />

                                <Line
                                    type="monotone"
                                    dataKey="flow"
                                    stroke="#3b82f6"
                                    strokeWidth={4}
                                    dot={{
                                        r: 5,
                                        fill: '#3b82f6',
                                        strokeWidth: 2,
                                        stroke: '#fff',
                                    }}
                                    activeDot={{
                                        r: 7,
                                    }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Legend */}
                <div className="flex flex-row justify-between gap-4 lg:flex-col lg:min-w-[130px]">

                    {legendItems.map((item) => (
                        <div
                            key={item.label}
                            className="flex items-center gap-3 px-3 py-2 transition-all duration-300 bg-white border shadow-sm cursor-default rounded-xl hover:shadow-md border-slate-100"
                        >
                            <div
                                className={`${item.color} w-3 h-3 rounded-full shadow-md`}
                            ></div>

                            <p
                                className={`${item.text} text-[11px] font-bold uppercase tracking-wider`}
                            >
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer Stats */}
            <div className="grid grid-cols-2 gap-4 pt-5 mt-6 border-t border-slate-100">

                <div className="p-4 border shadow-sm bg-slate-50 rounded-2xl border-slate-100">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                        Avg Flow
                    </p>

                    <h4 className="mt-1 text-lg font-black text-blue-500">
                        42.5 veh/min
                    </h4>
                </div>

                <div className="p-4 border shadow-sm bg-slate-50 rounded-2xl border-slate-100">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                        Peak Time
                    </p>

                    <h4 className="mt-1 text-lg font-black text-blue-500">
                        12:40 PM
                    </h4>
                </div>
            </div>
        </div>
    );
};

export default TrafficMetrics;