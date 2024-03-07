import { Component } from 'react';
import React from "react";

export class ButtonsLayout extends Component{

    render(){
      return(
        <button className='button' onClick={this.props.click}>{this.props.value}</button> 
    )}    
}
