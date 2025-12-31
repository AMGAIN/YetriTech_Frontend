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
        <div className="w-full max-w-lg bg-[#121214] border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden font-sans">
            
            {/* Header / Top Bar */}
            <div className="flex justify-between items-center px-5 py-4 border-b border-zinc-800/50 bg-zinc-900/20">
                <span className="text-xs font-mono font-bold text-zinc-500 tracking-widest">{id}</span>
                <button 
                    onClick={onClose}
                    className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-zinc-800 text-zinc-500 hover:text-white transition-all"
                >
                    ✕
                </button>
            </div>

            <div className="p-6">
                {/* Meta Info */}
                <div className="mb-6">
                    <p className="text-[11px] uppercase tracking-widest text-zinc-500 font-bold mb-1">
                        Detected At <span className="text-zinc-300 ml-1">{time}</span>
                    </p>
                    <p className="text-sm text-zinc-400 mb-2">{location}</p>
                    <h1 className="text-2xl font-bold text-zinc-100 tracking-tight">{title}</h1>
                </div>

                {/* Crash Intelligence Section */}
                <div className="mb-8">
                    <h2 className="text-[11px] uppercase tracking-[0.2em] text-zinc-500 font-black mb-4">
                        Crash Intelligence
                    </h2>
                    
                    <div className="grid grid-cols-2 gap-3">
                        {/* Intelligence Badges */}
                        <div className="bg-zinc-900 border border-zinc-800 p-3 rounded-xl">
                            <p className="text-[10px] text-zinc-500 uppercase font-bold mb-1">Est. Delay</p>
                            <p className="text-amber-400 font-bold">{estDelay}</p>
                        </div>
                        <div className="bg-amber-500/10 border border-amber-500/20 p-3 rounded-xl">
                            <p className="text-[10px] text-amber-500 uppercase font-bold mb-1">Sensors</p>
                            <p className="text-amber-200 font-bold text-xs">Smoke Detected</p>
                        </div>
                        <div className="bg-zinc-900 border border-zinc-800 p-3 rounded-xl">
                            <p className="text-[10px] text-zinc-600 uppercase font-bold mb-1">Last Speed</p>
                            <p className="text-emerald-400 font-bold">{lastSpeed}</p>
                        </div>
                        <div className="bg-red-500/10 border border-red-500/20 p-3 rounded-xl animate-pulse">
                            <p className="text-[10px] text-red-500 uppercase font-bold mb-1">Threat</p>
                            <p className="text-red-200 font-bold text-xs">Fire Detected</p>
                        </div>
                        
                        {/* Severity Banner */}
                        <div className="col-span-2 bg-red-600 p-3 rounded-xl flex justify-between items-center shadow-[0_0_20px_rgba(220,38,38,0.2)]">
                            <span className="text-[10px] text-white/80 font-black uppercase tracking-widest">Severity Level</span>
                            <span className="text-white font-black">{severity}</span>
                        </div>
                    </div>
                </div>

                {/* Live Feed Section */}
                <div>
                    <div className="flex items-center justify-between mb-3">
                        <p className="text-[11px] font-bold text-zinc-100 flex items-center gap-2">
                            <span className="h-2 w-2 bg-red-500 rounded-full animate-pulse"></span>
                            LiveFeed-CAM-023
                        </p>
                        <span className="text-[10px] text-zinc-600">60 FPS / 1080p</span>
                    </div>
                    {/* Placeholder for Video */}
                    <div className="w-full aspect-video rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center relative group overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="text-zinc-700 font-mono text-xs z-10">CONNECTING TO STREAM...</div>
                        {/* Play button overlay */}
                        <div className="absolute h-12 w-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailAlert;