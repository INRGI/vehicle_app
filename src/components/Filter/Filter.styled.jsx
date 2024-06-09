import styled from '@emotion/styled';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

export const LocationContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const VehicleContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export const TypeContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export const SearchButton = styled.button`
    border-radius: 200px;
    padding: 16px 60px;
    width: 173px;
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

export const Text = styled.p`
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: rgba(16, 24, 40, 0.6);
`;

export const Title = styled.h3`
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 20px;
    line-height: 120%;
    color: #101828;
`;

export const Line = styled.div`
    height: 1.5px;
    background-color: rgba(16, 24, 40, 0.1);
    width: 100%;
    max-width: 360px;
`;

export const List = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`;

export const Item = styled.div`
    border: 1px solid ${({ isSelected }) => (isSelected ? '#E44848' : 'rgba(16, 24, 40, 0.2)')};
    border-radius: 10px;
    width: 115px;
    height: 95px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: center;
    gap: 8px;
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 125%;
    text-align: center;
    color: #101828;
    cursor: pointer;
`;

export const Icon = styled.svg`
    width: 32px;
    height: 32px;
    stroke: #101828;
    fill: #101828;
    align-items: center;
    justify-content: center;
    display: flex;
`;

export const IconAnother = styled.svg`
    width: 32px;
    height: 32px;
    stroke: #101828;
    fill: none;
    align-items: center;
    justify-content: center;
    display: flex;
`;

export const InputWrapper = styled.div`
    position: relative;
    width: 100%;
    max-width: 360px;
`;

export const Input = styled.input`
    border-radius: 10px;
    border: none;
    width: 100%;
    max-width: 325px;
    height: 56px;
    background-color: #f7f7f7;
    padding-left: 35px;
    border: 1px solid rgba(16, 24, 40, 0.2);
    font-family: "Inter", sans-serif;
    font-size: 16px;
    line-height: 150%;
    color: #101828;
`;

export const InputIcon = styled.svg`
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    width: 18px;
    height: 20px;
    stroke: #101828;
    fill: none;
`;