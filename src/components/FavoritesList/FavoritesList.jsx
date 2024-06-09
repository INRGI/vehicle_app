import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCampers } from '../../redux/slices/campersSlice';
import Card from '../Card/Card';
import { Container, LoadMoreButton, NoFavoritesMessage } from './FavoritesList.styled';

const FavoritesList = () => {
  const { data, favorites } = useSelector(state => state.campers);
  const dispatch = useDispatch();
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    dispatch(getCampers());
  }, [dispatch]);

  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 4);
  };

  const favoriteCampers = data.filter(camper => favorites.includes(camper._id));

  return (
    <Container>
      {favoriteCampers.length > 0 ? (
        <>
          {favoriteCampers.slice(0, visibleCount).map(camper => (
            <Card key={camper._id} camper={camper} />
          ))}
          {visibleCount < favoriteCampers.length && (
            <LoadMoreButton onClick={handleLoadMore}>Load More</LoadMoreButton>
          )}
        </>
      ) : (
        // eslint-disable-next-line react/no-unescaped-entities
        <NoFavoritesMessage>Please add some camper's to your list</NoFavoritesMessage>
      )}
    </Container>
  );
};

export default FavoritesList;
