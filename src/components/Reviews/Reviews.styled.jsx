import styled from "@emotion/styled";

export const Container = styled.div`
    max-width: 430px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

export const ReviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const PersonContainer = styled.div`
    display: flex;
    gap: 16px;
`;

export const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 60px;
    width: 60px;
    height: 60px;
    background-color: #f2f4f7;
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 24px;
    line-height: 125%;
    color: #e44848;
`;

export const NameContainer = styled.div`
    display: flex;
    gap: 4px;
    flex-direction: column;
    justify-content: center;
`;

export const Name = styled.p`
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 18px;
    line-height: 133%;
    color: #101828;
`;

export const Text = styled.p`
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #475467;
`;