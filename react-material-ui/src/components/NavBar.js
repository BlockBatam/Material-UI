import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from'@material-ui/core/Button'


export default props => {
    return (
        <AppBar position="static" style={{ backgroundColor: 'red' }}>
          <Toolbar>
              <Grid
                justify = "space-between"
                container 
                spacing = {32}
                >
                <Grid Item xs={6}>
                    <Typography variant="h3" color="inherit">
                       Spotify
                    </Typography>
                </Grid>

                <Grid Item xs={3}>
                    <div>
                        <Button color="inherit">Premium</Button>
                        <Button color="inherit">Bantuan</Button>
                        <Button color="inherit">Download</Button>
                        <Button color="inherit">Daftar</Button>
                        <Button color="inherit">Masuk</Button>
                    </div>
                </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
    );
  }
 