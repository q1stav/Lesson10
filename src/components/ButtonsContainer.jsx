import React from 'react';
import {ButtonsLayout} from './ButtonsLayout';
import { Component } from 'react';

export class ButtonsContainer extends Component{
  
    render(){
        return(
            <ButtonsLayout click={this.props.onClick} value={this.props.value}/>
            )}
}
