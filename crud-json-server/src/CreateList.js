import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function CreateList(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    props.clearForm();
    setShow(false);
  };

  const handleShow = () => setShow(true);

  return (
    <React.Fragment>
      <Button variant="primary" onClick={handleShow}>
        Add Book
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Book</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <label>Book Title</label>
          <input
            type="text"
            name="title"
            value={props.singledata.title}
            onChange={props.handleChange}
            className="form-control mb-3"
          />

          <label>Author</label>
          <input
            type="text"
            name="author"
            value={props.singledata.author}
            onChange={props.handleChange}
            className="form-control mb-3"
          />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={() => {
            props.createList();
            setShow(false);
          }}>
            Save
          </Button>

          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}

export default CreateList;