import React from "react";
import { Grid, Paper, Typography, Divider, Button } from "@material-ui/core";
import {Bar, Line} from 'react-chartjs-2';

class Dashboard extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            data: {
                labels: ["1", "2", "3", "4", "5"],
                datasets: [{
                    label: "Loans Made",
                    backgroundColor: "rgba(255,0,255,0.75)",
                    data: [4, 12, 1, 10, 6, 4]
                },
                {
                    label: "Potential",
                    backgroundColor: "rgba(0,255,0,0.75)",
                    data: [1, 12, 21, 18, 30, 43]
                }]
            }
        }
    }

  render() {
    return (
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper style={{ padding: 20 }}>
            <Typography
              style={{
                display: "flex",
                justifyContent: "center",
                paddingBottom: 20
              }}
              variant="title"
            >
              BDO Stages
            </Typography>
            <Divider
              style={{ backgroundColor: "rgba(0,0,0,0.2)", height: 2 }}
              variant="fullWidth"
            />
            <Grid style={{ paddingTop: 20 }} container spacing={24}>
              <Grid item xs={12} md={4}>
                <Paper>
                  <Typography
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      padding: 10
                    }}
                    variant="body1"
                  >
                    Prospects
                  </Typography>
                  <div style={{ backgroundColor: "gray", padding: 10 }}>
                    <Typography style={{ color: "white", textAlign: "center" }}>
                      3<br />
                      Total Value: $2,065,234.21
                      <br />
                      Average Age: 152 Days
                      <br />
                      Time to Submit: 92 Days
                    </Typography>
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        paddingTop: 15
                      }}
                    >
                      <Button color="primary" variant="contained">
                        View Details
                      </Button>
                    </div>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper>
                  <Typography
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      padding: 10
                    }}
                    variant="body1"
                  >
                    Submitted to FormWRX
                  </Typography>
                  <div style={{ backgroundColor: "gray", padding: 10 }}>
                    <Typography style={{ color: "white", textAlign: "center" }}>
                      3<br />
                      Total Value: $2,065,234.21
                      <br />
                      Average Age: 152 Days
                      <br />
                      Time to Submit: 92 Days
                    </Typography>
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        paddingTop: 15
                      }}
                    >
                      <Button color="primary" variant="contained">
                        View Details
                      </Button>
                    </div>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper>
                  <Typography
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      padding: 10
                    }}
                    variant="body1"
                  >
                    Suspects
                  </Typography>
                  <div style={{ backgroundColor: "gray", padding: 10 }}>
                    <Typography style={{ color: "white", textAlign: "center" }}>
                      3<br />
                      Total Value: $2,065,234.21
                      <br />
                      Average Age: 152 Days
                      <br />
                      Time to Submit: 92 Days
                    </Typography>
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        paddingTop: 15
                      }}
                    >
                      <Button color="primary" variant="contained">
                        View Details
                      </Button>
                    </div>
                  </div>
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12}>
            <Paper>
                <Grid container spacing={24}>
                    <Grid style={{position: 'relative'}} item xs={12} md={6} lg={4}>
                      <Bar 
                        options={{
                            responsive: true
                        }}
                        data={this.state.data}
                      />
                    </Grid>
                    <Grid style={{position: 'relative'}} item xs={12} md={6} lg={4}>
                      <Line 
                        options={{
                            responsive: true
                        }}
                        data={this.state.data}
                      />
                    </Grid>
                </Grid>
            </Paper>
        </Grid>

      </Grid>
    );
  }
}

export default Dashboard;
