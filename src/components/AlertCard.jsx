import React from 'react'

const AlertCard = () => {
    return (
        <>
            <div className='p-2 w-95 border-1 rounded-xl'>
                <div className=' w-91 flex justify-between items-center'>
                    <p className='p-1 w-15 h-8 border-1 bg-red-300 rounded-xl flex justify-center items-center border-red-600 text-red-600'>CRASH</p>
                    <p className='p-1 w-12 h-6 border-1 bg-blue-300 rounded-xl flex justify-center items-center border-blue-600 text-blue-600'>NEW</p>
                </div>
                <div className='w-91 flex justify-between'>
                    <p className=''>INC-006</p>
                    <p className=''>1 Hour Ago</p>
                </div>
                <p className='font-bold'>Multi Vehicle Collision, Possible Injuries</p>
                <p>Location</p>
                <p>Severity:</p>
                <p>Liscence no: BA 7344</p>
            </div>
        </>
    )
}

export default AlertCard