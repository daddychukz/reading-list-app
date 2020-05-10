import React, {useContext} from 'react';
import { BookContext } from '../../context/BookContext';
import { NotificationContext } from '../../context/Notification';

const BookDetails = ({ book }) => {
    const { dispatchBook } = useContext(BookContext);
    const { dispatchNotification } = useContext(NotificationContext);
    return (
        <li onClick={() => {
            dispatchBook({type: 'REMOVE_BOOK', id: book.id})
            dispatchNotification({ type: 'SUCCESS', message: 'Successfully removed!' })
        }}>
            <div className="title">{ book.title }</div>
            <div className="author">{ book.author }</div>
        </li>
    );
}
 
export default BookDetails;