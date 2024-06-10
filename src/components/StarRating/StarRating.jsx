/* eslint-disable react/prop-types */
import sprite from '../../assets/sprite.svg';
import { RatingContainer, StarIcon, StarIconY } from './StarRating.styled';

const StarRating = ({ rating }) => {
  const yellowStars = Array.from({ length: rating }, (_, index) => (
    <StarIconY key={index}>
      <use width={16} height={16} xlinkHref={`${sprite}#icon-star`} />
    </StarIconY>
  ));
  const grayStars = Array.from({ length: 5 - rating }, (_, index) => (
    <StarIcon key={index}>
      <use width={16} height={16} xlinkHref={`${sprite}#icon-star`} />
    </StarIcon>
  ));

  return (
    <RatingContainer>
      {yellowStars}
      {grayStars}
    </RatingContainer>
  );
};

export default StarRating;
