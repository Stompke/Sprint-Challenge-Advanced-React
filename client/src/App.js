import React from 'react';
import logo from './logo.svg';
import axios from 'axios'
import './App.css';

import Players from './components/Players';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      count: 0,
      apiData: []
    }
    this.handleClick = this.handleClick.bind(this);
  }


  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;

    axios
    .get('http://localhost:5000/api/players')
    .then(res => {
      console.log(res)
      this.setState({
        ...this.state,
        apiData: res.data
      })
    })
    .catch(err => {
      console.log('oh no!!!', err)
    })
  }

  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`;
  }

  handleClick() {
    this.setState(state => ({
      count: state.count + 1,
    }));
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <p>You clicked {this.state.count} times</p>
          <button onClick={this.handleClick}>
            Click me
          </button>
          {/* <ul>
            {this.state.apiData.map(item =>  <li>{item.name}</li>)}
          </ul> */}
          <Players data={this.state.apiData} />
        </header>
      </div>
    );
  }
}

export default App;
