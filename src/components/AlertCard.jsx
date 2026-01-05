import React from 'react'

const AlertCard = ({ 
    type = "CRASH", 
    id = "INC-006", 
    time = "1 Hour Ago", 
    title = "Multi Vehicle Collision, Possible Injuries",
    location = "Main Highway, Sector 4",
    severity = "High",
    license = "BA 7344" 
}) => {
    return (
        // Changed to white bg with a subtle slate border. Hover now tints blue.
        <div className='group mb-3 p-4 w-full bg-white border border-slate-200 rounded-xl hover:bg-blue-50/50 hover:border-blue-200 transition-all duration-300 cursor-pointer shadow-sm'>
            
            {/* Top Row: Type and Status */}
            <div className='flex justify-between items-center mb-3'>
                {/* Kept red for Crash urgency, but used a cleaner white/red combo */}
                <span className='px-3 py-1 text-[10px] font-black tracking-widest bg-red-600 text-white rounded-md shadow-sm'>
                    {type}
                </span>
                {/* Changed to a clean theme-matching blue badge */}
                <span className='px-2 py-0.5 text-[10px] font-bold bg-blue-100 text-blue-700 border border-blue-200 rounded-md'>
                    NEW
                </span>
            </div>

            {/* Second Row: ID and Time */}
            <div className='flex justify-between items-center mb-2'>
                <p className='text-[11px] font-mono text-slate-400 tracking-tighter'>{id}</p>
                <p className='text-[11px] text-slate-400 italic font-medium'>{time}</p>
            </div>

            {/* Main Content: Deep slate for readability, blue on hover */}
            <h3 className='text-slate-900 font-bold text-sm mb-3 leading-snug group-hover:text-blue-700 transition-colors'>
                {title}
            </h3>

            {/* Details Grid */}
            <div className='grid grid-cols-2 gap-y-2 border-t border-slate-100 pt-3'>
                <div>
                    <p className='text-[10px] uppercase text-slate-400 font-bold tracking-wider'>Location</p>
                    <p className='text-xs text-slate-600 font-medium'>{location}</p>
                </div>
                <div>
                    <p className='text-[10px] uppercase text-slate-400 font-bold tracking-wider'>Severity</p>
                    <p className='text-xs text-slate-600 font-medium'>{severity}</p>
                </div>
                <div className='col-span-2'>
                    <p className='text-[10px] uppercase text-slate-400 font-bold tracking-wider'>License No</p>
                    <p className='text-xs font-mono text-blue-600 font-bold'>{license}</p>
                </div>
            </div>
        </div>
    )
}

export default AlertCard