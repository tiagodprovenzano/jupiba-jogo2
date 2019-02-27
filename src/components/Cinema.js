import React, {Component} from 'react';
import { connect } from 'react-redux';
import {filmes} from '../reducers/perguntas'
import Timer from '../components/Timer.js'

import {mudaIndexCinema, mudaRespostaCinema, mudaMensagem} from '../actions/AppActions.js'

export class Cinema extends Component{
    componentWillMount(){
        if(this.props.optJogo === 'continuar'){ 
            console.log(localStorage.getItem('cinema'))
        }
    }
    
    geraIndexCinema(dataCinema){
        //console.log(Object.keys(dataCinema))
        let i = Math.floor(Math.random()*(dataCinema.length-1))
        if(this.props.indexCinema !== i){
            //console.log(i)    
                return i
        }
        else
        {
            //console.log('index igual ao anterior')
            //console.log('i =   '+ i)
            if(i !== 0){
               // console.log('retorno foi =' + 0)
                return (0)
            }else{
                if (dataCinema.length - 2 < 0){
                   // console.log('retorno foi = 1')
                    return 1
                }else{
                   // console.log('retorno foi =' + (dataCinema.length-2))
                    return (dataCinema.length-2)
                }
            }
        }
        }
    
        render(){
            let dataCinema = []
            if(this.props.optJogo === 'novo'){
                dataCinema = filmes
                console.log(dataCinema)
            }
            if(this.props.optJogo === 'continuar'){
                dataCinema = JSON.parse(localStorage.getItem('cinema'))
            }
            if(this.props.indexCinema === ''){
                return (
                    <div className='base'>
                        <h2 className='voltar' onClick={()=>this.props.mudaMensagem('SelecionarCategoria')}>Voltar</h2>
                        <div className='botaoCategoria'>
                            <h1 className='categoria' onClick={()=>this.props.mudaIndexCinema(this.geraIndexCinema(dataCinema))}>Clique para iniciar</h1>
                        </div>
                    </div>
                 )
            }
            if(dataCinema.length === 0){
                return (
                    <div className='base'>
                        <h2 className='voltar' onClick={()=>this.props.mudaMensagem('SelecionarCategoria')}>Voltar</h2>
                        <div className='botaoCategoria'>   
                            <h1 className='categoria'>Não há mais perguntas nesta categoria</h1>
                        </div>  
                    </div>
                )    
            }
            try{
            if(this.props.indexCinema !== '' && dataCinema.length > 0){
                console.log(this.props.perguntasCinemaFeitas.includes(dataCinema[this.props.indexCinema].foto) === false)
                if(this.props.perguntasCinemaFeitas.includes(dataCinema[this.props.indexCinema].foto) === false){
                   console.log(dataCinema[this.props.indexCinema].foto)
                   
                    return(
                        <div className='base'>
                        <h2 className='voltar' onClick={()=>{
                            
                            this.props.mudaRespostaCinema('Resposta:')
                            this.props.mudaIndexCinema(this.geraIndexCinema(dataCinema))
                            this.props.perguntasCinemaFeitas.push(dataCinema[this.props.indexCinema].foto)
                            dataCinema.splice(this.props.indexCinema, 1)
                            localStorage.setItem('cinema', JSON.stringify(dataCinema))
                            this.props.mudaMensagem('SelecionarCategoria')
                            
                            }} >Voltar</h2>
                        <div className='botaoCategoria'>
                            <img className='pergunta' src={dataCinema[this.props.indexCinema].foto}/>
                            <h1 onClick={()=>this.props.mudaRespostaCinema(dataCinema[this.props.indexCinema].resposta)} className='resposta' >{this.props.respostaCinema}</h1>
                        </div>
                        <Timer/>
                        </div>
                    )
                }
    
            }}catch(e){
                console.log('entrou aqui')
            }
            
        }
}

const mapStateToProps = state =>{
    let mensagem = state.AppReducer.mensagem
    let indexCinema = state.AppReducer.indexCinema
    let perguntasCinemaFeitas = state.AppReducer.perguntasCinemaFeitas
    let respostaCinema = state.AppReducer.respostaCinema
    let optJogo = state.AppReducer.optJogo
    return{
        mensagem,
        indexCinema,
        perguntasCinemaFeitas, 
        respostaCinema, 
        optJogo
    }
}

export default connect(mapStateToProps, {
    mudaIndexCinema, 
    mudaRespostaCinema, 
    mudaMensagem
})(Cinema)