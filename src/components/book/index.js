import React from 'react';
import BookForm from './BookForm';
import BookList from './BookList';
import Heading from './Heading';
import BookContextProvider from '../../context/BookContext';

const BookPage = () => {
    return (
        <div className="App">
            <BookContextProvider>
                <Heading />
                <BookList />
                <BookForm />
            </BookContextProvider>
        </div>
    );
}
 
export default BookPage;