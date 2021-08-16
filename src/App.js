import { Route, Switch } from 'react-router-dom';
import styled from "styled-components";


import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Calendar from './Components/Calendar';
import Header from "./Components/Header"
import Nav from "./Components/Nav"
import ContactUs from './Components/ContactUs';
import News from './Components/News';

function App() {
  return (
    <StyledMainGrid>
      <Header/>
      <Nav/>
      <Switch>
        <Route path='/calendar' component={ Calendar } />
        <Route path='/news' component={ News } />
        <Route path='/contact-us' component={ ContactUs } />
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
    'menu   main   main   main   main   main'
    'footer footer footer footer footer footer';
  grid-gap: 20px;
  // background-color: #2196F3;
  height: 100vh;
`;
export default App;
