import styled, { ThemeProvider, injectGlobal } from 'styled-components';

const Page = styled.div`
    background-color: ${props => props.theme.yellow};
    width: ${props => props.theme.maxWidth};
    height: 100vh;
`

export default Page;