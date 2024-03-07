import React from "react";
import { Component } from 'react';

export class InformationLayout extends Component{

    render(){
        return(
            <h1 className='h1'>{this.props.check(this.props.turn, this.props.winner, this.props.draw)}</h1>
        )
    }
}

