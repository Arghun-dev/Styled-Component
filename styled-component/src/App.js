import React from 'react';
import { ThemeProvider } from 'styled-components';
import Button from './components/styled-components/Button';
import Page from './components/styled-components/pageStyle';
import Paragraph from './components/styled-components/paragraph';
import Logo from './components/styled-components/Logo';
import './App.css';

const theme = {
  yellow: 'yellow',
  black: '#393939',
  grey: '3a3a3a',
  maxWidth: '1000px',
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Logo>SICK FITS</Logo>
      <Page> 
        <Button huge>
          Click 
          <span> Yes</span>
          <span className='second-span'> No</span>
        </Button>
          <Paragraph>This is inner div components ..sm,dbadfad sd hjas,ds,d ha aekhakaa</Paragraph>
      </Page>
    </ThemeProvider>
  );
}

export default App;
