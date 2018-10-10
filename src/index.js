import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
require('./styles/main.scss');

const Office = window.Office;

Office.initialize = (reason) => {
  if (Office.context.requirements.isSetSupported('WordApi', 1.1)) {
    ReactDom.render(<App />, document.getElementById('app'));
  } else {
    console.log("Office Support for Word API not found or not sufficient");
  }
}


