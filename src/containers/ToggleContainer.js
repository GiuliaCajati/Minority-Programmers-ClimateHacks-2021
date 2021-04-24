import React from 'react'
import Button from '@material-ui/core/Button';

const ToggleContainer = (props) => {
    return (
        <div className="map-element" id="toggle-container">
            <Button 
                onClick={() => props.setAcresToggle(!props.acresToggle)}
                color="secondary" 
                variant={props.acresToggle ? "contained" : "outlined"}
                className='map-filter-button'>
                    Acres
            </Button>
            <Button 
                onClick={() => props.setDurationToggle(!props.durationToggle)}
                color="secondary" 
                variant={props.durationToggle ? "contained" : "outlined"} 
                className='map-filter-button'>
                    Duration
            </Button>
            <Button 
                onClick={() => props.setCauseToggle(!props.causeToggle)}
                color="secondary" 
                variant={props.causeToggle ? "contained" : "outlined"}
                className='map-filter-button'>
                    Cause
            </Button>
            <Button 
                onClick={() => props.setOngoingToggle(!props.ongoingToggle)}
                color="secondary" 
                variant={props.ongoingToggle ? "contained" : "outlined"} 
                className='map-filter-button'>
                    Ongoing
            </Button>
        </div>
    )
}

export default ToggleContainer
