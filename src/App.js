import React from 'react';
import BookContextProvider from './context/BookContext';
import NotificationContextProvider from './context/Notification';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import NewBookForm from './components/BookForm';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <NotificationContextProvider>
          <BookList />
          <NewBookForm />
        </NotificationContextProvider>
      </BookContextProvider>
    </div>
  );
}

export default App;
