import React, {useState, useEfect} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import purple from '@material-ui/core/colors/purple';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';

const styles = theme => ({
    colorSwitchBase: {
      color: purple[300],
      '&$colorChecked': {
        color: purple[500],
        '& + $colorBar': {
          backgroundColor: purple[500],
        },
      },
    },
    colorBar: {},
    colorChecked: {},
    iOSSwitchBase: {
      '&$iOSChecked': {
        color: theme.palette.common.white,
        '& + $iOSBar': {
          backgroundColor: '#52d869',
        },
      },
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
        easing: theme.transitions.easing.sharp,
      }),
    }
});

const SearchBar =(props)=> {
    const [state, setSwitch] = useState({
      checkedA: false
    })
    
    const handleSwitch = name => event => {
        setSwitch({ [name]: event.target.checked });
        event.target.checked ? props.searchType('author') : props.searchType('book')
      };
      const {handleClick, handleChange, search, classes } = props
    return (
      
    <Grid item lg={12}>
        <Grid container className="search-bar" justify="center" spacing={40}>
            <Grid item xs={6} >
                <Paper className="search-area" elevation={2} >
                    <Grid container justify="center">
                        <Grid item xs={6}>
                            <Input 
                                placeholder={state.checkedA ? ("Authors Name"): ("Book Title")}
                                value={search}
                                name="search"
                                onChange={(e)=> handleChange(e)}
                            />
                            <FormGroup row>
                                <FormControlLabel
                                control={
                                    <Switch
                                    checked={state.checkedA}
                                    onChange={
                                      handleSwitch('checkedA')
                                      }
                                    value="checkedA"
                                    classes={{
                                        switchBase: classes.colorSwitchBase,
                                        checked: classes.colorChecked,
                                        bar: classes.colorBar,
                                    }}
                                    />
                                }
                                label={state.checkedA ? ("Author"): ("Title")}
                                />
                            </FormGroup>
                        </Grid>
                        <Grid item xs={6}>
                        <Button
                            onClick={handleClick}
                        > Search</Button>
                        </Grid>
                    </Grid>
                 </Paper>
            </Grid>
        </Grid>
    </Grid>
    )
    }



export default withStyles(styles)(SearchBar);