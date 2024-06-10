import styled from "@emotion/styled";
import Modal from 'react-modal';
import { NavLink } from "react-router-dom";

export const Container = styled(Modal)`
    width: 100%;
    max-width: 902px;
    height: 640px;
    background-color: white;
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    z-index: 999;
    border-radius: 20px;
    padding: 40px;
    overflow: auto;  
`;

export const TopContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`;

export const Price = styled.p`
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 24px;
    line-height: 125%;
    color: #101828;
    margin-top: 16px;
`;

export const ImageContainer = styled.div`
    margin-top: 24px;
    display: flex;
    gap: 16px;
`;

export const Image = styled.img`
    border-radius: 10px;
    width: 100%;
    max-width: 290px;
    height: 310px;
    object-fit: cover;
`;

export const Description = styled.p`
    margin-top: 24px;
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #475467;
`;

export const Icon = styled.svg`
    width: 32px;
    height: 32px;
    stroke: #101828;
    fill: #101828;
    align-items: center;
    justify-content: center;
    display: flex;
    cursor: pointer;
`;

export const LinkContainer = styled.div`
    width: 100%;
    display: flex;
    gap: 40px;
    justify-content: flex-start;
    position: relative;
    margin-top: 44px;
    margin-bottom: 44px;

    &::before {
        content: '';
        position: absolute;
        bottom: 1px;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: rgba(16, 24, 40, 0.2);
    }
`;

export const StyledLink = styled (NavLink)`
    text-decoration: none;
    position: relative;
    
    &::after {
        content: '';
        display: block;
        margin-top: 24px;
        left: 0;
        width: 100%;
        height: 4px;
        background-color: transparent;
        transition: background-color 0.3s;
    } 

    &.active::after {
        background-color:#E44848;
    }
`

export const Buttons = styled.p`
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 20px;
    line-height: 120%;
    color: #101828;
`;