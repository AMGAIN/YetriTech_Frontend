import React, { useState } from 'react';

const TrafficMetrics = ({ title = "Traffic Flow Metrics", timeframe = "Last 15 hours" }) => {
    const [selectedTime, setSelectedTime] = useState('15h');
    
    const legendItems = [
        { label: 'Congestion', color: 'bg-yellow-500', text: 'text-yellow-500/80' },
        { label: 'Crash', color: 'bg-red-500', text: 'text-red-500/80' },
        { label: 'Theft', color: 'bg-purple-500', text: 'text-purple-500/80' },
    ];

    return (
        <div className="p-5 mt-2 w-150 max-w-2xl bg-[#1c1c1f] border border-zinc-800 rounded-2xl shadow-xl font-sans">
            {/* Header Section */}
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h3 className="text-zinc-100 font-bold text-sm tracking-tight">{title}</h3>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-widest mt-0.5">{timeframe}</p>
                </div>
                
                {/* Interactive Time Range Selector */}
                <div className="flex bg-zinc-900 rounded-lg p-1 border border-zinc-800">
                    {['1h', '15h', '24h'].map((t) => (
                        <button
                            key={t}
                            onClick={() => setSelectedTime(t)}
                            className={`px-3 py-1 text-[10px] font-bold rounded-md transition-all ${
                                selectedTime === t 
                                ? 'bg-zinc-700 text-white shadow-sm' 
                                : 'text-zinc-500 hover:text-zinc-300'
                            }`}
                        >
                            {t}
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex gap-6 items-center">
                {/* Simulated Graph Area */}
                <div className="relative flex-grow h-32 bg-zinc-900/50 rounded-xl border border-zinc-800/50 overflow-hidden group">
                    {/* Background Grid Lines */}
                    <div className="absolute inset-0 flex flex-col justify-between p-2 opacity-20">
                        <div className="border-t border-zinc-600 w-full"></div>
                        <div className="border-t border-zinc-600 w-full"></div>
                        <div className="border-t border-zinc-600 w-full"></div>
                    </div>
                    
                    {/* Simulated Wave/Data Point (Visual Placeholder) */}
                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blue-500/20 to-transparent border-t-2 border-blue-500/50"></div>
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-[10px] font-mono text-zinc-600 opacity-0 group-hover:opacity-100 transition-opacity">
                            DATA_VISUALIZATION_ACTIVE
                        </span>
                    </div>
                </div>

                {/* Legend Section */}
                <div className="flex flex-col gap-3 min-w-[100px]">
                    {legendItems.map((item) => (
                        <div key={item.label} className="flex items-center gap-2 group cursor-default">
                            <div className={`${item.color} w-2 h-2 rounded-full shadow-[0_0_8px_rgba(0,0,0,0.4)] group-hover:scale-125 transition-transform`}></div>
                            <p className={`${item.text} text-[11px] font-bold tracking-wide uppercase`}>
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Footer Metric Summary */}
            <div className="mt-4 pt-4 border-t border-zinc-800/50 flex gap-4">
                <div className="text-[10px] text-zinc-500">
                    Avg Flow: <span className="text-zinc-200 font-mono">42.5 veh/min</span>
                </div>
                <div className="text-[10px] text-zinc-500">
                    Peak: <span className="text-zinc-200 font-mono">12:40 PM</span>
                </div>
            </div>
        </div>
    );
};

export default TrafficMetrics;