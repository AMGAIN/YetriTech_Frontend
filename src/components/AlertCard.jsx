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
        <div className='group mb-3 p-4 w-full bg-zinc-900/40 border border-zinc-800 rounded-xl hover:bg-zinc-800/60 hover:border-zinc-700 transition-all duration-300 cursor-pointer shadow-sm'>
            
            {/* Top Row: Type and Status */}
            <div className='flex justify-between items-center mb-3'>
                <span className='px-3 py-1 text-[10px] font-black tracking-widest border border-red-900/50 bg-red-950/30 text-red-500 rounded-md'>
                    {type}
                </span>
                <span className='px-2 py-0.5 text-[10px] font-bold border border-blue-900/50 bg-blue-950/30 text-blue-400 rounded-md'>
                    NEW
                </span>
            </div>

            {/* Second Row: ID and Time */}
            <div className='flex justify-between items-center mb-2'>
                <p className='text-[11px] font-mono text-zinc-500 tracking-tighter'>{id}</p>
                <p className='text-[11px] text-zinc-500 italic'>{time}</p>
            </div>

            {/* Main Content */}
            <h3 className='text-zinc-100 font-bold text-sm mb-3 leading-snug group-hover:text-white'>
                {title}
            </h3>

            {/* Details Grid */}
            <div className='grid grid-cols-2 gap-y-2 border-t border-zinc-800/50 pt-3'>
                <div>
                    <p className='text-[10px] uppercase text-zinc-600 font-bold tracking-wider'>Location</p>
                    <p className='text-xs text-zinc-400'>{location}</p>
                </div>
                <div>
                    <p className='text-[10px] uppercase text-zinc-600 font-bold tracking-wider'>Severity</p>
                    <p className='text-xs text-zinc-400'>{severity}</p>
                </div>
                <div className='col-span-2'>
                    <p className='text-[10px] uppercase text-zinc-600 font-bold tracking-wider'>License No</p>
                    <p className='text-xs font-mono text-zinc-300'>{license}</p>
                </div>
            </div>
        </div>
    )
}

export default AlertCard