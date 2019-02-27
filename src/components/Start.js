import React, {Component} from 'react';
import { connect } from 'react-redux';
import {geografiaHistoria} from '../reducers/perguntas'

import {mudaIndexGeografia, mudaRespostaGeografia, mudaMensagem, } from '../actions/AppActions.js'

import Timer from './Timer.js'
export class Start extends Component{
    componentWillMount(){
        //console.log('reiniciou')
    if(this.props.optJogo === 'continuar'){ 
        console.log(localStorage.getItem('geografiaHistoria'))
    }
    }
    
    geraIndexGeografia(dataGeografiaHistoria){
    //console.log(Object.keys(geografiaHistoria))
        let i = Math.floor(Math.random()*(dataGeografiaHistoria.length-1))
    if(this.props.indexGeografia !== i){
        console.log(i)    
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
            if (dataGeografiaHistoria.length - 2 < 0){
             //   console.log('retorno foi = 1')
                return 1
            }else{
     //          / console.log('retorno foi =' + (geografiaHistoria.length-2))
                return (dataGeografiaHistoria.length-2)
            }
        }
    }
    }

    
     
    
    render(){
        let dataGeografiaHistoria = []
        if(this.props.optJogo === 'novo'){
            dataGeografiaHistoria = geografiaHistoria
        }
        if(this.props.optJogo === 'continuar'){
            dataGeografiaHistoria = JSON.parse(localStorage.getItem('geografiaHistoria'))
        console.log(dataGeografiaHistoria.length)
        }
        if(this.props.indexGeografia === ''){
            return (
                <div className='base'>
                    <h2 className='voltar' onClick={()=>this.props.mudaMensagem('SelecionarCategoria')}>Voltar</h2>
                    <div className='botaoCategoria'>
                        <h1 className='categoria' onClick={()=>this.props.mudaIndexGeografia(this.geraIndexGeografia(dataGeografiaHistoria))}>Clique para iniciar</h1>
                    </div>
                </div>
             )
        }
        if(dataGeografiaHistoria.length === 0){
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
        if(this.props.indexGeografia !== '' && dataGeografiaHistoria.length > 0){
        
            if(this.props.perguntasGeografiaFeitas.includes(dataGeografiaHistoria[this.props.indexGeografia].pergunta) === false){
               
               
                return(
                    <div className='base'>
                        <h2 className='voltar' onClick={()=>{
                            
                            this.props.mudaRespostaGeografia('Resposta:')
                            this.props.mudaIndexGeografia(this.geraIndexGeografia(dataGeografiaHistoria))
                            this.props.perguntasGeografiaFeitas.push(dataGeografiaHistoria[this.props.indexGeografia].pergunta)
                            dataGeografiaHistoria.splice(this.props.indexGeografia, 1)
                            localStorage.setItem('geografiaHistoria', JSON.stringify(dataGeografiaHistoria))
                            this.props.mudaMensagem('SelecionarCategoria')
                            
                            }}>Voltar</h2>
                        
                        <div className='botaoCategoria'>
                            <h1 className='pergunta' >{dataGeografiaHistoria[this.props.indexGeografia].pergunta}</h1>
                            <h1 className='resposta' onClick={()=>this.props.mudaRespostaGeografia(dataGeografiaHistoria[this.props.indexGeografia].resposta)}>{this.props.respostaGeografia}</h1>
                            
                        </div>
                        <Timer/>      
                    </div>
            )
            }

        }}catch(e){
        }
        
    }

}
const mapStateToProps = state =>{
    let mensagem = state.AppReducer.mensagem
    let indexGeografia = state.AppReducer.indexGeografia
    let perguntasGeografiaFeitas = state.AppReducer.perguntasGeografiaFeitas
    let respostaGeografia = state.AppReducer.respostaGeografia
    let optJogo = state.AppReducer.optJogo
    return{
        mensagem,
        indexGeografia,
        perguntasGeografiaFeitas, 
        respostaGeografia,
        optJogo
    }
}

export default connect(mapStateToProps, {mudaIndexGeografia, mudaRespostaGeografia, mudaMensagem, })(Start)