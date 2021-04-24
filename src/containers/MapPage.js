import React from 'react'
import Map from '../components/Map.js'

const MapPage = (props) => {
    return (
        <Map fireData={props.fireData}/>
    )
}

export default MapPage
