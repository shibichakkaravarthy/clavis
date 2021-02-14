import React, {useState, useEffect} from 'react';
import {Button, Container, Row, Col, Modal, Form} from 'react-bootstrap';
import Contact from './Contact';
import Header from './Header';
import FlashMessage from 'react-flash-message'

const Passwords = [
  {
    title: "Gmail",
    url: "gmail.com",
    password: "kj*kFWOYPRzGFi",
  },
  {
    title: "Outlook",
    url: "outlook.com",
    password: "ioe5tfac86upBc",
  },
  {
    title: "Facebook",
    url: "facebook.com",
    password: "iLROYEmtmII9*p",
  },
  {
    title: "Instagram",
    url: "instagram.com",
    password: "!gdr4io*$&86GC",
  },
  {
    title: "Twitter",
    url: "twitter.com",
    password: "zBLjHDQtQGG*G1",
  },
  {
    title: "Tumblr",
    url: "tumblr.com",
    password: "YMqGjlmYPO6qfe",
  },
]

const ContactsScreen = () => {
  const [pignusGenModal, setPignusGenModal] = useState(false);
  const [newKey, setNewKey] = useState('');
  const [searchedPasswords, setSearchedPasswords] = useState(Passwords)
  const [searchTerm, setSearchTerm] = useState('')


  function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*()';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  const openModal = () => {
    setPignusGenModal(true)
    setNewKey(makeid(14))
  }

  useEffect(() => {
    console.log("SEARCH", searchTerm)
    const result = Passwords.filter(key => key.title.toLowerCase().includes(searchTerm.toLowerCase()))
    setSearchedPasswords(result)
  }, [searchTerm])

  return (
    <>
      <Header onSearch={setSearchTerm} />
      <Modal show={pignusGenModal} onHide={() => setPignusGenModal(false)} >
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Generate New Password</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Control autocomplete="off" type="text" placeholder="Website Title" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Control autocomplete="off" type="text" placeholder="Website URL" />
              </Form.Group>
              <Form.Text className="text-muted">
                Clavis Key: {newKey}
              </Form.Text>
            </Form>
          </Modal.Body>

          <Modal.Footer>
          <Button variant="primary" onClick={() => setNewKey(makeid(14))} >New Key</Button>
          <Button variant="primary">Save</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>
      <Container>
        <Row></Row>
        <Row>
          <Col>
            {
              searchedPasswords.map(row => <Contact name={row.title} url={row.url} password={row.password} />)
            }
          </Col>
        </Row>
        <Button variant="primary" onClick={openModal} >Generate New Key</Button>
      </Container>
    </>
  )
}

export default ContactsScreen;
