import React from 'react'
import { MapContainer, TileLayer, Marker, Popup  } from 'react-leaflet'

const Map = () => {
    return (
        
    <MapContainer center={[35.91634, -121.4352]} zoom={6} scrollWheelZoom={true}>
      <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[35.91634, -121.4352]}>
        <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
        
    )
}

export default Map
