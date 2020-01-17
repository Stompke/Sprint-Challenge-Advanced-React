import React, { useState, useEffect } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useDarkMode } from '../hooks/useDarkMode';

const useStyles = makeStyles({
    card: {
      minWidth: 275,
      margin: '10px',
      background: '#ccc'
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

const Players = props => {
    const [darkMode, setDarkMode ] = useDarkMode(true);


    const clickHandler = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    }



    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;


    


  
    return(
        <div className='cardContainer'>
            <button className="darkModeSwitch" onClick={clickHandler}>Dark Mode Switch</button>
            {props.data.map(item =>  
                
                    <Card key={item.id} className={classes.card}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Search Popularity
                        </Typography>
                        <Typography variant="h5" component="h2">
                        {item.name}
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                        {item.country}
                        </Typography>
                        <Typography variant="body2" component="p">
                        Search Queries: {item.searches}
                        </Typography>
                    </CardContent>
                    {/* <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions> */}
                    </Card>
                )}

        </div>
    )
}

export default Players;