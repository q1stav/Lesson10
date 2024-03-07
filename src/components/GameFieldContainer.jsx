import React, { Component } from 'react';
import {connect } from 'react-redux';
import {GameFieldLayout} from './GameFielsLayout'; 


export class GameFieldNewContainer extends Component{ 
 
    render(){
        return(
            <GameFieldLayout  click={this.props.click}/>
        )}}


export const GameFieldContainer = connect()(GameFieldNewContainer);