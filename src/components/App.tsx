import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import systemCss from '@styled-system/css';
import theme from './theme';
import Box from './Box';
import Form from './Form';
import ListItem from './ListItem';

const titleCss = systemCss({
  fontSize: `title`,
  m: 5,
  color: `green`,
})

const Title = styled.h1`
  ${titleCss}
  `

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Box
        justifyContent='flex-start'
        width='100%'
        height='100vh'
        bg='Azure'
        flexDirection='column'>
        <Title>Todo list</Title>
        <Form />
        <ListItem />
      </Box>
    </ThemeProvider >

  );
}

export default App;
