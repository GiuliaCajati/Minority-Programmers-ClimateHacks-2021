import React, { useState } from 'react'
import Map from '../components/Map.js'
import ToggleContainer from './ToggleContainer.js'
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';

const MapPage = (props) => {

    const [ acresToggle, setAcresToggle ] = useState(false)
    const [ durationToggle, setDurationToggle ] = useState(false)
    const [ causeToggle, setCauseToggle ] = useState(false)
    const [ ongoingToggle, setOngoingToggle ] = useState(false)

    return (
        <div>
            <Map
                fireData={ongoingToggle?props.fireData.filter(data => data.endDate === 'present'):props.fireData}
                acresToggle={acresToggle}
                durationToggle={durationToggle}
                causeToggle={causeToggle}
            />
         
            <Button 
                onClick={() => <Redirect to='/graphs'/>}
                color="secondary" 
                variant="contained" 
                className='map-element'
                id="graph-toggle-button">
                    Graphs!!!!
            </Button>

            <ToggleContainer
                acresToggle={acresToggle}
                durationToggle={durationToggle}
                causeToggle={causeToggle}
                ongoingToggle={ongoingToggle}
                setAcresToggle={setAcresToggle}
                setDurationToggle={setDurationToggle}
                setCauseToggle={setCauseToggle}
                setOngoingToggle={setOngoingToggle}
            />
            
          
        </div>
       
    )
}

export default MapPage
