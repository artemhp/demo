import React from 'react';
import styles from './Order.module.css';
import { Jumbotron, Form, Button } from 'react-bootstrap';

const Order = () => {
  return (
    <div className={styles.Order}>
      <Jumbotron style={{ textAlign: 'center' }}>
        <p>Lorem, ipsum dolor.</p>
        <h1>Lorem.</h1>
        <p>Lorem ipsum dolor sit.</p>
      </Jumbotron>
      <Form className='m-3'>
        <Form.Group>
          <Form.Label>Your Name:</Form.Label>
          <Form.Control type='text' placeholder='Harry Potter' />
        </Form.Group>
        <Form.Group>
          <Form.Label>Message:</Form.Label>
          <Form.Control as='textarea' placeholder='Hello, Harry!' rows={3} />
        </Form.Group>
        <Button block size='lg' variant='success' type='submit'>
          Send
        </Button>
      </Form>
    </div>
  );
};

export default Order;
