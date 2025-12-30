import React from 'react'

const Map = () => {
    return (
        <>
            <div className='relative'>
                <div className='w-150 h-100 relative rounded-lg mb-3 h-70 bg-red-300'>
                    <button className='w-20 h-10 absolute right-3 top-10 bg-gray-500 rounded-lg text-white'>Heatmap</button>
                    <button className='w-20 h-10 absolute right-3 top-24 bg-gray-500 rounded-lg text-white'>Cameras</button>
                    <button className='w-20 h-10 absolute right-3 top-38 bg-gray-500 rounded-lg text-white'>Units</button>

                    <div className='w-30 h-30 bg-white absolute bottom-5 left-5 rounded-lg p-2 '>
                        LEGEND
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

export default Map