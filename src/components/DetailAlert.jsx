import React from 'react';

const DetailAlert = ({
    id = "INC-001",
    time = "05:46:11 PM",
    location = "15th Sanepa Road, Lalitpur",
    title = "Crash of Vehicle BA 2341",
    estDelay = "24min",
    lastSpeed = "30km/hr",
    severity = "HIGH",
    onClose = () => {}
}) => {
    return (
        <div className="w-full max-w-lg bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden font-sans">
            
            {/* Header / Top Bar */}
            <div className="flex justify-between items-center px-5 py-4 border-b border-slate-100 bg-slate-50/50">
                <span className="text-xs font-mono font-bold text-slate-400 tracking-widest">{id}</span>
                <button 
                    onClick={onClose}
                    className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-slate-200 text-slate-400 hover:text-slate-900 transition-all"
                >
                    ✕
                </button>
            </div>

            <div className="p-6">
                {/* Meta Info */}
                <div className="mb-6">
                    <p className="text-[11px] uppercase tracking-widest text-blue-600 font-bold mb-1">
                        Detected At <span className="text-slate-500 ml-1 font-medium">{time}</span>
                    </p>
                    <p className="text-sm text-slate-500 mb-2 font-medium">{location}</p>
                    <h1 className="text-2xl font-bold text-slate-900 tracking-tight">{title}</h1>
                </div>

                {/* Crash Intelligence Section */}
                <div className="mb-8">
                    <h2 className="text-[11px] uppercase tracking-[0.2em] text-slate-400 font-black mb-4">
                        Crash Intelligence
                    </h2>
                    
                    <div className="grid grid-cols-2 gap-3">
                        {/* Intelligence Badges */}
                        <div className="bg-white border border-slate-200 p-3 rounded-xl shadow-sm">
                            <p className="text-[10px] text-slate-400 uppercase font-bold mb-1">Est. Delay</p>
                            <p className="text-amber-600 font-bold">{estDelay}</p>
                        </div>
                        <div className="bg-amber-50 border border-amber-100 p-3 rounded-xl">
                            <p className="text-[10px] text-amber-600 uppercase font-bold mb-1">Sensors</p>
                            <p className="text-amber-700 font-bold text-xs">Smoke Detected</p>
                        </div>
                        <div className="bg-white border border-slate-200 p-3 rounded-xl shadow-sm">
                            <p className="text-[10px] text-slate-400 uppercase font-bold mb-1">Last Speed</p>
                            <p className="text-blue-600 font-bold">{lastSpeed}</p>
                        </div>
                        <div className="bg-red-50 border border-red-100 p-3 rounded-xl animate-pulse">
                            <p className="text-[10px] text-red-600 uppercase font-bold mb-1">Threat</p>
                            <p className="text-red-700 font-bold text-xs">Fire Detected</p>
                        </div>
                        
                        {/* Severity Banner - Deep Blue for professional look, or Red for urgency */}
                        <div className="col-span-2 bg-blue-700 p-3 rounded-xl flex justify-between items-center shadow-lg shadow-blue-200">
                            <span className="text-[10px] text-blue-100 font-black uppercase tracking-widest">Severity Level</span>
                            <span className="text-white font-black">{severity}</span>
                        </div>
                    </div>
                </div>

                {/* Live Feed Section */}
                <div>
                    <div className="flex items-center justify-between mb-3">
                        <p className="text-[11px] font-bold text-slate-800 flex items-center gap-2">
                            <span className="h-2 w-2 bg-blue-600 rounded-full animate-pulse shadow-[0_0_5px_rgba(37,99,235,0.5)]"></span>
                            LiveFeed-CAM-023
                        </p>
                        <span className="text-[10px] text-slate-400 font-medium">60 FPS / 1080p</span>
                    </div>
                    {/* Placeholder for Video */}
                    <div className="w-full aspect-video rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center relative group overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
                        <div className="text-slate-400 font-mono text-xs z-10 font-bold tracking-tight">CONNECTING TO STREAM...</div>
                        
                        {/* Play button overlay - Blue theme */}
                        <div className="absolute h-12 w-12 rounded-full bg-blue-600/90 backdrop-blur-sm flex items-center justify-center border border-blue-400 opacity-0 group-hover:opacity-100 transition-opacity shadow-xl">
                            <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailAlert;