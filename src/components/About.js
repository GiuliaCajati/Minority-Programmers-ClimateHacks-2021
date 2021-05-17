import React from 'react'

import Logo from '../assets/forestfire.png'
import Popover from '@material-ui/core/Popover';

const About = ({openToggle, classes, toggleInfo, setToggleInfoClose }) => {
    return (
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
            <div className={classes.infoDiv}>

            <center>
              <img src={Logo} className={classes.logo}/> 
              <p className={classes.infoText}>
              <p>Here is where you'll be able to check out all of the&nbsp;
              <a href='https://data-nifc.opendata.arcgis.com/datasets/68637d248eb24d0d853342cba02d4af7_0?geometry=115.099%2C10.788%2C8.224%2C58.424' target='_blank'>
              <b>NIFC fire data</b>
              </a> 
              &nbsp;in the United States between the years 2020-2021. There have been over <b>16,000 fires</b> over <b>444,000 acres</b> and they just continue to grow more, and more each year! The public plays a valuable role in preventing wildfires. The national average of human-caused wildfires comprises <b>87 percent</b> of all wildfire occurrences every year. Most of these fires can be prevented. Preventable wildfires threaten lives, property, and our precious natural resources. Whether it is properly extinguishing a campfire or keeping your vehicle maintained to prevent sparks, following just a few simple steps can help prevent wildfires. Learn how to properly use outdoor equipment; burn debris safely; start, maintain, and extinguish a campfire; maintain a vehicle and tow safely; and practice fire-safe target shooting to name a few.
              </p> 
              <p>
              In many areas, May is Wildfire Awareness Month. As the weather becomes warmer, and wildland vegetation, or fuels, begin to dry out, it is time to plan for the wildfires. We can all help make the world a safer place by learning more about how and why wildfires start. From historical statistics, to the resources we use to put wildfires out, to ways to do your part to prevent wildfires, teaching people about wildfires is an important part of what we do.
              </p>
              <a href="https://www.ready.gov/wildfires" target="Wildfires">Steps on How to Prevent Forest Fires</a>
              <br /> 
              <a href="https://wildfirerisk.org/reduce-risk/" target="Reduce Risk">How to Reduce Risks of Fires</a>
              <br /> 
              <a href="https://www.readyforwildfire.org/prevent-wildfire/one-less-spark-campaign/" target="One Less Spark">One Less Spark, One Less Wildfire</a>
              <br /> 
              <a href="https://smokeybear.com/en" target="Smokey the Bear">Only You Can Prevent Wildfires</a>
              </p>
            </center>
          </div>
            {/* </Paper> */}
          </Popover>
    )
}

export default About

