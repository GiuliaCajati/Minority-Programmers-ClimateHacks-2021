import React from 'react'
import Popover from '@material-ui/core/Popover';
import GraphContainer from '../containers/GraphContainer';

const GraphOverlay = ({id, open, anchorEl, handleClose, fireData}) => {
    return (
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
          <GraphContainer data={fireData}/> 
        </Popover>
    )
}

export default GraphOverlay
