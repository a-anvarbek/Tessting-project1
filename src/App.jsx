import styled from 'styled-components'

import './App.css'

import Header from './components/Header'
import MeetingSidebar from './components/MeetingSidebar'
import Menu from './components/Menu'

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
      <MeetingSidebar />
      <Menu />
    </Wrapper>
  )
}

export default App;
