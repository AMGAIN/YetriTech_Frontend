import React, { useState } from 'react';
import notificationIcon from '../assets/notification.png'; 
import AlertCard from './AlertCard';

const AlertContainer = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const categories = ['All', 'Crash', 'Collision', 'Theft'];

    return (
        <div className="w-full max-w-md bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden font-sans">
            
            {/* Header Area - Light slate background with blue-accented icon */}
            <div className="p-4 flex items-center justify-between border-b border-slate-100 bg-slate-50/50">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-50 rounded-lg">
                        <img className="h-4 w-4 opacity-80" src={notificationIcon} alt="notification" />
                    </div>
                    <h2 className="text-slate-900 font-bold text-sm tracking-tight">Real-Time Alerts</h2>
                </div>
                <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                    </span>
                    <p className="text-[10px] font-black text-red-600 uppercase tracking-widest">1 New</p>
                </div>
            </div>

            {/* Interactive Filters - White background with Blue primary states */}
            <div className="px-4 py-3 flex gap-2 bg-white">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveFilter(cat)}
                        className={`px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider rounded-md transition-all duration-300 border ${
                            activeFilter === cat
                                ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-100'
                                : 'bg-white text-slate-500 border-slate-200 hover:border-blue-300 hover:text-blue-600'
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Scrollable Alert Feed */}
            <div className="p-2 space-y-1 max-h-[450px] overflow-y-auto no-scrollbar bg-white">
                {/* Note: Ensure AlertCard is also updated to use bg-white/slate text */}
                <AlertCard type="Crash" time="2 mins ago" description="Major impact detected at Sector 7" />
                <AlertCard type="Theft" time="15 mins ago" description="Unauthorized door access - Vehicle 402" />
                <AlertCard type="Collision" time="1 hour ago" description="Minor bumper contact in Parking Lot B" />
            </div>

            {/* Footer Action - Soft slate text with blue hover */}
            <button className="w-full py-3 text-[10px] text-slate-400 hover:text-blue-600 hover:bg-slate-50 font-bold uppercase tracking-[0.2em] transition-all border-t border-slate-100">
                Mark All as Read
            </button>
        </div>
    );
};

export default AlertContainer;