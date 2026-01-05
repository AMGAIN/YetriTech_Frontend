import React from 'react';
import notification from '../assets/notification.png';
import Time from './Time.jsx';

const Navbar = () => {
    return (
        // Changed to bg-white with a subtle slate border and shadow
        <nav className='mb-2 bg-white border-b border-slate-200 px-6 py-3 flex justify-between items-center sticky top-0 z-50 shadow-sm'>
            
            {/* Branding Section */}
            <div className='flex flex-col'>
                {/* Text changed to slate-900 (deep blue-gray) for better readability */}
                <h1 className='text-slate-900 font-black text-lg tracking-tighter leading-tight'>
                    TRAFFIC <span className='text-blue-600'>COMMAND</span> CENTER
                </h1>
                <p className='text-[10px] text-slate-500 font-bold tracking-[0.3em] uppercase'>
                    Central Precinct • Sector-07
                </p>
            </div>

            {/* Live System Stats */}
            <div className="flex gap-3 items-center">
                {/* Active Units - Background changed to a soft blue tint */}
                {/* <div className="px-3 py-1.5 bg-blue-50 border border-blue-100 rounded-lg flex items-center text-blue-700 text-[11px] font-bold tracking-wide">
                    <span className='w-2 h-2 rounded-full bg-blue-500 mr-2 animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.6)]'></span>
                    5 ACTIVE UNITS
                </div> */}

                {/* Status Badges - Replaced dark zinc with light slate and blue-themed hover effects */}
                <button className="px-3 py-1.5 bg-blue-200 hover:bg-blue-50 border border-blue-500 text-slate-600 hover:text-blue-700 rounded-lg text-[11px] font-bold transition-all duration-200 uppercase tracking-tight">
                    Units Ready: <span className='text-blue-600'>13</span>
                </button>
                
                <button className="px-3 py-1.5 bg-slate-50 hover:bg-blue-50 border border-blue-500 text-slate-600 hover:text-blue-700 rounded-lg text-[11px] font-bold transition-all duration-200 uppercase tracking-tight">
                    Cameras: <span className='text-blue-600 ml-1'>87/100</span>
                </button>
            </div>

            {/* Utility Section */}
            <div className='flex items-center gap-6'>
                {/* Notification Icon - Adjusted opacity and notification dot border */}
                <div className='relative rounded-lg cursor-pointer group'>
                    <img className='h-7 w-7 opacity-50 group-hover:opacity-100 group-hover:brightness-75 transition-all' src={notification} alt="notification" />
                    <span className='absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white'></span>
                </div>

                {/* Time Component Container - Border color updated to match theme */}
                <div className='pl-6 border-l border-slate-200 py-1'>
                    <Time />
                </div>
            </div>

        </nav>
    );
};

export default Navbar;