import styled from '@emotion/styled';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const Name = styled.h3`
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 24px;
    line-height: 125%;
    color: #101828;
    margin: 0;
`;

export const DetailContainer = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
`;

export const ReviewsContainer = styled.div`
    display: flex;
    gap: 2px;
    align-items: center;
    justify-content: center;
    height: 24px;
`;

export const LocationContainer = styled.div`
    display: flex;
    gap: 2px;
    align-items: center;
    justify-content: center;
    height: 24px;
`;

export const Reviews = styled.p`
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    position: relative;
    color: #101828;

    &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 1px;
        width: 100%;
        height: 1px;
        background-color: #101828;
    }
`;

export const Location = styled.p`
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #101828;
`;

export const Star = styled.svg`
    width: 16px;
    height: 16px;
    stroke: #FFC531;
    fill: #FFC531;
    align-items: center;
    justify-content: center;
    display: flex;
`;

export const Map = styled.svg`
    width: 16px;
    height: 16px;
    stroke: #101828;
    fill: none;
    align-items: center;
    justify-content: center;
    display: flex;
`;