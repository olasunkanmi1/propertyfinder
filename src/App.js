 import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import React, { useState } from 'react'
import GlobalStyle from './GlobalStyles';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

import Footer from './components/Footer';
import HomePage from './pages/Homepage'
import { InteriorData } from './data/ChoIntData'
import Properties from './pages/Properties'
import Details from './pages/Details'
import Rentals from './pages/Rentals'

import styled from 'styled-components';
import Saved from './pages/Saved';
import { CartProvider } from 'react-use-cart';

const Cr = styled.footer`
    width: 100vw;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 1rem;
    background: midnightblue;
    letter-spacing: 3px;
`

function App() {

  const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
      setIsOpen(!isOpen)
    }

  return (
    <>
          {/* <CartProvider> */}
      <Router >
        <GlobalStyle />
        <Navbar toggle={toggle} />
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} toggle={toggle} />
        <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/properties" exact component={Properties} />    
            <Route path={`/properties/:id`} exact component={Details} />
            <Route path="/rentals"exact component={Rentals} />
            <Route path="/saved"exact component={Saved} />
            {/* <Route>Error 404 Not Found</Route> */}
        </Switch>
        <Footer {...InteriorData} />
        <Cr>Property Finder &copy; 2021</Cr>
      </Router>
          {/* </CartProvider> */}
    </>
  );
}

export default App;
