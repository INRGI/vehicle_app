import styled from '@emotion/styled';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const LoadMoreButton = styled.button`
    border: 1px solid rgba(71, 84, 103, 0.2);
    border-radius: 200px;
    padding: 16px 32px;
    width: 145px;
    height: 56px;
    background-color: transparent;
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: -0.01em;
    color: #101828;
    margin-bottom: 15px;
`;

export const NoFavoritesMessage = styled.p`
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 32px;
    line-height: 150%;
    letter-spacing: -0.01em;
    color: #101828;
    margin-bottom: 15px;
    margin-top: 200px;
`;