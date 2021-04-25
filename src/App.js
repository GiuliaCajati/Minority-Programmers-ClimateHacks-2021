import './App.css';
import { useEffect, useState } from 'react'
import MapPage from './containers/MapPage.js'

import { BrowserRouter as Router, } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";

let url = 'https://services3.arcgis.com/T4QMspbfLg3qTGWY/arcgis/rest/services/Fire_History_Perimeters_Public/FeatureServer/0/query?where=1%3D1&outFields=OBJECTID,poly_IncidentName,irwin_DailyAcres,irwin_FireBehaviorGeneral1,irwin_FireCause,irwin_FireCauseGeneral,irwin_FireCauseSpecific,irwin_FireDiscoveryDateTime,irwin_FireMgmtComplexity,irwin_FireOutDateTime,irwin_IncidentTypeCategory,irwin_InitialLatitude,irwin_InitialLongitude,irwin_POOState,irwin_PredominantFuelGroup,irwin_SecondaryFuelModel,irwin_TotalIncidentPersonnel,poly_Acres_AutoCalc,irwin_FireBehaviorGeneral2,irwin_FireBehaviorGeneral3,irwin_POOCounty,irwin_POOLandownerKind,irwin_PrimaryFuelModel&returnGeometry=false&outSR=4326&f=json'

const useStyles = makeStyles(theme => ({
  hide: {
    opacity: 0, 
    visibility: "hidden", 
    zIndex: -1
  }
}))

function App() {
  const classes = useStyles()
  const [ data, setData ] = useState([])

  useEffect(() => {
    fetch(url)
    .then(data => data.json())
    .then(handleResponse)
  }, [])

  const handleResponse = (response) => {
    let fires = response.features.map(fire => fire.attributes)
    fires.forEach(fire => {
      fire.startDate = new Date(fire.irwin_FireDiscoveryDateTime).toLocaleDateString("en-US")
      fire.endDate = fire.irwin_FireOutDateTime
        ?
          new Date(fire.irwin_FireOutDateTime).toLocaleDateString("en-US")
        :
          "present"
      fire.duration = fire.irwin_FireOutDateTime
        ?
          Math.ceil((fire.irwin_FireOutDateTime - fire.irwin_FireDiscoveryDateTime) / (60*60*24*1000))
        :
          Math.ceil((Date.now() - fire.irwin_FireDiscoveryDateTime) / (60*60*24*1000))
      fire.acres = fire.poly_Acres_AutoCalc.toFixed(2)
      if (!fire.irwin_FireCause || fire.irwin_FireCause === "Unknown") {
        fire.irwin_FireCause = "Undetermined"
      }
      if (fire.irwin_FireCauseSpecific === "Other, Unknown" || fire.irwin_FireCauseSpecific === "Other, Known") {
        fire.irwin_FireCauseSpecific = null
      }
      if (fire.irwin_FireCauseGeneral === "Debris/Open Burning") {
        fire.irwin_FireCauseGeneral = "Open Burning"
      }
      else if (fire.irwin_FireCauseGeneral === "Other Human Cause" && !fire.irwin_FireCauseSpecific) {
        fire.irwin_FireCauseGeneral = null
      }
    })
    setData(fires)
  }



  return (
    <Router>
      <div className="App"> 
        <MapPage fireData={data} />
        {/* <GraphContainer data={data}/>  */}
      </div>
    </Router>
  );
}

export default App;

