import React from 'react'
import Piechart from '../components/Piechart'
import { getAverageAcres, getTotalFires} from '../helpers/piedata'
import { Grid, Typography, Paper } from '@material-ui/core'
import Barchart from '../components/Barchart'
import { getAcres, getDuration } from '../helpers/bardata'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      margin: theme.spacing(3),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

const GraphContainer = ({data}) => {
    const classes = useStyles();

    return (
        <div className={classes.root} className="graph-container">
            {data ?
                <Grid container spacing={1} >
                    <Grid item xs>
                        <Paper className={classes.paper} className="graph-paper" elevation={3}>
                            <Typography className="graph-title" variant="subtitle1">
                                Total Fires by Cause
                            </Typography>
                        <Piechart data={getTotalFires(data)} />
                        </Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper className={classes.paper} className="graph-paper" elevation={3}>
                            <Typography className="graph-title" variant="subtitle1">
                                Average Acres by Cause
                            </Typography>
                        <Piechart data={getAverageAcres(data)} /> 
                        </Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper className={classes.paper} className="graph-paper" elevation={3}>
                            <Typography className="graph-title" variant="subtitle1">
                                Average Acres by Fuel
                            </Typography>
                        <Barchart data={getAcres(data)} xaxis="PrimaryFuel" type="Acres"/>
                        </Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper className={classes.paper} className="graph-paper" elevation={3}>
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
