import React from 'react'
import Piechart from '../components/Piechart'
import { getAverageAcres, getTotalFires} from '../helpers/piedata'
import { Grid, Typography, Paper } from '@material-ui/core'
import Barchart from '../components/Barchart'
import { getAcres, getDuration } from '../helpers/bardata'

const GraphContainer = ({data}) => {

    return (
        <div id="graph-page">
            {data ? 
                <Grid container className="graph-container">
                    <Grid item xs={3}>
                        <Paper className="graph-paper" elevation={3}>
                            <Typography className="graph-title" variant="subtitle1">
                                Total Fires by Cause
                            </Typography>
                        <Piechart data={getTotalFires(data)} />
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className="graph-paper" elevation={3}>
                            <Typography className="graph-title" variant="subtitle1">
                                Average Acres by Cause
                            </Typography>
                        <Piechart data={getAverageAcres(data)} /> 
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className="graph-paper" elevation={3}>
                            <Typography className="graph-title" variant="subtitle1">
                                Average Acres by Fuel
                            </Typography>
                        <Barchart data={getAcres(data)} xaxis="PrimaryFuel" type="Acres"/>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className="graph-paper" elevation={3}>
                            <Typography className="graph-title" variant="subtitle1">
                                Average Duration by Cause
                            </Typography>
                        <Barchart data={getDuration(data)} xaxis="PrimaryFuel" type="Duration"/>
                        </Paper>
                    </Grid>
                </Grid>
            : null}
        </div>
    )
}

export default GraphContainer
