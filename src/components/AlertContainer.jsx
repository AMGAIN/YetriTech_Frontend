import React from 'react'
import notification from '../assets/notification.png';
import AlertCard from './AlertCard';

const AlertContainer = () => {
    return (
        <>
            <div className='w-100 p-2 border-1'>
                <div className='p-1 flex justify-between  '>
                    <div className='flex items-center'>

                        <img className='h-5 w-5 m-1 ' src={notification} alt="notification" />
                        <p className='font-bold'>Real-Time Alerts</p>
                    </div>

                    <p className='p-1 bg-red-600 rounded-[10px] text-small  text-white'>1 NEW</p>
                </div>
                <div className='p-1 flex justify-between '>
                    <button className='w-10 flex justify-center text-white bg-blue-500 rounded-[5px]'> ALL</button>
                    <button className='w-16 flex justify-center text-white bg-gray-500 rounded-[5px]'> Crash</button>
                    <button className='w-20 flex justify-center text-white bg-gray-500 rounded-[5px]'> Collision</button>
                    <button className='w-14 flex justify-center text-white bg-gray-500 rounded-[5px]'> Theft</button>
                </div>
                <hr />
                <div className='pt-2'>
                    <AlertCard/>
                    <AlertCard/>
                    <AlertCard/>
                </div>
            </div>

        </>
    )
}

export default AlertContainer