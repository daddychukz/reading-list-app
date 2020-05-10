import React from 'react';
import BookForm from './BookForm';
import BookList from './BookList';
import Navbar from './Navbar';
import BookContextProvider from '../../context/BookContext';

const BookPage = () => {
    return (
        <BookContextProvider>
            <Navbar />
            <BookList />
            <BookForm />
        </BookContextProvider>
    );
}
 
export default BookPage;