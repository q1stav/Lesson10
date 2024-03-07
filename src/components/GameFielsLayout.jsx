import {ButtonsContainer} from './ButtonsContainer';
import {connect } from 'react-redux';
import { Component } from 'react';


export class GameFieldLayoutNewContainer extends Component{

    render(){
        return(
        <div className='gameContainer'>
            {this.props.field.map((button,index)=>
            <ButtonsContainer
                key={index} 
                value={button} 
                onClick={()=>this.props.click(index)}
                /> 
            )}
        </div> 
        )
    }
}

const mapStateToProps = (state) => ({
    field: state,
});  

export const GameFieldLayout = connect(mapStateToProps)(GameFieldLayoutNewContainer);