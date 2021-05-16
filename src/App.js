import React from 'react';
import Footer from './components/Footer';
import Header from './components/header';
import Main from './components/main';

class App extends React.Component {
  render() {
    return (
      <div>

        <Header />
        <Main />
        <Footer />


      </div>


    )
  }
}

export default App;