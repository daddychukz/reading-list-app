import React from 'react';
import BookForm from './BookForm';
import BookList from './BookList';
import Heading from './Heading';
import BookContextProvider from '../../context/BookContext';

const BookPage = () => {
    return (
        <BookContextProvider>
            <Heading />
            <BookList />
            <BookForm />
        </BookContextProvider>
    );
}
 
export default BookPage;