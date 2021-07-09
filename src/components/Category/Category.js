import React from 'react';
import styles from './Category.module.css';
import { ButtonGroup, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Category = () => {
  const history = useHistory();
  const goTo = (link) => () => history.push(`/list/${link}`);
  return (
    <ButtonGroup className={styles.full} vertical>
      <Button onClick={goTo('griffindor')} variant='griffindor'>
        Griffindor
      </Button>
      <Button onClick={goTo('hufflepuff')} variant='hufflepuff'>
        Hufflepuff
      </Button>
      <Button onClick={goTo('slytherin')} variant='slytherin'>
        Slytherin
      </Button>
      <Button onClick={goTo('ravenclaw')} variant='ravenclaw'>
        Ravenclaw
      </Button>
    </ButtonGroup>
  );
};

export default Category;
