import './App.css';
import { useEffect, useState } from 'react'

let url = 'https://services3.arcgis.com/T4QMspbfLg3qTGWY/arcgis/rest/services/Fire_History_Perimeters_Public/FeatureServer/0/query?where=1%3D1&outFields=OBJECTID,poly_IncidentName,irwin_DailyAcres,irwin_FireBehaviorGeneral1,irwin_FireCause,irwin_FireCauseGeneral,irwin_FireCauseSpecific,irwin_FireDiscoveryDateTime,irwin_FireMgmtComplexity,irwin_FireOutDateTime,irwin_IncidentTypeCategory,irwin_InitialLatitude,irwin_InitialLongitude,irwin_POOState,irwin_PredominantFuelGroup,irwin_SecondaryFuelModel,irwin_TotalIncidentPersonnel,poly_Acres_AutoCalc,irwin_FireBehaviorGeneral2,irwin_FireBehaviorGeneral3,irwin_POOCounty,irwin_POOLandownerKind,irwin_PrimaryFuelModel&returnGeometry=false&outSR=4326&f=json'

function App() {

  const [ data, setData ] = useState([])

  useEffect(() => {
    fetch(url)
    .then(data => data.json())
    .then(response => {
      setData(response.features.filter(fire => fire.attributes.irwin_POOState === 'US-CA'))
    })
  }, [])


  return (
    <div className="App">
    </div>
  );
}

export default App;
