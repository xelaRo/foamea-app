import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './components/header/header.component'
import { Container, Row } from 'react-bootstrap';
import Background from './components/background/background.component'

class App extends React.Component{
  constructor(){
    super();
  }

  render(){
    return(

      <div>
          <Header />
          <Container >
            <Background />
          </Container>
         

        <Container>
        <h1>Foameea</h1>
        </Container>
      </div>
        

        
    )
  }
}

export default App;
