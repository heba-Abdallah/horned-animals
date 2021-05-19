import React from 'react';
import Footer from './components/Footer';
import Header from './components/header';
import Main from './components/main';
import SelectedBeast from './components/SelectedBeast';
import hornedData from './components/HornedData.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataArr: hornedData,
      element: {},
      show: false,
    }
  }
  showStuff = (para) => {
    let newElement = hornedData.find((element) => {
      if (element.title === para) {
        return element;
      }
    })
    this.setState({
      element: newElement,
      show: true,
    })

  }
  hideStuff = (para) => {
    this.setState({
      show: false,
    })
  }
  render() {
    return (
      <div>
        <Header />
        <SelectedBeast
          show={this.state.show}
          element={this.state.element}
          hideStuff={this.hideStuff}
        />
        < Main
          beastInfo={this.state.dataArr}
          showStuff={this.showStuff}
        />
        <Footer />
      </div>


    )
  }
}

export default App;