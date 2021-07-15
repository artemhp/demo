import React from 'react';
import styles from './Order.module.css';
import { useFormik } from 'formik';
import { Jumbotron, Form, Button } from 'react-bootstrap';

const Order = () => {
  const formik = useFormik({
    initialValues: { message: '', name: '' },
    validate: (values) => {
      let errors = {};
      if (!values.name) errors.name = 'Required';
      if (!values.message) errors.message = 'Required';
      return errors;
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className={styles.Order}>
      <Jumbotron style={{ textAlign: 'center' }}>
        <p>Lorem, ipsum dolor.</p>
        <h1>Lorem.</h1>
        <p>Lorem ipsum dolor sit.</p>
      </Jumbotron>
      <Form className='m-3' onSubmit={formik.handleSubmit}>
        <Form.Group controlId='formBasicName'>
          <Form.Label>Your Name:</Form.Label>
          <Form.Control isInvalid={formik.errors.name} onChange={formik.handleChange} name='name' type='text' placeholder='Harry Potter' />
          {formik.errors.name && <Form.Control.Feedback type='invalid'>{formik.errors.name}</Form.Control.Feedback>}
        </Form.Group>
        <Form.Group controlId='formBasicPhone'>
          <Form.Label>Message:</Form.Label>
          <Form.Control isInvalid={formik.errors.message} onChange={formik.handleChange} name='message' as='textarea' placeholder='Hello, Harry!' rows={3} />
          {formik.errors.message && <Form.Control.Feedback type='invalid'>{formik.errors.message}</Form.Control.Feedback>}
        </Form.Group>
        <Button block size='lg' variant='success' type='submit'>
          Send
        </Button>
      </Form>
    </div>
  );
};

export default Order;
