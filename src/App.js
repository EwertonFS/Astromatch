import React from 'react'
import Main from './components/Main/Main';
import ResetButton from './components/ResetButton/ResetButton';
import styled from "styled-components"

const Centraliza = styled.div`
 

`
function App() {
  return (
    <Centraliza>
    <Main/>
    
    <ResetButton/>


     
    </Centraliza>
  );
}

export default App;
