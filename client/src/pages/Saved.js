import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Jumbotron from '../components/JumboTron';
import BookList from "../components/BookList";
import SearchBar from '../components/SearchBar';
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
    search: '',
    books: [],
    searchType: 'book'
  };
  componentDidMount () {
    API.getAllSaved({})
    .then(result => {
      this.displayResult(result)
    })
    .catch(err => {
      console.log(err);
    })
  }
  searchType = (type) => {
    this.setState({searchType: type})
  }
  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({
      [name]: value,
    });
  };
  displayResult = (result) => {
    console.log(result);
      const books = result.data.items
      const bookArray = []
      books.forEach(book => {
        console.log('book:',book);
        const title = (book.volumeInfo.title) ? (book.volumeInfo.title): ("");
        const image = (book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail) ? (book.volumeInfo.imageLinks.thumbnail): ("");
        const description = (book.volumeInfo.description) ? (book.volumeInfo.description): ("");
        const author = (book.volumeInfo.authors[0]) ? (book.volumeInfo.authors[0]): ("");
        const category = (book.volumeInfo.category) ? (book.volumeInfo.category): ("");
        const link = (book.volumeInfo.infoLink) ? (book.volumeInfo.infoLink) : ("");
        const snippet = (book.searchInfo && book.searchInfo.textSnippet) ? (book.searchInfo.textSnippet): ("");
        bookArray.push({title,snippet,image,description,author,category,link})
      }
        )
      this.setState({
        search: "",
        books: bookArray
      });
      console.log("STATE API", this.state);
  }


  handleUnSave = (id) => {

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
      <BookList books={this.state.books} />
    </Grid>
   
    </div>
       
    
    );
  }
}

Saved.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Saved);