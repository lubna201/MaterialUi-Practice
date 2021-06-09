import './App.css';
import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/HomePage/Home/Home';
import Footer from './Components/Footer/Footer';
import { theme } from './theme'
import { ThemeProvider } from '@material-ui/core';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <ThemeProvider theme={theme}>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </UserContext.Provider>
    </ThemeProvider>
  );
}

export default App;

