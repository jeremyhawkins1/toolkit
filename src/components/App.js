import React, {Component} from 'react';
import ReactDOM from 'react-dom';
const ES6Promise = require("es6-promise");
ES6Promise.polyfill();
import Axios from 'axios';
import Menu from './Menu';



class App extends Component {
  constructor() {
    super();
    this.state = {
      groups: [],
      sources: {
        groups: "https://online-03.hccs.edu/tutoring/data/groups.json"
      }
    };
  }

  componentDidMount() {
    Axios.get(this.state.sources.groups)
     .then(res => {
       this.setState({
         groups: res.data.groups
       });
       console.log(this.state);
     });
  }

  render() {
    return (
    <div>
      <header>
        <h3>HCC Online Tutoring</h3>
        <h4>Tutoring ToolKit</h4>
      </header>
      <Menu groups={this.state.groups} />
    </div>);
  }
}

export default App;