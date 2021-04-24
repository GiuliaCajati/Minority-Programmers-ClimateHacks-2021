import React, {useState} from 'react'
import Piechart from '../components/Piechart'

const GraphContainer = (props) => {

    return (
        <div id="graph-page">
            {props.data ? <Piechart data={props.data}/> : null}
        </div>
    )
}

export default GraphContainer
