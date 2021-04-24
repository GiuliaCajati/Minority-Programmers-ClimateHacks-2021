import React from 'react'
import Map from '../components/Map.js'
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';

const MapPage = (props) => {
    return (
        <div>
            <Map fireData={props.fireData}/>
         
            <Button 
                onClick={() => <Redirect to='/graphs'/>}
                color="secondary" 
                variant="contained" 
                className='toggle-button'>
                    Graphs!!!!
            </Button>
            
          
        </div>
       
    )
}

export default MapPage
