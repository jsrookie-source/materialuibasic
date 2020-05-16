import React from 'react';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Paper, CardActionArea } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/styles';

   const styles = makeStyles(()=>({
    root: {
        maxWidth: 755,
      },
    media: {
        height: 3,
        paddingTop: '56.25%', // 16:9
      },
      avatar: {
        backgroundColor:'green'
      },
   }))


const CoffeeCard = () => {
const classes = styles()
    return ( 
        <>
        <p>item</p>
        <Paper elevation='20'>
        <Card className={classes.root}>
        <CardActionArea>    
       <CardHeader  avatar={
          <Avatar aria-label="recipe" className={classes.avatar} >
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <ShareIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016" />  
       <CardMedia className={classes.media} image='https://media.gettyimages.com/photos/nairobi-kenya-looking-over-the-park-towards-the-busy-kenyatta-avenue-picture-id517003864?s=612x612' title="Cool Pictures"/>
       <CardContent>
       <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
           </CardContent>  
           </CardActionArea>
           <CardActions>
           <IconButton aria-label="add to favorites">
          <FavoriteIcon color='secondary'/>
        </IconButton> 
        <Button size="small" color="primary">
          Buy Now
        </Button>  
        <Button size="small" color="secondary">
          Learn More
        </Button>  
               </CardActions> 
        </Card>
        </Paper>
        </>
     );
}
 
export default CoffeeCard;