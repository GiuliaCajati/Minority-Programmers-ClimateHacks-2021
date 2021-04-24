import React from 'react'
import { Icon } from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup  } from 'react-leaflet'


//fireData

const Map = (props) => {

    const fire = new Icon({
      iconUrl:'https://i.imgur.com/F53W34b.png',
      iconSize: [15, 15]
    })
    return (
     
    <MapContainer center={[37.0902, -95.7129]} zoom={5} scrollWheelZoom={true}>
      <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {props.fireData.map(data => {
        if(data.attributes.irwin_InitialLatitude === null || data.attributes.irwin_InitialLongitude === null){
          return null
        }
        return<Marker 
              icon={fire}
              key = {data.attributes.OBJECTID} 
              position={ [data.attributes.irwin_InitialLatitude, data.attributes.irwin_InitialLongitude ]}>
          <Popup>
            <p><b>Name: {data.attributes.poly_IncidentName}</b></p>
            <ul>
            <li>
              <b>County:</b> {data.attributes.irwin_POOCounty}
            </li>
            <li>
              <b>Date:</b>
              {data.attributes.irwin_FireDiscoveryDateTime} - {data.attributes.irwin_FireOutDateTime}
            </li>
            <li>
              <b>Acres Burned:</b> 
              {data.attributes.poly_Acres_AutoCalc}
            </li>
            <li>
              <b>Cause:</b> 
              {data.attributes.irwin_FireCause}, {data.attributes.irwin_FireCauseGeneral}, {data.attributes.irwin_FireCauseSpecific}
            </li>
            <li>
              <b>Vegitation: </b>
              {data.attributes.irwin_PredominantFuelGroup}, {data.attributes.irwin_SecondaryFuelModel} </li>
            <li>
              <b>Fire Fighters: </b>
              {data.attributes.irwin_TotalIncidentPersonnel}
            </li>
            <li>
              <b>Property:</b> {data.attributes.irwin_POOLandownerKind}
            </li>
            </ul>
            
          </Popup>
        </Marker>
      })}
        
    </MapContainer>
        
    )
}

export default Map
