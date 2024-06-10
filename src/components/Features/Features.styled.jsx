import styled from "@emotion/styled";

export const Container = styled.div`
    max-width: 430px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 44px;
`;

export const IconsContainer = styled.div`
    display: flex;
    column-gap: 8px;
    row-gap: 8px;
    flex-wrap: wrap;
`;

export const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const Title = styled.h4`
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 20px;
    line-height: 120%;
    color: #101828;
    display: block;
`;

export const Line = styled.div`
    height: 1.5px;
    background-color: rgba(16, 24, 40, 0.1);
    width: 100%;
`;

export const StatsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
`;

export const Stat = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Text = styled.p`
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 133%;
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

export const Categorie = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
    border-radius: 100px;
    padding: 12px 21px;
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