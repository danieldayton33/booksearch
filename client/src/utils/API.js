import axios from 'axios';

export default {
    getBooks: function (search) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyDL5UOZPeGCE18MiMTLJFxvF_bIUxmpTzY`)
    },
    getBooksAuthor: function(search) {
        return axios.get(` https://www.googleapis.com/books/v1/volumes?q=inauthor:${search}&key=AIzaSyDL5UOZPeGCE18MiMTLJFxvF_bIUxmpTzY`)
    },
    getAllSaved: function() {
        return axios.get("/api/books")
    },
    removeSaved: function(id) {
        return axios.delete(`/api/books/${id}`)
    },
    saveBook: function(book) {
        return axios.post('/api/books',book)
    }
}
