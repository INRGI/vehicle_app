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
    border: none;
    width: 160px;
    height: 56px;
    background-color: #e44848;
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: -0.01em;
    color: #fff;
    margin-top: 24px;
`;

export const Input = styled(Field)`
    border-radius: 10px;
    width: 100%;
    max-width: 364px;
    height: 56px;
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 125%;
    color: rgba(16, 24, 40, 0.6);
    background-color:  #f7f7f7;
    border: none;
    padding: 0 18px;
`;

export const InputText = styled.textarea`
    border-radius: 10px;
    width: 100%;
    max-width: 364px;
    height: 114px;
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 125%;
    color: rgba(16, 24, 40, 0.6);
    background-color: #f7f7f7;
    border: none;
    padding: 18px;
    text-align: left;
    vertical-align: top; 
`;