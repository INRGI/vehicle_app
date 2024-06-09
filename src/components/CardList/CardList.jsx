import { useEffect } from 'react';

import { getCampers } from '../../redux/slices/campersSlice';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../Card/Card';
import { Container } from './CardList.styled';


const CardList = () => {
  const { data } = useSelector(state => state.campers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCampers());
  }, [dispatch]);

  return (
    <Container>
      {data.map(camper => (
        <Card key={camper._id} camper={camper}/>
      ))}
    </Container>
  );
};

export default CardList;
