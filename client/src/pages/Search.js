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

class Search extends Component {
  state = {
    search: '',
    books: [],
    searchType: 'book'
  };

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
      books.forEach((book,index) => {
        console.log('book:',book);
        const title = (book.volumeInfo.title) ? (book.volumeInfo.title): ("");
        const image = (book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail) ? (book.volumeInfo.imageLinks.thumbnail): ("");
        const description = (book.volumeInfo.description) ? (book.volumeInfo.description): ("");
        const author = (book.volumeInfo.authors[0]) ? (book.volumeInfo.authors[0]): ("");
        const id = (book.id) ? (book.id): (index + Math.random());
        const link = (book.volumeInfo.infoLink) ? (book.volumeInfo.infoLink) : ("");
        const snippet = (book.searchInfo && book.searchInfo.textSnippet) ? (book.searchInfo.textSnippet): ("");
        bookArray.push({title,snippet,image,description,author,id,link})
      }
        )
      this.setState({
        search: "",
        books: bookArray
      });
      console.log("STATE API", this.state);
  }

  handleClick = e => {
    e.preventDefault();
    const search = this.state.search;
    if(this.state.searchType === 'book') {
      (API.getBooks(search))
      .then(result =>
        this.displayResult(result))
      .catch(err => {
        console.log(err)
      });
    }
   API.getBooksAuthor(search)
   .then(result =>
    this.displayResult(result))
  .catch(err => {
    console.log(err)
  });
  }

  handleSave = (index) => {
    console.log("INDEX", index)
    API.saveBook(this.state.books[index])
    .then(result =>
      console.log(result))
    .catch(err =>
      console.log(err))
  }

  render() {
    const { classes } = this.props;
   console.log(this.state.searchType);
    
    return (
    <div>
    <Grid container spacing={40}>
       <Jumbotron />
       <SearchBar 
        search={this.state.search}
        handleClick={this.handleClick}
        handleChange={this.handleChange}
        searchType={this.searchType}
        />
    </Grid>
    <Grid container className={classes.root} justify="center" spacing={40}>
      <BookList books={this.state.books} handleSave={this.handleSave} />
    </Grid>
   
    </div>
       
    
    );
  }
}

Search.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Search);