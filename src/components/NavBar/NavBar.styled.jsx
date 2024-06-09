import styled from '@emotion/styled';
import { NavLink } from "react-router-dom";

export const Header = styled.header`
    background-color: #101828;
    display: flex;
    height: 52px;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
    width: 100%;
    padding: 0 30px;
`;

export const StyledLink = styled(NavLink)`
    color: white;
    text-align: center;
    padding: 16px 16px;
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
    transition: background-color ease-in-out 0.1s;
    &:hover {
        background-color: #111;
    }

  &.active {
    background-color: #E44848;
  }
`;