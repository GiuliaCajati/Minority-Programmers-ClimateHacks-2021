import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Slide from '@material-ui/core/Slide';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';

import Map from '../components/Map.js'
import GraphContainer from './GraphContainer.js'
import Pie from '../components/Piechart.js'

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

const MapPage = (props) => {
  const classes = useStyles()
  const [checked, setChecked] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setChecked((prev) => !prev);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

    return (
        <div>
    <div>
      <center>
        <Button 
          style={{marginTop: '50rem'}}
          color="secondary" 
          variant="contained" 
          className='toggle-button'
          checked={checked}
          onClick={handleChange}>
              Graphs!!
        </Button>

        <Popover
        anchorReference="anchorPosition"
        anchorPosition={{ top: 800, left: 1250}}
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
         <GraphContainer/> 
      </Popover>
    </center>
    </div>

          <Map fireData={props.fireData}/>
            
        </div>
       
    )
}

export default MapPage
