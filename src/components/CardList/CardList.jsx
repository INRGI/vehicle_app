import { useEffect } from 'react';

import { getCampers, toggleFavorite } from '../../redux/slices/campersSlice';
import { useDispatch, useSelector } from 'react-redux';
import CardTitle from '../CardTitle/CardTitle';

const CardList = () => {
  const dispatch = useDispatch();
  const { data, favorites} = useSelector(state => state.campers);

  useEffect(() => {
    dispatch(getCampers());
  }, [dispatch]);

  return (
    <div>
      
      {data.map(camper => (
        <div key={camper._id}>
          <CardTitle reviews={camper.reviews.length} name={camper.name} stars={camper.rating} location={camper.location}/>
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
