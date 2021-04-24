import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, useParams } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import Map from '../components/Map.js'

// install first
// npm i react-tiger-transition
// npm i react-router-dom react-transition-group

import "react-tiger-transition/styles/main.min.css";
import {
  Navigation,
  Route,
  Screen,
  Link,
  scale,
  glideIn,
  glideOut,
  drop,
  flip,
  glide
} from "react-tiger-transition";


import {
  red,
  pink,
  purple,
  deepPurple,
  indigo,
  blue,
  lightBlue,
  cyan,
  teal,
  green,
  lightGreen,
  lime,
  yellow,
  amber,
  orange,
  deepOrange,
  brown,
  grey,
  blueGrey
} from "@material-ui/core/colors";


// inject styles
scale({
  name: "scale",
  scale: 1.2,
  exit: {
    delay: 100
  }
});
glide({
  name: "glide-left",
  direction: "left",
  opacity: 0.3
});
glide({
  name: "glide-right",
  direction: "right",
  opacity: 0.3
});
glideIn({
  name: "glideIn-left",
  direction: "left"
});
glideIn({
  name: "glideIn-top",
  direction: "top"
});
glideOut({
  name: "glideOut-bottom",
  direction: "bottom"
});
glideOut({
  name: "glideOut-right",
  direction: "right"
});
flip({
  name: "flip-right",
  direction: "right",
  duration: 200
});
flip({
  name: "flip-left",
  direction: "left",
  duration: 200
});

const colors = [
  { color: lime[500], name: "lime", id: 0 },
  { color: red[500], name: "red", id: 1 },
  { color: blue[500], name: "blue", id: 2 },
  { color: purple[500], name: "purple", id: 3 },
  { color: deepOrange[500], name: "deep-orange", id: 4 },
  { color: grey[500], name: "grey", id: 5 },
  { color: indigo[500], name: "indigo", id: 6 },
  { color: pink[500], name: "pink", id: 7 },
  { color: brown[500], name: "brown", id: 8 },
  { color: cyan[500], name: "cyan", id: 9 },
  { color: lightBlue[500], name: "light-blue", id: 10 },
  { color: green[500], name: "green", id: 11 },
  { color: deepPurple[500], name: "deep-purple", id: 12 },
  { color: yellow[500], name: "yellow", id: 13 },
  { color: orange[500], name: "orange", id: 14 },
  { color: amber[500], name: "amber", id: 15 },
  { color: teal[500], name: "teal", id: 16 },
  { color: blueGrey[500], name: "blue-grey", id: 17 },
  { color: lightGreen[500], name: "light-green", id: 18 }
];

const MapPage = (props) => {


const useStyles = makeStyles(theme => ({
  screen: {
    backgroundColor: "white"
  },
  margin: {
    margin: theme.spacing(2)
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  menu: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  feedItemRoot: {
    margin: theme.spacing(2)
  },
  hide: {
    opacity: 0,
    visibility: "hidden",
    zIndex: -1
  },
  previous: {
     height: `calc(100% - 64px)`,
    position: "absolute",
    width: "50%",
    top: 64,
    left: 0,
    zIndex: 3
  },
  next: {
    height: `calc(100% - 64px)`,
    position: "absolute",
    width: "50%",
    top: 64,
    right: 0,
    zIndex: 3
  },
}));


document.getElementById("root").style.height = "100vh";
document.getElementById("root").style.backgroundColor = "#333";


    return (
        <div>
            <Map fireData={props.fireData}/>
         
            {/* <Button 
                onClick={() => <Redirect to='/graphs'/>}
                color="secondary" 
                variant="contained" 
                className='toggle-button'>
                    Graphs!!!!
            </Button> */}
            
          
        </div>
       
    )
}

export default MapPage
