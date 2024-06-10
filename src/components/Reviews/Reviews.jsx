import { useSelector } from "react-redux";
import { Container, Logo, Name, NameContainer, PersonContainer, ReviewContainer, Text } from "./Reviews.styled";
import StarRating from "../StarRating/StarRating";

const Reviews = () => {
    const activeCamper = useSelector(state => state.campers.activeCamper);

    return (
        <Container>
            {activeCamper.reviews.length > 0 ? (
                activeCamper.reviews.map((review) => (
                    <ReviewContainer key={review.reviewer_name}>
                        <PersonContainer>
                            <Logo>{review.reviewer_name[0]}</Logo>
                            <NameContainer>
                                <Name>{review.reviewer_name}</Name>
                                <StarRating rating={review.reviewer_rating} /> 
                            </NameContainer>
                        </PersonContainer>
                        <Text>{review.comment}</Text>
                    </ReviewContainer>
                ))
            ) : (
                <p>No</p>
            )

                
            }
        </Container>
    )
}

export default Reviews;