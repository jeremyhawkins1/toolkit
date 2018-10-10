import React, {Component} from 'react';
const ES6Promise = require("es6-promise");
ES6Promise.polyfill();
import Axios from 'axios';
import CommandList from './CommandList';

class Tab extends Component {
  constructor(props){
    super(props);
    this.state = {
      menus: []
    }
  }

  componentDidMount(){
    Axios.get(this.props.src)
     .then((res) => {
       console.log(res.data);
       this.setState({
         menus: res.data.menuItems
       });
       });
  }

  

  render() {
    let list = this.state.menus.map((menu) => {
      return (
        <div key={menu.title} className="MenuItem">
          <input id={menu.title} type="checkbox" name={menu.title} />
          <label htmlFor={menu.title}>{menu.title}</label>
            <CommandList key={menu.id} commands={menu.commands} />            
        </div>
      );
    });
    
    return (
      <div className="MenuItems">
        {list}
      </div>
    );
  }

}

export default Tab;