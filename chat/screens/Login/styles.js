import styled from 'styled-components/native';

export const Container = styled.View`
    justify-content: center;
    align-items: center;
    height: 100%;
    background-color: ${props => props.theme.background};
    padding: 60px;
    font-family: Lato sans-serif;
`;