import React from 'react'
import Piechart from '../components/Piechart'

const GraphContainer = (props) => {
    return (
        <div id="graph-page">
            <Piechart data={props.data}/>
        </div>
    )
}

export default GraphContainer
