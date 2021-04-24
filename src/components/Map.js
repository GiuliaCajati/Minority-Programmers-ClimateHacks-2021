import React from 'react'
import { MapContainer, TileLayer, Marker, Popup  } from 'react-leaflet'

//fireData

const Map = (props) => {
    return (
        
    <MapContainer center={[35.91634, -121.4352]} zoom={6} scrollWheelZoom={true}>
      <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {props.fireData.map(data => {
        if(data.attributes.irwin_InitialLatitude === null || data.attributes.irwin_InitialLongitude === null){
          return null
        }
        return<Marker position={ [data.attributes.irwin_InitialLatitude, data.attributes.irwin_InitialLongitude ]}>
          <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      })}
      
       
    </MapContainer>
        
    )
}

export default Map
