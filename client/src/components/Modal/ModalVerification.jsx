import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalVerification(props) { //Source: https://react-bootstrap.github.io/components/modal/

  const handleYesButton = () => {
    props.setShowModal(false);
    if (props.hasOwnProperty('functionYes')) {
      props.functionYes();
    }
  }

  const handleNoButton = () => {
    props.setShowModal(false);
    if (props.hasOwnProperty('functionNo')) {
      props.functionNo();
    }
  };

  return (
    <>
      <Modal show={props.showModal} onHide={handleNoButton} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title || "Modal title"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.text || "Modal text"}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleNoButton}>
            {props.buttonNoText || "No"}
          </Button>
          <Button variant="primary" onClick={handleYesButton}>
            {props.buttonYesText || "Yes"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalVerification;
