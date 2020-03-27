import styled from 'styled-components';

const Button = styled.button`
    color: red;
    font-size: ${props => props.huge ? '200px' : '100px'};
    background-color: blue;
    width: 100px;
    height: 50px;

    span {
        color: yellow;
        font-style: italic;
    }

    .second-span {
        color: black
    }
`;

export default Button;