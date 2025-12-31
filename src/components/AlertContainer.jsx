import React, { useState } from 'react';
import notificationIcon from '../assets/notification.png'; // Ensure path is correct
import AlertCard from './AlertCard';

const AlertContainer = () => {
    // State to handle button interaction
    const [activeFilter, setActiveFilter] = useState('All');
    const categories = ['All', 'Crash', 'Collision', 'Theft'];

    return (
        <div className="w-full max-w-md bg-[#18181b] border border-zinc-800 rounded-xl shadow-2xl overflow-hidden font-sans">
            
            {/* Header Area */}
            <div className="p-4 flex items-center justify-between border-b border-zinc-800/50 bg-zinc-900/30">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-zinc-800 rounded-lg">
                        <img className="h-4 w-4 brightness-110" src={notificationIcon} alt="notification" />
                    </div>
                    <h2 className="text-zinc-100 font-bold text-sm tracking-tight">Real-Time Alerts</h2>
                </div>
                <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                    </span>
                    <p className="text-[10px] font-black text-red-400 uppercase tracking-widest">1 New</p>
                </div>
            </div>

            {/* Interactive Filters */}
            <div className="px-4 py-3 flex gap-2 bg-[#18181b]">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveFilter(cat)}
                        className={`px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider rounded-md transition-all duration-300 border ${
                            activeFilter === cat
                                ? 'bg-zinc-100 text-zinc-900 border-zinc-100 shadow-[0_0_15px_rgba(255,255,255,0.1)]'
                                : 'bg-zinc-900 text-zinc-500 border-zinc-800 hover:border-zinc-600 hover:text-zinc-300'
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Scrollable Alert Feed */}
            <div className="p-2 space-y-1 max-h-[450px] overflow-y-auto  no-scrollbar">
                {/* We pass the type to the card so it can style itself */}
                <AlertCard type="Crash" time="2 mins ago" description="Major impact detected at Sector 7" />
                <AlertCard type="Theft" time="15 mins ago" description="Unauthorized door access - Vehicle 402" />
                <AlertCard type="Collision" time="1 hour ago" description="Minor bumper contact in Parking Lot B" />
            </div>

            {/* Footer Action */}
            <button className="w-full py-3 text-[10px] text-zinc-600 hover:text-zinc-400 font-bold uppercase tracking-[0.2em] transition-colors border-t border-zinc-800/50">
                Mark All as Read
            </button>
        </div>
    );
};

export default AlertContainer;