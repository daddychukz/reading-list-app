import React from 'react';
import BookForm from './BookForm';
import BookList from './BookList';
import Navbar from './Navbar';
import BookContextProvider from '../../context/BookContext';
import NotificationContextProvider from '../../context/Notification';

const BookPage = () => {
    return (
        <BookContextProvider>
          <Navbar />
          <NotificationContextProvider>
            <BookList />
            <BookForm />
          </NotificationContextProvider>
        </BookContextProvider>
    );
}
 
export default BookPage;