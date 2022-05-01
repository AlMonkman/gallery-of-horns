import React from 'react';
import './App.css';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import allBeast from './data.json'
import Container from 'react-bootstrap/Container';

class App extends React.Component {
  render() {


    return (
      <Container className="App">
        <Header />
        <Main allBeast={allBeast} />
        <Footer />

      </Container>
    );
  }
}

export default App;
