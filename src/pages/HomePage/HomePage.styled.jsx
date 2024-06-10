import styled from '@emotion/styled';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 0px 40px;
`;

export const Title = styled.h3`
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 32px;
    line-height: 133%;
    color: #101828;
`;

export const Text = styled.p`
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 133%;
    color: #101828;
`;

export const Image = styled.img`
    border-radius: 10px;
    width: 280px;
    height: 300px;
    object-fit: cover;
    transition: transform 0.3s ease;
    &:hover{
        transform: scale(1.05);
    }
`;

export const ImageContainer = styled.div`
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
`;