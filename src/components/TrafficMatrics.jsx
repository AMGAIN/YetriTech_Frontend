import React from 'react'

const TrafficMatrics = () => {
    return (
        <>
            <div className='p-2 w-150 rounded-lg border-1 '>
                <div className='flex justify-between'>
                    <p className='font-bold'>Traffic Flow Matrics</p>
                    <p className='text-gray-500'>Last 15 hours</p>
                </div>
                <div className='flex'>
                    <div className='m-2 border-1 border-red-400 h-35 w-90 bg-black'>
                    </div>
                    <div>
                        <div className='flex items-center '>
                            <div className=' bg-yellow-500 w-4 h-4 rounded-full'></div><p className='ml-1 text-yellow-500'>Congesion</p>
                        </div>
                        <div className='flex items-center '>
                            <div className=' bg-red-500 w-4 h-4 rounded-full'></div><p className='ml-1 text-red-500'>Crash</p>
                        </div>
                        <div className='flex items-center '>
                            <div className=' bg-purple-500 w-4 h-4 rounded-full'></div><p className='ml-1 text-purple-500'>Theft</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TrafficMatrics