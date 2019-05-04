import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const Jumbotron = () => {
    return (
<Grid container>
    <Grid item lg={12}>
        <Paper elevation={10}>
        <Grid container justify="center">
            <Grid item xs={4}>
            <h1>Google Book Search and Save</h1>
            </Grid>
        </Grid>
        </Paper>
    </Grid>
</Grid>      
    );
}


export default Jumbotron;
