import React, { createContext, useReducer, useEffect } from 'react';
import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, dispatchBook] = useReducer(bookReducer, [], () => {
        const localData = localStorage.getItem('books');
        return localData ? JSON.parse(localData) : []        // set default value from localstorage data
    });
    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books))
    }, [books]);

    return (
        <BookContext.Provider value={{books, dispatchBook}}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;