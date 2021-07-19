import React from 'react';
import styles from './Order.module.css';
import { useFormik } from 'formik';
import axios from 'axios';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {
  Jumbotron,
  Form,
  Button,
  Spinner,
  Alert,
  ButtonGroup,
} from 'react-bootstrap';

const Order = () => {
  const { id } = useParams();
  const { isLoading, data, isError } = useQuery('getOrder', () => {
    return axios.get(`/api/list?id=${id}`).then(({ data }) => data[0]);
  });
  const formik = useFormik({
    initialValues: { message: '', name: '' },
    validate: (values) => {
      let errors = {};
      if (!values.name) errors.name = 'Required';
      if (!values.message) errors.message = 'Required';
      return errors;
    },
    onSubmit: (values, { resetForm, setStatus }) => {
      resetForm({ values: '' });
      setStatus('submitted');
    },
  });

  if (isError) return <Alert variant='danger'>Something went wrong</Alert>;
  if (isLoading) return <Spinner className='m-2' animation='border' />;
  return (
    <div className={styles.Order}>
      <Jumbotron style={{ textAlign: 'center' }}>
        <p>Send an owl to</p>
        <h3>{data.name}</h3>
        <p>
          from {data.house}, <br /> that in {data.distance} from here.
        </p>
      </Jumbotron>
      {formik.status === 'submitted' && (
        <div className='mt-n5'>
          <Alert className='text-center' variant='success'>
            <Alert.Heading>Congratulation!</Alert.Heading>
            <p>Your owl is on the way to {data.name}</p>
          </Alert>
        </div>
      )}
      <Form className='m-3' onSubmit={formik.handleSubmit}>
        <Form.Group controlId='formBasicName'>
          <Form.Label>Your Name:</Form.Label>
          <Form.Control
            isInvalid={formik.errors.name}
            value={formik.values.name}
            onChange={formik.handleChange}
            name='name'
            type='text'
            placeholder='Harry Potter'
          />
          {formik.errors.name && (
            <Form.Control.Feedback type='invalid'>
              {formik.errors.name}
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <Form.Group controlId='formBasicPhone'>
          <Form.Label>Message:</Form.Label>
          <Form.Control
            isInvalid={formik.errors.message}
            value={formik.values.message}
            onChange={formik.handleChange}
            name='message'
            as='textarea'
            placeholder='Hello, Harry!'
            rows={3}
          />
          {formik.errors.message && (
            <Form.Control.Feedback type='invalid'>
              {formik.errors.message}
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <Button block size='lg' variant={data.house} type='submit'>
          Send
        </Button>
      </Form>
      <div className='m-3'>
        <ButtonGroup className='w-100'>
          <Link to='/'>
            <Button variant='light'>Back to all Houses</Button>
          </Link>
          <Link to={`/list/${data.house}`} className='flex-fill'>
            <Button block variant='light'>
              Back to <strong>{data.house}</strong>
            </Button>
          </Link>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default Order;
