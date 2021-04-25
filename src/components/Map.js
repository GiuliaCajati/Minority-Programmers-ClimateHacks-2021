import React from 'react'
import { Icon } from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup  } from 'react-leaflet'
import { Switch } from 'react-router';

const Map = (props) => {
    // const [ iconSize , setIconSize ] = useState([15, 15])
    // const [ icon, setIcon ] = useState(
    //   new Icon({
    //   iconUrl:'https://i.imgur.com/F53W34b.png',
    //   iconSize: iconSize
    //   })
    // )  


    const resizeIcon = (fire) => {
      if(props.acresToggle) {
        if(fire.acres <= 10){
          return 5
        } else if(fire.acres <= 20){
          return 10
        } else if(fire.acres <= 100){
          return 10
        } else if(fire.acres <= 500){
          return 20
        } else if(fire.acres <= 1000){
          return 30
        }else{
          return 60
        }
      } else if (props.durationToggle) {
        if(fire.duration <= 10){
          return 5
        } else if(fire.duration <= 20){
          return 10
        } else if(fire.duration <= 30){
          return 30
        }else{
          return 60
        }
      } 
      else {
        return 20
      }
    }
    const setIcon = (cause) => {
      if(props.causeToggle) {
         switch(cause){
            case 'Human':
              return 'https://i.imgur.com/mYKYRO2.png'
            case 'Natural':
              return 'https://i.imgur.com/04G71Br.png'
            default:
              return 'https://i.imgur.com/F53W34b.png'
         } 
      }
      else {
        return 'https://i.imgur.com/F53W34b.png'
      }
    }


    const determineCause = (fire) => {
      if (fire.irwin_FireCause && !fire.irwin_FireCauseGeneral) {
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
          const size = resizeIcon(fire)
          //const size = resizeIcon(props.acresToggle?fire.acres:fire.duration)
           const fireIcon = new Icon({
            iconUrl: setIcon(fire.irwin_FireCause),
            iconSize: [size, size]
          })
        if(fire.irwin_InitialLatitude === null || fire.irwin_InitialLongitude === null){
          return null
        }
        return<Marker 
              icon = {fireIcon}
              key = {fire.OBJECTID} 
              position={ [fire.irwin_InitialLatitude, fire.irwin_InitialLongitude ]}>
          <Popup className="pop-up-css">
            <p style={{fontSize: '16px', textAlign: 'center', color: '#7f0000'}}><b>{fire.poly_IncidentName}</b></p>
            <ul style={{fontSize: '14px'}}>
            <li>
              <b>Location: </b> {fire.irwin_POOCounty}, {fire.irwin_POOState.slice(-2)}
            </li>
            <li>
              <b>Date: </b>
              {fire.startDate} - {fire.endDate} ({fire.duration} {fire.duration === 1 ? "day" : "days"})
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
