import React, {useContext} from 'react';
import { BookContext } from '../../context/BookContext';
// import { NotificationContext } from '../../context/Notification';

const BookDetails = ({ book }) => {
    const { docClient, dispatchBook } = useContext(BookContext);
    // const { dispatchNotification } = useContext(NotificationContext);

    const removeItem = () => {
        const params = {
            TableName: 'reading-list',
            Key:{
                "ID": book.ID
            }
        };
        docClient.delete(params, function(err, data) {
            if (err) {
                console.error("Unable to delete item. Error JSON:", JSON.stringify(err, null, 2));
            } else {
                console.log("Delete Item Succeeded:", JSON.stringify(data, null, 2));
                dispatchBook({type: 'REMOVE_BOOK', ID: book.ID});
            }
        })
        // dispatchNotification({ type: 'SUCCESS', message: 'Successfully removed!' })
    }
    return (
        <li onClick={removeItem}>
            <div className="title">{ book.Title }</div>
            <div className="author">{ book.Author }</div>
        </li>
    );
}
 
export default BookDetails;