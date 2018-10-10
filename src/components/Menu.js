import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Tab from './Tab';


class Menu extends Component {
  
  render() {
    let menuList = this.props.groups.map(group => {
      return (
        <div key={group.name} className="Menu">
        <input id={group.name} type="checkbox" name={group.name} />
        <label htmlFor={group.name}>{group.name}</label>
          <Tab key={group.id} src={group.source} />          
      </div>
      );
    });
    return (
      <div className="wrapper">
        {menuList}      
      </div>
    );
  }

}

export default Menu;