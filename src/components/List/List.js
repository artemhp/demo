import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import { ListGroup, Button, Image, Alert, Spinner } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';

const List = () => {
  const { category } = useParams();
  const history = useHistory();
  const goTo = (link) => () => history.push(`/order/${link}`);
  const { isLoading, data, isError } = useQuery(`getList${category}`, () =>
    axios.get(`/list?house=${category}`).then(({ data }) => data)
  );
  if (isError) return <Alert variant='danger'>Something went wrong</Alert>;
  if (isLoading) return <Spinner className='m-2' animation='border' />;
  return (
    <div className='m-2'>
      <Button
        size='lg'
        variant={category}
        style={{ textTransform: 'capitalize' }}
        block
        className='mb-2'
      >
        {category}
      </Button>
      {data && <Alert variant='info'>No students</Alert>}
      <ListGroup>
        {data.map(({ name, distance, id }) => (
          <ListGroup.Item
            className='d-flex align-items-center'
            onClick={goTo(id)}
          >
            <Image
              className='float-left mr-3'
              width='50'
              src={`/images/logo-${category}.png`}
            />
            <div className='flex-fill'>{name}</div>
            <span className='float-right text-muted'>{distance} </span>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default List;
