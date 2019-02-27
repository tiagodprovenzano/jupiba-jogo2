import React, {Component} from 'react';
import { connect } from 'react-redux';
import {biblia} from '../reducers/perguntas'
import Timer from '../components/Timer.js'

import {mudaIndexBiblia, mudaRespostaBiblia, mudaMensagem} from '../actions/AppActions.js'

export class Biblia extends Component{
    componentWillMount(){
        if(this.props.optJogo === 'continuar'){ 
            console.log(localStorage.getItem('biblia'))
        }
    }
    
    geraIndexBiblia(dataBiblia){
        //console.log(Object.keys(dataBiblia))
        let i = Math.floor(Math.random()*(dataBiblia.length-1))
        if(this.props.indexBiblia !== i){
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
                if (dataBiblia.length - 2 < 0){
                   // console.log('retorno foi = 1')
                    return 1
                }else{
                   // console.log('retorno foi =' + (dataBiblia.length-2))
                    return (dataBiblia.length-2)
                }
            }
        }
        }
    
        render(){
            let dataBiblia = []
            if(this.props.optJogo === 'novo'){
                dataBiblia = biblia
            }
            if(this.props.optJogo === 'continuar'){
                dataBiblia = JSON.parse(localStorage.getItem('biblia'))
            }
            if(this.props.indexBiblia === ''){
                return (
                    <div className='base'>
                        <h2 className='voltar' onClick={()=>this.props.mudaMensagem('SelecionarCategoria')}>Voltar</h2>
                        <div className='botaoCategoria'>
                            <h1 className='categoria' onClick={()=>this.props.mudaIndexBiblia(this.geraIndexBiblia(dataBiblia))}>Clique para iniciar</h1>
                        </div>
                    </div>
                 )
            }
            if(dataBiblia.length === 0){
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
            if(this.props.indexBiblia !== '' && dataBiblia.length > 0){
            
                if(this.props.perguntasBibliaFeitas.includes(dataBiblia[this.props.indexBiblia].pergunta) === false){
                   
                   
                    return(
                        <div className='base'>
                        <h2 className='voltar' onClick={()=>{
                            
                            this.props.mudaRespostaBiblia('Resposta:')
                            this.props.mudaIndexBiblia(this.geraIndexBiblia(dataBiblia))
                            this.props.perguntasBibliaFeitas.push(dataBiblia[this.props.indexBiblia].pergunta)
                            dataBiblia.splice(this.props.indexBiblia, 1)
                            localStorage.setItem('biblia', JSON.stringify(dataBiblia))
                            this.props.mudaMensagem('SelecionarCategoria')
                            
                            }}>Voltar</h2>
                        <div className='botaoCategoria'>
                            <h1 className='pergunta' >{dataBiblia[this.props.indexBiblia].pergunta}</h1>
                            <h1 className='resposta' onClick={()=>this.props.mudaRespostaBiblia(dataBiblia[this.props.indexBiblia].resposta)}>{this.props.respostaBiblia}</h1>
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
    let indexBiblia = state.AppReducer.indexBiblia
    let perguntasBibliaFeitas = state.AppReducer.perguntasBibliaFeitas
    let respostaBiblia = state.AppReducer.respostaBiblia
    let optJogo = state.AppReducer.optJogo
    return{
        mensagem,
        indexBiblia,
        perguntasBibliaFeitas, 
        respostaBiblia, 
        optJogo
    }
}

export default connect(mapStateToProps, {mudaIndexBiblia, mudaRespostaBiblia, mudaMensagem})(Biblia)