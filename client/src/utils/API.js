import axios from 'axios';

export default {
    getBooks: function (search) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyDL5UOZPeGCE18MiMTLJFxvF_bIUxmpTzY`)
    },
    getBooksAuthor: function(search) {
        return axios.get(` https://www.googleapis.com/books/v1/volumes?q=inauthor:${search}&key=AIzaSyDL5UOZPeGCE18MiMTLJFxvF_bIUxmpTzY`)
    },
    getAllSaved: function() {
        return axios.get("/")
    },
    removeSaved: function(id) {
        return axios.delete(`/${id}`)
    },
    saveBook: function(book) {
        return axios.post('/',book)
    }
}
