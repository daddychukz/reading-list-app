import React, { useContext, useState } from 'react';
import { BookContext } from '../../context/BookContext';
import { NotificationContext } from '../../context/Notification';
import { Form, Button } from 'react-bootstrap';
import AddTodoModal from '../modal/Modal';

const NewBookForm = () => {
    const { dispatchBook } = useContext(BookContext);
    const { dispatchNotification } = useContext(NotificationContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [show, setShow] = useState(false);
    const handleSubmit = (e) => {
        if (title && author) {
            dispatchBook({type: 'ADD_BOOK', book: {
                title,
                author
            }});
            dispatchNotification({ type: 'SUCCESS', message: 'Successfully added!' })
            setShow(false)
            setTitle('');
            setAuthor('');
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
                title={title}
                setTitle={setTitle}
                author={author}
                setAuthor={setAuthor}
                handleSubmit={handleSubmit}
            /> : null}
        </>
    );
}
 
export default NewBookForm;