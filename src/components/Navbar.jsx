import React from 'react'
import notification from '../assets/notification.png';
import Time from './Time.jsx';

const Navbar = () => {
    return (
        <>
            <div className='p-2 flex justify-between border-1'>

                <div>
                    <h1>TRAFFIC COMMAND CENTER</h1>
                    <p className='text-[10px] text-gray-400'>CENTRAL PRECINCT SECTOR-07</p>
                </div>
                <div className="w-100 flex justify-between items-center ">
                    <div className=" p-2 bg-green-300 rounded-[10px] border-3 border-green-600 flex justify-center items-center text-green-800">5 ACTIVE</div>
                    <div className=" p-2 bg-gray-400 rounded-[10px] flex justify-center items-center text-white">Units ready</div>
                    <div className=" p-2 bg-gray-400 rounded-[10px] flex justify-center items-center text-white">Cameras: 87/100</div>
                </div>

                <div className='w-50 flex justify-between'>
                    <img className='h-10 w-10 m-1 ' src={notification} alt="notification" />
                    <Time/>
                </div>

            </div>
        </>
    )
}

export default Navbar