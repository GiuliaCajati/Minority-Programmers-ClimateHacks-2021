import React, {useState} from 'react'
import Piechart from '../components/Piechart'
import Paper from '@material-ui/core/Paper';
const GraphContainer = (props) => {

    return (
        <div id="graph-page">
          {/* <Paper> */}
          testing 

            {props.data ? <Piechart data={props.data}/> : null}
          {/* </Paper> */}
        </div>
    )
}

export default GraphContainer
