import styled from '@emotion/styled';

export const Description = styled.p`
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #475467;
`;

export const Container = styled.div`
    border: 1px solid rgba(16, 24, 40, 0.2);
    border-radius: 20px;
    padding: 24px;
    width: 100%;
    height: 308px;
    max-width: 888px;
    display: flex;
    gap: 24px;
`;

export const RightContainer = styled.div`
    width: 100%;
    overflow: hidden;
    display: flex;
    gap: 24px;
    flex-direction: column;
`;

export const Image = styled.img`
    border-radius: 10px;
    width: 290px;
    height: 310px;
    object-fit: cover;
`;

export const ShowMoreButton = styled.button`
    border-radius: 200px;
    padding: 16px 40px;
    width: 166px;
    height: 56px;
    background-color: #e44848;
    color: white;
    border: none;
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: -0.01em;
`;

export const DetailContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const IconFav = styled.svg`
    width: 24px;
    height: 24px;
    stroke: #E44848;
    fill: #E44848;
    align-items: center;
    justify-content: center;
    display: flex;
`;

export const IconNotFav = styled.svg`
    width: 24px;
    height: 24px;
    stroke: #101828;
    fill: none;
    align-items: center;
    justify-content: center;
    display: flex;
`;

export const PriceContainer = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    height: 30px;
`;

export const Price = styled.p`
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 24px;
    line-height: 125%;
    color: #101828;
`;

export const CategoriesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    row-gap: 8px;
    column-gap: 8px;
`;

export const Categorie = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
    border-radius: 100px;
    padding: 12px 18px;
    background-color: #f2f4f7;
    gap: 8px;
    align-items: center;
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 125%;
    text-align: center;
    color: #101828;
`;

export const Icon = styled.svg`
    width: 20px;
    height: 20px;
    stroke: #101828;
    fill: #101828;
    align-items: center;
    justify-content: center;
    display: flex;
`;

export const IconAnother = styled.svg`
    width: 20px;
    height: 20px;
    stroke: #101828;
    fill: none;
    align-items: center;
    justify-content: center;
    display: flex;
`;