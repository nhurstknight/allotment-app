import { Route, Switch } from 'react-router-dom';
import styled from "styled-components";
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';


import Header from "./Components/Header"
import Nav from "./Components/Nav"

function App() {
  return (
    <StyledMainGrid>
      <Header/>
      <Nav/>
      <Switch>
        <Route path='/about' component={ AboutUs } />
        <Route path='/' component={ Home } />
      </Switch>
    </StyledMainGrid>
  );
}

// 
const StyledMainGrid = styled.div`
  display: grid;
  grid-template-areas:
    'header header header header header header'
    'nav    nav    nav    nav    nav    nav'
    'menu main main main right right'
    'menu footer footer footer footer footer';
  grid-gap: 10px;
  background-color: #2196F3;
  padding: 10px;
`;
export default App;
