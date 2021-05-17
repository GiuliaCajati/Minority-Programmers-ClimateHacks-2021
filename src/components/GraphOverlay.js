import React from 'react'
import Popover from '@material-ui/core/Popover';
import GraphContainer from '../containers/GraphContainer';

const GraphOverlay = ({id, open, anchorEl, handleClose, fireData}) => {
    return (
        <Popover
          anchorReference="anchorPosition"
          anchorPosition={{ top: 600, left: 5}}
          className="popover-container"
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
          <GraphContainer data={fireData}/> 
        </Popover>
    )
}

export default GraphOverlay
