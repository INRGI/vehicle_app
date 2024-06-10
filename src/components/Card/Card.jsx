/* eslint-disable react/prop-types */
import CardTitle from '../CardTitle/CardTitle';
import sprite from '../../assets/sprite.svg';

import { setActiveCamper, toggleFavorite } from '../../redux/slices/campersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Categorie, CategoriesContainer, Container, Description, DetailContainer, Icon, IconAnother, IconFav, IconNotFav, Image, Price, PriceContainer, RightContainer, ShowMoreButton } from './Card.styled';
import Modal from '../Modal/Modal';
import { useEffect, useState } from 'react';

const Card = ({camper}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (isModalOpen) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'auto';
        }
    
        return () => {
          document.body.style.overflow = 'auto';
        };
      }, [isModalOpen]);

    const dispatch = useDispatch();

    
    const { favorites} = useSelector(state => state.campers);

    return (
        <>
            <Container key={camper._id}>
                <Image src={camper.gallery[0]} />
                <RightContainer>
                    <DetailContainer>
                        <CardTitle reviews={camper.reviews.length} name={camper.name} stars={camper.rating} location={camper.location}/>
                        
                        <PriceContainer>
                            <Price>€{camper.price}.00</Price>
                            {favorites.includes(camper._id) ? (
                                <IconFav onClick={() => dispatch(toggleFavorite(camper._id))}>
                                    <use width={24} height={24} xlinkHref={`${sprite}#icon-love`} />
                                </IconFav>
                            ) : (
                                <IconNotFav onClick={() => dispatch(toggleFavorite(camper._id))}>
                                    <use width={24} height={24} xlinkHref={`${sprite}#icon-love`} />
                                </IconNotFav>
                            )}
                        </PriceContainer>
                    </DetailContainer>

                    <Description>{camper.description}</Description>

                    <CategoriesContainer>
                        {camper.adults > 0 && (
                            <Categorie>
                                <Icon>
                                    <use width={20} height={20} xlinkHref={`${sprite}#icon-Users`} />
                                </Icon>
                                {camper.adults} adults
                            </Categorie>
                        )}
                        {camper.transmission === "automatic" && (
                            <Categorie>
                                <IconAnother>
                                    <use width={20} height={20} xlinkHref={`${sprite}#icon-automatic`} />
                                </IconAnother>
                                Automatic
                            </Categorie>
                        )}
                        {camper.engine === "petrol" && (
                            <Categorie>
                                <Icon>
                                    <use width={20} height={20} xlinkHref={`${sprite}#icon-Petrol`} />
                                </Icon>
                                Petrol
                            </Categorie>
                        )}
                        {camper.details.kitchen > 0 && (
                            <Categorie>
                                <IconAnother>
                                    <use width={20} height={20} xlinkHref={`${sprite}#icon-Kitchen`} />
                                </IconAnother>
                                Kitchen
                            </Categorie>
                        )}
                        {camper.details.beds > 0 && (
                            <Categorie>
                                <IconAnother>
                                    <use width={20} height={20} xlinkHref={`${sprite}#icon-beds`} />
                                </IconAnother>
                                {camper.details.beds} beds
                            </Categorie>
                        )}
                        {camper.details.airConditioner > 0 && (
                            <Categorie>
                                <IconAnother>
                                    <use width={20} height={20} xlinkHref={`${sprite}#icon-air-cond`} />
                                </IconAnother>
                                AC
                            </Categorie>
                        )}
                    </CategoriesContainer>

                    
                    <ShowMoreButton onClick={()=> {
                        setIsModalOpen(true);
                        dispatch(setActiveCamper(camper));
                        }}>Show more</ShowMoreButton>
                </RightContainer>
            </Container>

            <Modal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                camper={camper}
            />
        </>
    )
}

export default Card;