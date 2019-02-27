import React, {Component} from 'react';
import { connect } from 'react-redux';
import Flexbox from 'flexbox-react'

import { mudaTimerPaused, countdownTimer, resetTime} from '../actions/AppActions.js'

export class Timer extends Component{
    componentWillMount(){
       
    }
    _isTimerPaused(){
        if(this.props.timerPaused === true){
            return 'Start'
        }
        if(this.props.timerPaused === false){
            return 'Pause'
        }
    }
    _Timer(paused){
    console.log(paused)
    if(paused === false){
      var newTimer =  setInterval(()=>{
        this.props.countdownTimer(this.props.time)
            if(this.props.time <= 0){
                clearInterval(newTimer)
            }
            if(this.props.timerPaused === true){
                clearInterval(newTimer)
            }
            
        }, 1000)
    }

    } 
    
    render(){
        
        return(
            <div className='grupoTimer'>
                <p className='contador' style={{marginBottom:0}}>{this.props.time}</p>
                <Flexbox style={{justifyContent:'space-between'}}>    
                        <p className='botaoTimer' onClick={()=> {
                            
                            this._Timer(!this.props.timerPaused)
                            this.props.mudaTimerPaused(this.props.timerPaused) 
                            }} >{this._isTimerPaused()}</p>        
                        <p className='botaoTimer' onClick={()=>{
                            
                            this.props.mudaTimerPaused(false)
                            this.props.resetTime()
                            } } style={{marginLeft:10}}>Reset</p>        
                </Flexbox> 
            </div> 
        )
    }
}

const mapStateToProps = state =>{
   
    let timerPaused = state.AppReducer.timerPaused
    let time = state.AppReducer.time
   
    return{
        timerPaused, 
        time, 
    }
}

export default connect(mapStateToProps, {mudaTimerPaused, countdownTimer, resetTime})(Timer)