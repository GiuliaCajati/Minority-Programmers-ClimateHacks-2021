import React, {useState} from 'react'
import Piechart from '../components/Piechart'
import { getAverageAcres, getTotalFires, renderCustomizedLabel} from '../helpers/piedata'
import { Grid } from '@material-ui/core'

const GraphContainer = ({data}) => {

    return (
        <div id="graph-page">
            {data ? 
                <Grid container className="graph-container">
                    <Grid item xs={3}>
                        <Piechart data={getAverageAcres(data)} /> 
                    </Grid>
                    <Grid item xs={3}>
                        <Piechart data={getTotalFires(data)} />
                    </Grid>
                    <Grid item xs={3}>
                        
                    </Grid>
                    <Grid item xs={3}>
                        
                    </Grid>
                </Grid>
            : null}
        </div>
    )
}

export default GraphContainer
