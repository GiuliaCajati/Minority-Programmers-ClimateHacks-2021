import React from 'react'
import { Icon } from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup  } from 'react-leaflet'


//fireData

const Map = (props) => {

    const fireIcon = new Icon({
      iconUrl:'https://i.imgur.com/F53W34b.png',
      iconSize: [15, 15]
    })

    const determineCause = (fire) => {
      if (!fire.irwin_FireCause || fire.irwin_FireCause === "Unknown") {
        return "Undetermined"
      }
      else if (fire.irwin_FireCause && !fire.irwin_FireCauseGeneral) {
        return fire.irwin_FireCause
      }
      else if (fire.irwin_FireCause && fire.irwin_FireCauseGeneral && !fire.irwin_FireCauseSpecific) {
        return `${fire.irwin_FireCause} (${fire.irwin_FireCauseGeneral})`
      }
      else {
        if (fire.irwin_FireCauseGeneral === "Other Human Cause") {
          return `${fire.irwin_FireCause} (${fire.irwin_FireCauseSpecific})`
        }

        switch(fire.irwin_FireCauseSpecific) {
          case "Motor Vehicle":
            return `${fire.irwin_FireCause} (${fire.irwin_FireCauseSpecific})`
          default:
            return `${fire.irwin_FireCause} (${fire.irwin_FireCauseGeneral}, ${fire.irwin_FireCauseSpecific})`
        }
      }
    }

    const determineVegetation = (fire) => {
      if (fire.irwin_PredominantFuelGroup && !fire.irwin_SecondaryFuelModel) {
        return fire.irwin_PredominantFuelGroup
      }
      else {
        return `${fire.irwin_PredominantFuelGroup}, ${fire.irwin_SecondaryFuelModel}`
      }
    }

    return (
     
    <MapContainer center={[40, -100]} zoom={5} scrollWheelZoom={true}>
      <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {props.fireData.map(fire => {
        if(fire.irwin_InitialLatitude === null || fire.irwin_InitialLongitude === null){
          return null
        }
        return<Marker 
              icon={fireIcon}
              key = {fire.OBJECTID} 
              position={ [fire.irwin_InitialLatitude, fire.irwin_InitialLongitude ]}>
          <Popup>
            <p><b>{fire.poly_IncidentName}</b></p>
            <ul>
            <li>
              <b>County: </b> {fire.irwin_POOCounty}
            </li>
            <li>
              <b>Date: </b>
              {fire.startDate} - {fire.endDate} ({fire.duration} days)
            </li>
            <li>
              <b>Acres Burned: </b> 
              {fire.acres}
            </li>
            <li>
              <b>Cause: </b> 
              {determineCause(fire)}
            </li>
            {fire.irwin_PredominantFuelGroup
              ?
                <li>
                  <b>Vegetation: </b>
                  {determineVegetation(fire)}
                </li>
              :
                null
            }
            {fire.irwin_TotalIncidentPersonnel
              ?
                <li>
                  <b>Firefighters: </b>
                  {fire.irwin_TotalIncidentPersonnel}
                </li>
              :
                null
            }
            {fire.irwin_POOLandownerKind
              ?
                <li>
                  <b>Property: </b> {fire.irwin_POOLandownerKind}
                </li>
              :
                null
            }
            </ul>
            
          </Popup>
        </Marker>
      })}
        
    </MapContainer>
        
    )
}

export default Map
