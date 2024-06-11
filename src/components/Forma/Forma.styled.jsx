import styled from "@emotion/styled";
import { Field } from "formik";

export const Container = styled.div`
    border: 1px solid rgba(16, 24, 40, 0.2);
    border-radius: 10px;
    padding: 24px;
    width: 400px;
`;

export const Title = styled.h3`
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 20px;
    line-height: 120%;
    color: #101828;
    margin-bottom: 8px;
`;

export const Text = styled.p`
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #475467;
    margin-bottom: 24px;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
    max-width: 400px;
    width: 100%;
    margin-bottom: 24px;
`;

export const Button = styled.button`
    border-radius: 200px;
    width: 160px;
    height: 56px;
    background-color: #e44848;
`;

export const Input = styled(Field)`

`;