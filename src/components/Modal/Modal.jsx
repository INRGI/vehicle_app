/* eslint-disable react/prop-types */
import CardTitle from "../CardTitle/CardTitle";
import { BottomContainer, Buttons, Container, Description, Icon, Image, ImageContainer, LinkContainer, Price, StyledLink, TopContainer } from "./Modal.styled";
import sprite from '../../assets/sprite.svg';
import { Suspense, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Loader from "../Loader";
import Forma from "../Forma/Forma";

const Modal = ({isOpen, onClose, camper}) => {

    const customStyles = {
        overlay:{
            backgroundColor: 'rgba(17, 18, 19, 0.4)',
        }
    }

    const navigate = useNavigate();
    const [isFirstOpen, setIsFirstOpen] = useState(true);

    useEffect(() => {
        if (isOpen && isFirstOpen) {
            navigate("features");
            setIsFirstOpen(false);
        }
    }, [isOpen, isFirstOpen, navigate]);

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

            <BottomContainer>
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
                <Forma />
            </BottomContainer>
        </Container>
    )
}

export default Modal;