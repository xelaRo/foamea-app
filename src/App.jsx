import React, { Fragment } from 'react';
import './App.scss';
import Header from './components/header/header.component'
import { Switch, Route, Redirect } from 'react-router-dom'
import MainPage from './pages/mainpage/mainpage.component'


class App extends React.Component{
  constructor(){
    super();
  }

  render(){
    return(
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={MainPage} />
        </Switch>
      </React.Fragment>
    )
  }
}

export default App;
