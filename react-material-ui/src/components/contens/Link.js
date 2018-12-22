import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';



const styles = {
  card: {
    maxWidth: 200,
  },
  media: {
    height: 200,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
};

function MediaCard(props) {
  const { classes } = props;
  return (
    <div>
         <div>      
        <Card className={classes.card}>
        <GridList></GridList>
        <CardActionArea>
            <CardMedia
            className={classes.media}
            image="http://evolver.fm/wp-content/uploads/2013/05/downloadify.jpg"
            float='flow'
            />
            <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
                Download Musik.
            </Typography>
            <Typography component="p">
                Dengar di mana saja.
            </Typography>
            </CardContent>
        </CardActionArea>
        </Card>
        </div>
        <div>      
        <Card className={classes.card}>
        <CardActionArea>
            <CardMedia
            className={classes.media}
            image="http://evolver.fm/wp-content/uploads/2013/05/downloadify.jpg"
            float='flow'
            />
            <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
                Dengarkan tanpa iklan.
            </Typography>
            <Typography component="p">
                Nikmati musik tanpa henti.
            </Typography>
            </CardContent>
        </CardActionArea>
         </Card>
        </div>
        <div>      
        <Card className={classes.card}>
        <CardActionArea>
            <CardMedia
            className={classes.media}
            image="http://evolver.fm/wp-content/uploads/2013/05/downloadify.jpg"
            float='flow'
            />
            <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
                Mainkan lagu apa saja.
            </Typography>
            <Typography component="p">
                Bahkan di ponsel.
            </Typography>
            </CardContent>
        </CardActionArea>
         </Card>
        </div>
        <div>      
        <Card className={classes.card}>
        <CardActionArea>
            <CardMedia
            className={classes.media}
            image="http://evolver.fm/wp-content/uploads/2013/05/downloadify.jpg"
            float='flow'
            />
            <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
                Lewati tanpa batas.
            </Typography>
            <Typography component="p">
                Cukup tekan next.
            </Typography>
            </CardContent>
        </CardActionArea>
         </Card>
        </div>

    </div>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);