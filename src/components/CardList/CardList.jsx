import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCampers } from '../../redux/slices/campersSlice';
import Card from '../Card/Card';
import { Container, LoadMoreButton } from './CardList.styled';

const CardList = () => {
  const { filteredData } = useSelector(state => state.campers);
  const dispatch = useDispatch();
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    dispatch(getCampers());
  }, [dispatch]);

  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 4);
  };

  return (
    <Container>
      {filteredData.slice(0, visibleCount).map(camper => (
        <Card key={camper._id} camper={camper} />
      ))}
      {visibleCount < filteredData.length && (
        <LoadMoreButton onClick={handleLoadMore}>Load More</LoadMoreButton>
      )}
    </Container>
  );
};

export default CardList;
