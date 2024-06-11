import CardList from "../../components/CardList/CardList";
import Filter from "../../components/Filter/Filter";
import { Container } from "./CatalogPage.styled";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const CatalogPage = () => {
    return (
        <Container>
            <Filter />
            <CardList />
            <ToastContainer />
        </Container>
    )
}

export default CatalogPage;