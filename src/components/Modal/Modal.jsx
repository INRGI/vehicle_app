/* eslint-disable react/prop-types */
import CardTitle from "../CardTitle/CardTitle";
import { Buttons, Container, Description, Icon, Image, ImageContainer, LinkContainer, Price, StyledLink, TopContainer } from "./Modal.styled";
import sprite from '../../assets/sprite.svg';
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../Loader";

const Modal = ({isOpen, onClose, camper}) => {

    const customStyles = {
        overlay:{
            backgroundColor: 'rgba(17, 18, 19, 0.4)',
        }
    }

    return (
        <Container
            ariaHideApp={false}
            isOpen={isOpen}
            onRequestClose={onClose}
            style={customStyles}
        >
            <TopContainer>
                <CardTitle reviews={camper.reviews.length} name={camper.name} stars={camper.rating} location={camper.location}/>
                    <Icon onClick={onClose}>
                        <use width={32} height={32} xlinkHref={`${sprite}#icon-Close`} />
                    </Icon>
            </TopContainer>

            <Price>€{camper.price}.00</Price>

            <ImageContainer>
                <Image src={camper.gallery[0]} />
                <Image src={camper.gallery[1]} />
                <Image src={camper.gallery[2]} />
            </ImageContainer>

            <Description>{camper.description}</Description>

            <LinkContainer>
                <StyledLink to="features">
                    <Buttons>Features</Buttons>
                </StyledLink>
                <StyledLink to="reviews">
                    <Buttons>Reviews</Buttons>
                </StyledLink>
            </LinkContainer>

            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
        </Container>
    )
}

export default Modal;