import React from 'react'
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

const ToggleContainer = (props) => {

    const handleClick = (toggle) => {
        switch(toggle) {
            case "acres": 
                props.setAcresToggle(!props.acresToggle)
                if (props.durationToggle) {
                    props.setDurationToggle(!props.durationToggle)
                }
                break
            case "duration":
                props.setDurationToggle(!props.durationToggle)
                if (props.acresToggle) {
                    props.setAcresToggle(!props.acresToggle)
                }
                break
            case "cause":
                props.setCauseToggle(!props.causeToggle)
                break
            case "ongoing":
                props.setOngoingToggle(!props.ongoingToggle)
                break
            default:
                break
        }
    }

    return (
        <div className="map-element" id="toggle-container">
            <Tooltip title="Size of fire varies depending on number of acres fire damaged." >
                <Button 
                    onClick={() => handleClick("acres")}
                    color="secondary" 
                    variant={props.acresToggle ? "contained" : "outlined"}
                    className='map-filter-button'>
                        Acres
                </Button>
            </Tooltip>
            <Tooltip title="Size of fire varies depending on number of days fire lasted." >
                <Button 
                    onClick={() => handleClick("duration")}
                    color="secondary" 
                    variant={props.durationToggle ? "contained" : "outlined"} 
                    className='map-filter-button'>
                        Duration
                </Button>
            </Tooltip>
            <Tooltip title="Naturaly Caused: displayed with lightning, Human Caused: displayed with people" >
                <Button 
                    onClick={() => handleClick("cause")}
                    color="secondary" 
                    variant={props.causeToggle ? "contained" : "outlined"}
                    className='map-filter-button'>
                        Cause
                </Button>
            </Tooltip>
            <Tooltip title="Currently ongoing fires." >
                <Button 
                    onClick={() => handleClick("ongoing")}
                    color="secondary" 
                    variant={props.ongoingToggle ? "contained" : "outlined"} 
                    className='map-filter-button'>
                        Ongoing
                </Button>
            </Tooltip>
        </div>
    )
}

export default ToggleContainer
