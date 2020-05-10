import React, {useContext} from 'react';
import { BookContext } from '../../context/BookContext';

const Heading = () => {
    const { books } = useContext(BookContext);
    return (
        <div className="navbar-main text-center">
            <h1>Crystal Reading List</h1>
            <p>Currently you have {books.length} books to get through...</p>
        </div>
    );
}
 
export default Heading;