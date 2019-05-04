import React from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
});

function BookSection (props) {
    const { classes, title, image, link, index, author, description} = props;
  return (
<Grid item xs={6}>
    {/* <ListItem alignItems="flex-start"> */}
        <Paper elevation={3}>
            <Grid container className="title-buttons"  spacing={16}>
                        <Grid item xs={6} >
                            <h3>{title}</h3>
                            <h4>{author}</h4>
                        </Grid>
                        <Grid item xs={6} >
                            <Grid container alignContent="flex-end">
                                <Button color="primary" id={index} >Save</Button>
                                <Button href={link} color="primary">View</Button>
                            </Grid>
                        </Grid>
                </Grid>
                <Grid container className="pic-desc" alignContent="center">
                    <Grid item xs={6} >
                        <img src={image} alt="cover"/>
                    </Grid>
                    <Grid item xs={6} >
                        <Typography>
                            {description}
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        {/* </ListItem> */}
    </Grid>
    
    
  );
}

// BookSection.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(BookSection);



