import { useEffect } from 'react';

import { getCampers, toggleFavorite } from '../../redux/slices/campersSlice';
import { useDispatch, useSelector } from 'react-redux';

const CardList = () => {
  const dispatch = useDispatch();
  const { data, favorites, status, error } = useSelector(state => state.campers);

  useEffect(() => {
    dispatch(getCampers());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {data.map(camper => (
        <div key={camper._id}>
          <h3>{camper.name}</h3>
          <p>{camper.description}</p>
          <button onClick={() => dispatch(toggleFavorite(camper._id))}>
            {favorites.includes(camper._id) ? 'Remove from favorites' : 'Add to favorites'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default CardList;
