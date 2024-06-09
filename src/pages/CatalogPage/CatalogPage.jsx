import CardList from "../../components/CardList/CardList";
import Filter from "../../components/Filter/Filter";
import { Container } from "./CatalogPage.styled";

const CatalogPage = () => {
    return (
        <Container>
            <Filter />
            <CardList />
        </Container>
    )
}

export default CatalogPage;