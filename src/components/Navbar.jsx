import React, { useState, useEffect } from 'react';
import notification from '../assets/notification.png';
import logout from '../assets/logout.png';
 
// Google Fonts: Rajdhani (brand title) + DM Mono (stats/clock)
const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600;700&family=DM+Mono:wght@400;500&display=swap';
fontLink.rel = 'stylesheet';
document.head.appendChild(fontLink);
 
// --- Live Clock (drop-in replacement for Time.jsx) ---
const Time = () => {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const id = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(id);
    }, []);
 
    const pad = (n) => String(n).padStart(2, '0');
    const h = pad(time.getHours());
    const m = pad(time.getMinutes());
    const s = pad(time.getSeconds());
    const dateStr = time.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
 
    return (
        <div className="flex flex-col items-end gap-0.5">
            <div
                className="text-sm font-medium tabular-nums tracking-widest text-slate-800"
                style={{ fontFamily: "'DM Mono', monospace" }}
            >
                {h}
                <span className="text-blue-500">:</span>
                {m}
                <span className="text-blue-500">:</span>
                {s}
            </div>
            <div
                className="text-[9px] font-medium uppercase tracking-[0.22em] text-slate-400"
                style={{ fontFamily: "'DM Mono', monospace" }}
            >
                {dateStr}
            </div>
        </div>
    );
};
 
// --- Main Navbar ---
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
 
    return (
        <nav className='bg-white mb-2 border-b border-slate-200 px-4 md:px-6 py-3 sticky top-0 z-50 shadow-sm'>
            <div className='max-w-[1920px] mx-auto flex justify-between items-center'>
 
                {/* Branding Section */}
                <div className='flex flex-col'>
                    <h1
                        className='text-slate-900 font-bold text-base md:text-lg leading-tight'
                        style={{ fontFamily: "'Rajdhani', sans-serif", letterSpacing: '0.1em' }}
                    >
                        TRAFFIC{' '}
                        <span className='text-blue-600'>COMMAND</span>{' '}
                        CENTER
                    </h1>
                    <p
                        className='text-[9px] md:text-[10px] text-slate-400 font-medium tracking-[0.28em] uppercase mt-0.5'
                        style={{ fontFamily: "'DM Mono', monospace" }}
                    >
                        Central Precinct
                        <span className='text-blue-400 mx-1.5'>·</span>
                        Sector-07
                    </p>
                </div>
 
                {/* Live System Stats - Hidden on Mobile, Visible on Medium screens+ */}
                <div className="hidden md:flex gap-3 items-center">
                    <button
                        className="px-3 py-1.5 bg-blue-50 hover:bg-blue-100 border border-blue-400 rounded-lg transition-all duration-200"
                        style={{ fontFamily: "'DM Mono', monospace" }}
                    >
                        <span className='text-[10px] font-medium text-slate-500 uppercase tracking-wider'>Units Ready</span>
                        <span className='text-blue-600 font-semibold text-[11px] ml-2'>13</span>
                    </button>
 
                    <button
                        className="px-3 py-1.5 bg-slate-50 hover:bg-blue-50 border border-blue-400 rounded-lg transition-all duration-200"
                        style={{ fontFamily: "'DM Mono', monospace" }}
                    >
                        <span className='text-[10px] font-medium text-slate-500 uppercase tracking-wider'>Cameras</span>
                        <span className='text-blue-600 font-semibold text-[11px] ml-2'>87/100</span>
                    </button>
                </div>
 
                {/* Utility Section */}
                <div className='flex items-center gap-3 md:gap-6'>
 
                    {/* Time - Hidden on very small screens */}
                    <div className='hidden sm:block border-l border-slate-200 pl-4 md:pl-6 py-1 order-last md:order-none'>
                        <Time />
                    </div>
 
                    {/* Icons Container */}
                    <div className='flex items-center gap-4'>
                        <div className='relative rounded-lg cursor-pointer group'>
                            <img
                                className='h-6 w-6 md:h-7 md:w-7 opacity-40 group-hover:opacity-90 transition-all duration-200'
                                src={notification}
                                alt="notification"
                            />
                            <span className='absolute top-0 right-0 w-2 h-2 md:w-2.5 md:h-2.5 bg-red-500 rounded-full border-2 border-white'></span>
                        </div>
 
                        <div className='relative rounded-lg cursor-pointer group'>
                            <img
                                className='h-6 w-6 md:h-7 md:w-7 opacity-40 group-hover:opacity-90 transition-all duration-200'
                                src={logout}
                                alt="logout"
                            />
                        </div>
                    </div>
 
                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>
 
            {/* Mobile Expandable Menu */}
            {isMenuOpen && (
                <div className="md:hidden mt-3 pt-3 border-t border-slate-100 flex flex-col gap-2">
                    <div className="flex justify-between items-center bg-blue-50 p-3 rounded-lg">
                        <span
                            className="text-[10px] font-medium text-slate-500 uppercase tracking-[0.2em]"
                            style={{ fontFamily: "'DM Mono', monospace" }}
                        >
                            Units Ready
                        </span>
                        <span
                            className="text-blue-600 font-semibold text-sm"
                            style={{ fontFamily: "'DM Mono', monospace" }}
                        >
                            13
                        </span>
                    </div>
                    <div className="flex justify-between items-center bg-slate-50 p-3 rounded-lg">
                        <span
                            className="text-[10px] font-medium text-slate-500 uppercase tracking-[0.2em]"
                            style={{ fontFamily: "'DM Mono', monospace" }}
                        >
                            Cameras Online
                        </span>
                        <span
                            className="text-blue-600 font-semibold text-sm"
                            style={{ fontFamily: "'DM Mono', monospace" }}
                        >
                            87/100
                        </span>
                    </div>
                    <div className="sm:hidden py-2 flex justify-center">
                        <Time />
                    </div>
                </div>
            )}
        </nav>
    );
};
 
export default Navbar;