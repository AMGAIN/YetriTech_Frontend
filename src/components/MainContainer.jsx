import React from 'react'
import Map from './Map'
// import SystemStatus from './SystemStatus'
import TrafficMatrics from './TrafficMatrics'

const MainContainer = () => {
    return (
        <>
            <div className=' w-full my-2 lg:mt-0 lg:px-2 lg:min-w-[400px] xl:min-w-[650px]'>
                <Map/>
                <TrafficMatrics />
            </div>
        </>
    )
}

export default MainContainer