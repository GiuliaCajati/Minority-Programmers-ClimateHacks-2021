import './App.css';
import { useEffect, useState } from 'react'
import MapPage from './containers/MapPage.js'
import GraphContainer from './containers/GraphContainer.js'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';


let url = 'https://services3.arcgis.com/T4QMspbfLg3qTGWY/arcgis/rest/services/Fire_History_Perimeters_Public/FeatureServer/0/query?where=1%3D1&outFields=OBJECTID,poly_IncidentName,irwin_DailyAcres,irwin_FireBehaviorGeneral1,irwin_FireCause,irwin_FireCauseGeneral,irwin_FireCauseSpecific,irwin_FireDiscoveryDateTime,irwin_FireMgmtComplexity,irwin_FireOutDateTime,irwin_IncidentTypeCategory,irwin_InitialLatitude,irwin_InitialLongitude,irwin_POOState,irwin_PredominantFuelGroup,irwin_SecondaryFuelModel,irwin_TotalIncidentPersonnel,poly_Acres_AutoCalc,irwin_FireBehaviorGeneral2,irwin_FireBehaviorGeneral3,irwin_POOCounty,irwin_POOLandownerKind,irwin_PrimaryFuelModel&returnGeometry=false&outSR=4326&f=json'

function App() {

  const [ data, setData ] = useState([])

  useEffect(() => {
    fetch(url)
    .then(data => data.json())
    .then(response => {
      setData(response.features)
        //.features.filter(fire => fire.attributes.irwin_POOState === 'US-CA')
        
    })
  }, [])


  return (
    <Router>
      <div className="App">
        {/* <Switch>
          <Route path='/map' render ={() => <MapPage fireData = {data} />}/>
          <Route path='/graphs' render = {() => <GraphContainer fireData = {data}/>}/>
          <Redirect to='/map' />
        </Switch> */}
        <MapPage fireData = {data} />
      </div>
    </Router>
  );
}

export default App;
