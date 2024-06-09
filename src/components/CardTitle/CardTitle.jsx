/* eslint-disable react/prop-types */
import { Container, DetailContainer, Location, LocationContainer, Map, Name, Reviews, ReviewsContainer, Star } from "./CardTitle.styled";
import sprite from '../../assets/sprite.svg';

const CardTitle = ({name, stars = 0, reviews = 0, location}) => {
    return (
        <Container>
            <Name>{name}</Name>
            <DetailContainer>
                <ReviewsContainer>
                    <Star>
                        <use width={16} height={16} xlinkHref={`${sprite}#icon-star`} />
                    </Star>
                    <Reviews>{stars} ({reviews} Reviews)</Reviews>
                </ReviewsContainer>
                <LocationContainer>
                    <Map>
                        <use width={16} height={16} xlinkHref={`${sprite}#icon-map-pin`} />
                    </Map>
                    <Location>{location}</Location>
                </LocationContainer>
            </DetailContainer>
        </Container>
    )
}

export default CardTitle;