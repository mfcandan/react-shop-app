import React, { Fragment } from 'react';
import styled from 'styled-components'
import Header from '../Header'
import Dashboard from './Dashboard';


function App() {
  return (
    <>
      <Header />
      <Dashboard />
    </>
  );
}

export default App;

const StyledDiv = styled.div`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`