import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function DeleteList(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  return (
    <React.Fragment>
      <Button
        variant="warning"
        onClick={(event) => {
          setShow(true);
          props.getList(event, props.elementId);
        }}
      >
        Delete
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Book</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <label>Book Title</label>
          <input
            type="text"
            value={props.singledata.title}
            disabled
            className="form-control mb-3"
          />

          <label>Author</label>
          <input
            type="text"
            value={props.singledata.author}
            disabled
            className="form-control mb-3"
          />
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="primary"
            onClick={(event) => {
              props.deleteList(event, props.elementId);
              setShow(false);
            }}
          >
            Delete
          </Button>

          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}

export default DeleteList;