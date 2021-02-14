import React from 'react';
import {Container, Row, Col, Form} from  'react-bootstrap';

export default () => {
  return (
    <Container className="header" >
      <Row>
        <Col>
          <h1 className="app-heading" >Clavis 0.1</h1>
        </Col>
        <Col xs={3} style={{padding: '15px'}} >
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Search" />
            </Form.Group>
            </Form>
        </Col>
      </Row>
    </Container>
  )
}
