import React from 'react';
import styles from './Category.module.css';
import { ButtonGroup, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Category = () => {
  const history = useHistory();
  const goTo = (link) => () => history.push(`/list/${link}`);
  return (
    <ButtonGroup className={styles.full} vertical>
      <Button onClick={goTo('gryffindor')} size='lg' variant='gryffindor'>
        Gryffindor
      </Button>
      <Button onClick={goTo('hufflepuff')} size='lg' variant='hufflepuff'>
        Hufflepuff
      </Button>
      <Button onClick={goTo('slytherin')} size='lg' variant='slytherin'>
        Slytherin
      </Button>
      <Button onClick={goTo('ravenclaw')} size='lg' variant='ravenclaw'>
        Ravenclaw
      </Button>
    </ButtonGroup>
  );
};

export default Category;
