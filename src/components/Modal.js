import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const AddTodoModal = ({ open, handleClose, title, setTitle, author, setAuthor, handleSubmit }) => {
    
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
                        <Form.Control type="text" placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" placeholder="description" value={author} onChange={(e) => setAuthor(e.target.value)} />
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