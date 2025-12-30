import React from 'react'

const SystemStatus = () => {
    return (
        <>
            <div className='w-100 h-50 border-1 rounded-lg p-2'>
                <div className='flex justify-between p-2'>
                    <p className='font-bold'>System Status</p>
                    <p className='text-green-500'>* All System Operational</p>
                </div>
                <div className='flex justify-between p-2'>
                    <div className='rounded-xl w-45 h-23 p-1 text-red-500 border-1'>
                        <p className='font-bold' >Sensor 1 Failure</p>
                    </div>
                    <div  className='rounded-xl w-45 h-23 p-1 text-red-500 border-1'>
                        <p className='font-bold'>Sensor 2 Failure</p>
                    </div>
                </div>
                <div className='flex justify-between p-2'>
                    <div className='rounded-xl w-45 h-23 p-1 text-red-500 border-1'>
                        <p className='font-bold' >Sensor 1 Failure</p>
                    </div>
                    <div  className='rounded-xl w-45 h-23 p-1 text-green-500 border-1'>
                        <p className='font-bold'>Resolved Today</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SystemStatus