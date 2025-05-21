import Header from './components/Header'

import './App.css'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 50px 18px;
  background-color: #eee;
  font-family: sans-serif;
`

function App() {

  return (
    <Wrapper>
      <Header />
    </Wrapper>
  )
}

export default App;
