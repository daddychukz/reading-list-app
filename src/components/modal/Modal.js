import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const AddTodoModal = ({ open, handleClose, book, setBook, handleSubmit }) => {
    
    return (
      <>
        <Modal show={open} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Add Book</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="title" 
                            value={book.title} 
                            onChange={(e) => setBook({...book, Title: e.target.value})} 
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Author</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="author" 
                            value={book.author} 
                            onChange={(e) => setBook({...book, Author: e.target.value})} 
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="primary" onClick={handleSubmit}>
                Save
            </Button>
            </Modal.Footer>
        </Modal>
      </>
    );
  }
  
export default AddTodoModal;