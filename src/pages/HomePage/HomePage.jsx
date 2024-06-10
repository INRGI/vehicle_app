import { useEffect } from "react";
import { Container, Image, ImageContainer, Text, Title } from "./HomePage.styled";
import { useDispatch, useSelector } from "react-redux";
import { getCampers } from "../../redux/slices/campersSlice";

const HomePage = () => {
    const visibleCount = 8;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCampers());
      }, [dispatch]);

    const { data } = useSelector(state => state.campers);

    return (
        <Container>
            <Title>Welcome to CamperRental!</Title>
            <Text>Our best products:</Text>
            <ImageContainer >
            {data.slice(0, visibleCount).map(camper => (
                    <Image key={camper._id} src={camper.gallery[0]} />
            ))}
            </ImageContainer>
        </Container>
    )
}

export default HomePage;