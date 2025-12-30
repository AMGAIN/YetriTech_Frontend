import React from 'react'
import Map from './Map'
// import SystemStatus from './SystemStatus'
import TrafficMatrics from './TrafficMatrics'

const MainContainer = () => {
    return (
        <>
            <div className='p-2 border-1'>
                <Map />
                <TrafficMatrics />
            </div>
        </>
    )
}

export default MainContainer