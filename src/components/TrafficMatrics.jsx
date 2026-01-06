import React, { useState } from 'react';

const TrafficMetrics = ({ title = "Traffic Flow Metrics", timeframe = "Last 15 hours" }) => {
    const [selectedTime, setSelectedTime] = useState('15h');
    
    const legendItems = [
        { label: 'Congestion', color: 'bg-yellow-500', text: 'text-slate-600' },
        { label: 'Crash', color: 'bg-red-500', text: 'text-slate-600' },
        { label: 'Theft', color: 'bg-blue-600', text: 'text-slate-600' }, // Changed to Blue for theme
    ];

    return (
        <div className="p-5 mt-2 w-full bg-white rounded-2xl shadow-xl font-sans">
            {/* Header Section */}
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h3 className="text-slate-900 font-bold text-sm tracking-tight">{title}</h3>
                    <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-0.5 font-semibold">{timeframe}</p>
                </div>
                
                {/* Interactive Time Range Selector - Replaced dark zinc with light slate/blue */}
                <div className="flex bg-slate-50 rounded-lg p-1 border border-slate-200">
                    {['1h', '15h', '24h'].map((t) => (
                        <button
                            key={t}
                            onClick={() => setSelectedTime(t)}
                            className={`px-3 py-1 text-[10px] font-bold rounded-md transition-all ${
                                selectedTime === t 
                                ? 'bg-blue-600 text-white shadow-md shadow-blue-200' 
                                : 'text-slate-400 hover:text-blue-600'
                            }`}
                        >
                            {t}
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex gap-6 items-center">
                {/* Simulated Graph Area - Changed to light slate with blue gradient */}
                <div className="relative flex-grow h-32 bg-slate-50 rounded-xl border border-slate-100 overflow-hidden group">
                    {/* Background Grid Lines */}
                    <div className="absolute inset-0 flex flex-col justify-between p-2 opacity-50">
                        <div className="border-t border-slate-200 w-full"></div>
                        <div className="border-t border-slate-200 w-full"></div>
                        <div className="border-t border-slate-200 w-full"></div>
                    </div>
                    
                    {/* Simulated Wave/Data Point - Vibrant Blue theme */}
                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blue-500/10 to-transparent border-t-2 border-blue-500/40"></div>
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-[10px] font-mono text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity font-bold">
                            DATA_VISUALIZATION_ACTIVE
                        </span>
                    </div>
                </div>

                {/* Legend Section */}
                <div className="flex flex-col gap-3 min-w-[100px]">
                    {legendItems.map((item) => (
                        <div key={item.label} className="flex items-center gap-2 group cursor-default">
                            <div className={`${item.color} w-2 h-2 rounded-full shadow-sm group-hover:scale-125 transition-transform`}></div>
                            <p className={`${item.text} text-[11px] font-bold tracking-wide uppercase`}>
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Footer Metric Summary */}
            <div className="mt-4 pt-4 border-t border-slate-100 flex gap-4">
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">
                    Avg Flow: <span className="text-blue-600 font-mono font-black">42.5 veh/min</span>
                </div>
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">
                    Peak: <span className="text-blue-600 font-mono font-black">12:40 PM</span>
                </div>
            </div>
        </div>
    );
};

export default TrafficMetrics;