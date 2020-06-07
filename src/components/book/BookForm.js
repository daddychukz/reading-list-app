import React, { useContext, useState } from 'react';
import { BookContext } from '../../context/BookContext';
import { NotificationContext } from '../../context/Notification';
import { Form, Button } from 'react-bootstrap';
import AddTodoModal from '../modal/Modal';

const NewBookForm = () => {
    const { docClient, dispatchBook } = useContext(BookContext);
    const { dispatchNotification } = useContext(NotificationContext);
    const [book, setBook] = useState({
        Title: '',
        Author: '',
        ID: Math.random().toString(36).substr(2, 5)
    })
    const [show, setShow] = useState(false);
    const handleSubmit = (e) => {
        if (book.Title && book.Author) {
            const params = {
                TableName: 'reading-list',
                Item:{
                    "ID": Math.random().toString(36).substr(2, 5),
                    "Author": book.Author,
                    "Title": book.Title,
                }
            };
            docClient.put(params, function(err, data) {
                if (err) {
                    console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
                } else {
                    console.log("Added item:", JSON.stringify(data, null, 2));
                    dispatchBook({type: 'ADD_BOOK', book});
                }
            })
            setShow(false)
            setBook({
                Title: '',
                Author: '',
                ID: Math.random().toString(36).substr(2, 5)
            });
            // dispatchNotification({ type: 'SUCCESS', message: 'Successfully added!' })
        } else {
            dispatchNotification({ type: 'ERROR', message: 'Invalid input field' })
        }
    }
    return (
        <>
            <Form>
                <Button variant="dark" onClick={() => setShow(true)}>
                    Add Book
                </Button>
            </Form>
            { show ? 
            <AddTodoModal
                open={true}
                handleClose={() => setShow(false)}
                book={book}
                setBook={setBook}
                handleSubmit={handleSubmit}
            /> : null}
        </>
    );
}
 
export default NewBookForm;