import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Slide from '@material-ui/core/Slide';
import Popover from '@material-ui/core/Popover';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import ToggleContainer from './ToggleContainer.js'
import Map from '../components/Map.js'
import GraphContainer from './GraphContainer.js'
import Logo from '../assets/whatslit.png'

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
  logo: {
    height: '55%', 
    width: '55%', 
  },
  // infoBox: {
  //   opacity: 0.8
  // }
}));

const MapPage = (props) => {
  const classes = useStyles()
  const [checked, setChecked] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

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

          <Popover
            className={classes.infoBox} 
            open={openToggle}
            toggleInfo={toggleInfo}
            onClose={setToggleInfoClose}
            anchorOrigin={{
              verticle: "top", 
              horizontal: "center"
            }}
            transformOrigin={{
              vertical: "top", 
              horizontal: "center"
            }}
            >
            {/* <Paper className="site-info">  */}
            <div style={{width: '100rem', padding: '40px'}}>

            <center>
              <img src={Logo} className={classes.logo}/> 
              <p> Hey hottie! Welcome to What's Lit! Here is where you can find out <b>what's lit</b> (literally).</p> 
              {/* <br/>  */}
              <p>Here is where you'll be able to check out all of the fires that have happened in the United States between the years 2020-2021. There have been over <b>16000 fires</b> and over <b>444000 acres</b> and they just continue to grow more and more each year! The public plays a valuable role in preventing wildfires. The national average of human-caused wildfires comprises 87 percent of all wildfire occurrences every year. Most of these fires can be prevented. Preventable wildfires threaten lives, property, and our precious natural resources. Whether it is properly extinguishing a campfire or keeping your vehicle maintained to prevent sparks, following just a few simple steps can help prevent wildfires. Learn how to properly use outdoor equipment; burn debris safely; start, maintain, and extinguish a campfire; maintain a vehicle and tow safely; and practice fire-safe target shooting to name a few.
              </p> 
              <p>
              In many areas, May is Wildfire Awareness Month. As the weather becomes warmer and wildland vegetation, or fuels, begin to dry out, it is time to plan for the wildfires. We can all help make the world a safer place by learning more about how and why wildfires start. From historical statistics, to the resources we use to put wildfires out, to ways to do your part to prevent wildfires, teaching people about wildfires is an important part of what we do.
              </p>
              <a href="https://www.ready.gov/wildfires" target="Wildfires">Steps on How to Prevent Forest Fires</a>
              <br /> 
              <a href="https://wildfirerisk.org/reduce-risk/" target="Reduce Risk">How to Reduce Risks of Fires</a>
              <br /> 
              <a href="https://www.readyforwildfire.org/prevent-wildfire/one-less-spark-campaign/" target="One Less Spark">One Less Spark, One Less Wildfire</a>
              <br /> 
              <a href="https://smokeybear.com/en" target="Smokey the Bear">Only You Can Prevent Wildfires</a>
            </center>
          </div>
            {/* </Paper> */}
          </Popover>

          <Button className="graph-button"
            variant="contained" 
            checked={checked}
            onClick={handleChange}>
                Check out the graphs!
          </Button>

          <Popover
          anchorReference="anchorPosition"
          anchorPosition={{ top: 600, left: 1250}}
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          {/* <Typography className={classes.typography}>The content of the Popover.</Typography>
          */}
          <GraphContainer data={props.fireData}/> 
        </Popover>

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
