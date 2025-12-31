import React from 'react';
import notification from '../assets/notification.png';
import Time from './Time.jsx';

const Navbar = () => {
    return (
        <nav className='mb-2 bg-[#121214] border-b border-zinc-800 px-6 py-3 flex justify-between items-center sticky top-0 z-50'>
            
            {/* Branding Section */}
            <div className='flex flex-col'>
                <h1 className='text-zinc-100 font-black text-lg tracking-tighter leading-tight'>
                    TRAFFIC <span className='text-blue-500'>COMMAND</span> CENTER
                </h1>
                <p className='text-[10px] text-zinc-500 font-bold tracking-[0.3em] uppercase'>
                    Central Precinct • Sector-07
                </p>
            </div>

            {/* Live System Stats */}
            <div className="flex gap-3 items-center">
                {/* Active Units - Pulse effect */}
                <div className="px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-lg flex items-center text-emerald-400 text-[11px] font-bold tracking-wide">
                    <span className='w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse  shadow-[0_0_8px_rgba(16,185,129,0.6)]'></span>
                    5 ACTIVE UNITS
                </div>

                {/* Status Badges */}
                <button className="px-3 py-1.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-zinc-100 rounded-lg text-[11px] font-bold transition-all duration-200 uppercase tracking-tight">
                    Units Ready
                </button>
                
                <button className="px-3 py-1.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-zinc-100 rounded-lg text-[11px] font-bold transition-all duration-200 uppercase tracking-tight">
                    Cameras: <span className='text-zinc-100 ml-1'>87/100</span>
                </button>
            </div>

            {/* Utility Section */}
            <div className='flex items-center gap-6'>
                {/* Notification Icon */}
                <div className='relative rounded-lg cursor-pointer group'>
                    <img className='h-8 w-8 opacity-60 group-hover:opacity-100 transition-opacity' src={notification} alt="notification" />
                    <span className='absolute top-1 right-1 w-2 h-2  bg-red-500 rounded-full border-2 border-[#121214]'></span>
                </div>

                {/* Time Component Container */}
                <div className='pl-6 border-l border-zinc-800 py-1'>
                    <Time />
                </div>
            </div>

        </nav>
    );
};

export default Navbar;