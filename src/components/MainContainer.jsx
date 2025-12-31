import React from 'react'
import Map from './Map'
// import SystemStatus from './SystemStatus'
import TrafficMatrics from './TrafficMatrics'

const MainContainer = () => {
    return (
        <>
            <div className='pr-2 pl-2 pb-2'>
                <Map />
                <TrafficMatrics />
            </div>
        </>
    )
}

export default MainContainer