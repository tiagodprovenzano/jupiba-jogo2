import React, {Component} from 'react';
import { connect } from 'react-redux';
import {esportes} from '../reducers/perguntas'
import Timer from '../components/Timer.js'

import {mudaIndexEsporte, mudaRespostaEsporte, mudaMensagem} from '../actions/AppActions.js'

export class Esportes extends Component{
    componentWillMount(){
        if(this.props.optJogo === 'continuar'){ 
            console.log(localStorage.getItem('esportes'))
        }
    }
    
    geraIndexEsporte(dataEsportes){
        //console.log(Object.keys(dataEsportes))
        let i = Math.floor(Math.random()*(dataEsportes.length-1))
        if(this.props.indexEsporte !== i){
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
                if (dataEsportes.length - 2 < 0){
                   // console.log('retorno foi = 1')
                    return 1
                }else{
                   // console.log('retorno foi =' + (dataEsportes.length-2))
                    return (dataEsportes.length-2)
                }
            }
        }
        }
    
        render(){
            let dataEsportes = []
            if(this.props.optJogo === 'novo'){
                dataEsportes = esportes
            }
            if(this.props.optJogo === 'continuar'){
                dataEsportes = JSON.parse(localStorage.getItem('esportes'))
            }
            if(this.props.indexEsporte === ''){
                return (
                    <div className='base'>
                        <h2 className='voltar' onClick={()=>this.props.mudaMensagem('SelecionarCategoria')}>Voltar</h2>
                        <div className='botaoCategoria'>
                            <h1 className='categoria' onClick={()=>this.props.mudaIndexEsporte(this.geraIndexEsporte(dataEsportes))}>Clique para iniciar</h1>
                        </div>
                    </div>
                 )
            }
            if(dataEsportes.length === 0){
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
            if(this.props.indexEsporte !== '' && dataEsportes.length > 0){
            
                if(this.props.perguntasEsporteFeitas.includes(dataEsportes[this.props.indexEsporte].pergunta) === false){
                   
                   
                    return(
                        <div className='base'>
                        <h2 className='voltar' onClick={()=>{
                            
                            this.props.mudaRespostaEsporte('Resposta:')
                            this.props.mudaIndexEsporte(this.geraIndexEsporte(dataEsportes))
                            this.props.perguntasEsporteFeitas.push(dataEsportes[this.props.indexEsporte].pergunta)
                            dataEsportes.splice(this.props.indexEsporte, 1)
                            localStorage.setItem('esportes', JSON.stringify(dataEsportes))
                            this.props.mudaMensagem('SelecionarCategoria')
                            
                            }}>Voltar</h2>
                        <div className='botaoCategoria'>
                            <h1 className='pergunta' >{dataEsportes[this.props.indexEsporte].pergunta}</h1>
                            <h1 className='resposta' onClick={()=>this.props.mudaRespostaEsporte(dataEsportes[this.props.indexEsporte].resposta)}>{this.props.respostaEsporte}</h1>
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
    let indexEsporte = state.AppReducer.indexEsporte
    let perguntasEsporteFeitas = state.AppReducer.perguntasEsporteFeitas
    let respostaEsporte = state.AppReducer.respostaEsporte
    let optJogo = state.AppReducer.optJogo
    return{
        mensagem,
        indexEsporte,
        perguntasEsporteFeitas, 
        respostaEsporte, 
        optJogo
    }
}

export default connect(mapStateToProps, {mudaIndexEsporte, mudaRespostaEsporte, mudaMensagem})(Esportes)