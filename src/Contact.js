import React, {useState, useEffect} from 'react';
import {Container, Row, Col, Collapse, Modal, Button, Form} from 'react-bootstrap';
import {MdModeEdit, MdDelete} from 'react-icons/md';
import {GrFormView} from 'react-icons/gr';
import {IoCopyOutline} from 'react-icons/io5';

const Contact = ({name, url, password}) => {
  const [askPassword, setAskPassword] = useState(false);
  const [showPassword, setShowpassword] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');

  function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*()';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  const verifyPassword = () => {
    if(passwordInput === "bmurugan") {
      setShowpassword(true);
      setAskPassword(false)
      setTimeout(() => setShowpassword(false), 60000)
    }
    else {
      alert('Please Check your Clavis Key');
    }
  }

  return (
    <>
      <Modal show={askPassword} onHide={() => setAskPassword(false)} >
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Enter Clavis Key</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Control autocomplete="off" type="password" onChange={event => setPasswordInput(event.target.value)} placeholder="Password" />
              </Form.Group>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="primary" onClick={verifyPassword}>Confirm</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>
      <Container className="passcard" >
        <Row>
          <div className="flex3" >{name}</div>
          <div className="flex1" >{showPassword ? password : "****************"}</div>
          <Row className="flex1 space-around" >
            <Button onClick={() => !showPassword ? setAskPassword(true) : alert('Password Copied')} variant="success">{showPassword ? <IoCopyOutline /> : <GrFormView />}</Button>
            <Button variant="info" onClick={() => alert('Sanda punda la anguttu poi podu da sunni')} ><MdModeEdit /></Button>
            <Button variant="danger"><MdDelete /></Button>
          </Row>
        </Row>
      </Container>
    </>
  )
}

export default Contact;
