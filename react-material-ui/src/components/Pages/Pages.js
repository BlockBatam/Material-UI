import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
  root: {
    marginTop:32,
    marginLeft:20,   
    float: 'flow',
    position: 'default',
    zIndex: 0,
    width: 1000,
    backgroundColor: 'red',
    FontColor:'red',
  
  },
   });

function PaperSheet(props) {
  const { classes } = props;

  return (
    <div>
      <div>
      <Paper className={classes.root} elevation={100}>
        <Typography variant="h1" component="primary">
          Dapatkan 3 bulan Premiun seharga Rp 4990.
        </Typography>
        <Typography variant="h4">
        Hanya Rp 49990/bulan setelahnya. Batalkan kapan saja.
        Penawaran berakhir tanggal 31 Desember 2018.
        </Typography>
      </Paper>
      </div>
      <div>
        <Typography variant="h7" align='center'>
        Penawaran tidak tersedia bagi pengguna yang pernah mencoba Premium. Penawaran berakhir pada 31 Des 18. Persyaratan berlaku.
        </Typography>
        
      </div>
    </div>
  );
}


PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);