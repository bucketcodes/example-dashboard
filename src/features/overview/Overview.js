import React, { Component } from 'react'
import { Grid, Typography, Paper, Button } from '@material-ui/core';
import MoreIcon from '@material-ui/icons/MoreHoriz'
import MinIcon from '@material-ui/icons/Maximize'

export class Overview extends Component {
  render() {
    return (
      <Grid container spacing={24}>

        <Grid item xs={12} style={{display: 'flex', justifyContent: 'center'}}>
          <Typography variant='title'>
            Overview
          </Typography>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper>
            <div style={{display: 'flex', justifyContent: 'space-between', padding: 10, paddingBottom: 0}}>
              <MoreIcon />
              <Typography variant='body2'>Tracker Metrix</Typography>
              <MinIcon style={{marginTop: 7}} />
            </div>
            <div style={{backgroundColor: '#51505c', padding: 10, display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
              <Typography style={{color: 'white', marginBottom: 10, marginTop: 10}} variant='body1'>
                <span style={{fontWeight: 700}}>98</span> loans overdue
              </Typography>
              <Typography style={{color: 'white', marginBottom: 10}} variant='body1'>
                <span style={{fontWeight: 700}}>15</span> loans on time
              </Typography>
              <Typography style={{color: 'white', marginBottom: 10}} variant='body1'>
                <span style={{fontWeight: 700}}>5</span> loans closing today
              </Typography>
              <Button variant="contained" color="primary">
                View Details
              </Button>
            </div>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper>
            <div style={{display: 'flex', justifyContent: 'space-between', padding: 10, paddingBottom: 0}}>
              <MoreIcon />
              <Typography variant='body2'>BDO Metrix</Typography>
              <MinIcon style={{marginTop: 7}} />
            </div>
            <div style={{backgroundColor: '#51505c', padding: 10, display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
              <Typography style={{color: 'white', marginBottom: 10, marginTop: 10}} variant='body1'>
                <span style={{fontWeight: 700}}>100</span> applications
              </Typography>
              <Typography style={{color: 'white', marginBottom: 10}} variant='body1'>
                <span style={{fontWeight: 700}}>45</span> suspects
              </Typography>
              <Typography style={{color: 'white', marginBottom: 10}} variant='body1'>
                <span style={{fontWeight: 700}}>30</span> prospects
              </Typography>
              <Button variant="contained" color="primary">
                View Details
              </Button>
            </div>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper>
            <div style={{display: 'flex', justifyContent: 'space-between', padding: 10, paddingBottom: 0}}>
              <MoreIcon />
              <Typography variant='body2'>Enterprise Metrix</Typography>
              <MinIcon style={{marginTop: 7}} />
            </div>
            <div style={{backgroundColor: '#51505c', padding: 10, display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
              <Typography style={{color: 'white', marginBottom: 10, marginTop: 10}} variant='body1'>
                <span style={{fontWeight: 700}}>40</span> SBA loans
              </Typography>
              <Typography style={{color: 'white', marginBottom: 10}} variant='body1'>
                <span style={{fontWeight: 700}}>45</span> write offs
              </Typography>
              <Typography style={{color: 'white', marginBottom: 10}} variant='body1'>
                <span style={{fontWeight: 700}}>30</span> liquidated loans
              </Typography>
              <Button variant="contained" color="primary">
                View Details
              </Button>
            </div>
          </Paper>
        </Grid>

      </Grid>
    )
  }
}

export default Overview
