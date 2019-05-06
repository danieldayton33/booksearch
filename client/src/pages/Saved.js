import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Jumbotron from '../components/JumboTron';
import BookList from "../components/BookList";
import API from '../utils/API';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

class Saved extends Component {
  state = {
    books: [],
  };
  componentDidMount () {
   this.getBooks()
  }
 
  getBooks = () => {
    API.getAllSaved({})
    .then(result => {
      console.log("RESULT", result)
      this.displayResult(result)
    })
    .catch(err => {
      console.log(err);
    })
  }

  displayResult = (result) => {
    console.log(result);
      const books = result.data
      const bookArray = []
      books.forEach(book => {
        console.log('book:',book);
        const title = (book.title) ? (book.title): ("");
        const image = (book.image) ? (book.image): ("");
        const description = (book.description) ? (book.description): ("");
        const author = (book.author) ? (book.author): ("");
        const id = (book._id) ? (book._id): ("");
        const link = (book.link) ? (book.link) : ("");
        const snippet = (book.snippet) ? (book.snippet): ("");
        bookArray.push({title,snippet,image,description,author,id,link})
      }
        )
      this.setState({
        books: bookArray
      });
      console.log("STATE API", this.state);
  }


  handleSave = (index) => {
    console.log("INDEX", index)
    API.removeSaved(this.state.books[index].id)
    .then(result => {
      console.log(result)
      this.getBooks();
    })
    .catch(err => console.log(err))
  }

  render() {
    const { classes } = this.props;
   console.log(this.state.searchType);
    
    return (
    <div>
    <Grid container spacing={40}>
       <Jumbotron />
    </Grid>
    <Grid container className={classes.root} justify="center" spacing={40}>
      <BookList books={this.state.books} handleSave={this.handleSave} />
    </Grid>
   
    </div>
       
    
    );
  }
}

Saved.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Saved);