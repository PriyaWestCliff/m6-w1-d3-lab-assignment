import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function UpdateList(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  return (
    <React.Fragment>
      <Button
        variant="info"
        onClick={(event) => {
          setShow(true);
          props.getList(event, props.elementId);
        }}
      >
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Book</Modal.Title>
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
          <Button
            variant="primary"
            onClick={(event) => {
              props.updateList(event, props.elementId);
              setShow(false);
            }}
          >
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

export default UpdateList;