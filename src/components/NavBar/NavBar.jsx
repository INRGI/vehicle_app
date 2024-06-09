import { Header, StyledLink } from "./NavBar.styled"

const NavBar = () => {
    return (
        <Header>

            <nav>
                <StyledLink to="/" end>Home</StyledLink>
                <StyledLink to="/catalog">Catalog</StyledLink>
                <StyledLink to="/favorites">Favorites</StyledLink>
            </nav>
        </Header>
    )
};

export default NavBar;
