import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import API from '../utils/API';
import BookSection from './BookSection'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import BookCard from '../components/Card';

const BookList = ({books, handleSave}) => {
    return (
          <Grid item xs={12}>
            <Grid container className="book-list" justify="center" spacing={16}>
              {(books.length > 1) ? (books.map((book, index) => (
                   <Grid item xs={3}>
                    <BookCard 
                      title = {book.title}
                      image = {book.image || "https://via.placeholder.com/200"}
                      description = {book.description || "No descrpition Available"}
                      link = {book.link}
                      index ={index}
                      author = {book.author}
                      key={index}
                      category = {book.category}
                      snippet={book.snippet}
                      handleSave={handleSave}
                    />
                    </Grid>
                ))) : (<Paper>Search for a Book</Paper>)}
            </Grid>
        </Grid>
    )
}

export default BookList;