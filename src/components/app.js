import React, { Component } from 'react';
import { Display_counter } from './display_counter.js'
import Button_counter from './button_counter.js'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>This is my Redux </h1>
        <Display_counter />
        <Button_counter />
      </div>
    );
  }
}
