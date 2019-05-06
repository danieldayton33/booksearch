import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';


const styles = theme => ({
  root: {
      flexGrow: 1
  },
  card: {
    maxWidth: 300,
  },
  media: {
    height: 0,
    width:100,
    paddingTop: '56.25%', // 16:9
    marginLeft: 100
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

const BookCard = ({classes, title, image, link, index, snippet, author, description, handleSave}) => {
 const[state, handleClose]  = useState({ 
    expanded: false,
    open: false
   });

  const handleExpandClick = () => {
    handleClose(state => ({ ...state, expanded: !state.expanded }));
  };

  const handleCloseSnackBar = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      handleClose({ ...state, open: !state.open });
    };

  const handleSaveSnackBar = (index) => {
    handleSave(index);
    handleClose(state => ({...state, open: !state.open}))
  }
    return (
      <div>
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              {title.charAt(0)}
            </Avatar>
          }
          action={
            <IconButton  linkButton={true} href={link}>
              <MoreVertIcon />
            </IconButton>
          }
          title={title}
          subheader={author}
        />
        <CardMedia
          className={classes.media}
          image={image}
          title="Thumbnail"
        />
        <CardContent>
            <Typography component="p">
           {snippet}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add to favorites" onClick={()=> handleSaveSnackBar(index)}>
            <FavoriteIcon />
          </IconButton>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: state.expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Description:</Typography>
            <Typography paragraph>
              {description}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={state.open}
          autoHideDuration={6000}
          onClose={handleCloseSnackBar}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{(window.location.pathname === "/saved") ? (`"${title}" Unsaved`) : (`"${title}" Saved`)}</span>}
          action={[
            <Button key="undo" color="secondary" size="small" onClick={handleCloseSnackBar}>
              UNDO
            </Button>,
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={handleCloseSnackBar}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
        </div>
    );
}

Card.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(BookCard);