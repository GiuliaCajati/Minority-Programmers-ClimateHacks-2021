import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ToggleContainer from './ToggleContainer.js'
import Map from '../components/Map.js'
import About from "../components/About.js";
import GraphOverlay from "../components/GraphOverlay.js";

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(1),
  },
  logo: {
    height: '20%', 
    width: '20%', 
  },
  infoBox: {
    width: "75%",
    height: "75%"
  }
}));

const MapPage = (props) => {
  const classes = useStyles()
  const [checked, setChecked] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const [ acresToggle, setAcresToggle ] = useState(false)
  const [ durationToggle, setDurationToggle ] = useState(false)
  const [ causeToggle, setCauseToggle ] = useState(false)
  const [ ongoingToggle, setOngoingToggle ] = useState(false)

  const [ toggleInfo, setToggleInfo ] = useState(true)


  const handleChange = (event) => {
    setChecked((prev) => !prev);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const setToggleInfoClose = () => {
    setToggleInfo(false) 
  }

  const openToggle = Boolean(toggleInfo);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

    return (

      <div>
          <Map
            fireData={ongoingToggle?props.fireData.filter(data => data.endDate === 'present'):props.fireData}
            acresToggle={acresToggle}
            durationToggle={durationToggle}
            causeToggle={causeToggle}
          />

            <About openToggle={openToggle} classes={classes} toggleInfo={toggleInfo} setToggleInfoClose={setToggleInfoClose}/>

          <Button className="graph-button map-filter-button"
            variant="contained" 
            color="secondary"
            checked={checked}
            onClick={handleChange}>
                Check out the graphs!
          </Button>

            <GraphOverlay id={id} open={open} anchorEl={anchorEl} handleClose={handleClose} fireData={props.fireData}/>
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
    );
}

export default MapPage
