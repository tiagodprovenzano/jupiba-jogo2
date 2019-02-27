import React, {Component} from 'react';
import { connect } from 'react-redux';
import {atualidades} from '../reducers/perguntas.js'
import Timer from '../components/Timer.js'

import {mudaIndexAtualidade, mudaRespostaAtualidade, mudaMensagem} from '../actions/AppActions.js'

export class Atualidades extends Component{
    componentWillMount(){
        if(this.props.optJogo === 'continuar'){ 
            console.log(localStorage.getItem('atualidade'))
        }
    }
    
    geraIndexAtualidade(dataAtualidade){
        //console.log(Object.keys(dataAtualidade))
        let i = Math.floor(Math.random()*(dataAtualidade.length-1))
        if(this.props.indexAtualidade !== i){
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
                if (dataAtualidade.length - 2 < 0){
                   // console.log('retorno foi = 1')
                    return 1
                }else{
                   // console.log('retorno foi =' + (dataAtualidade.length-2))
                    return (dataAtualidade.length-2)
                }
            }
        }
        }
    
        render(){
            let dataAtualidade = []
            if(this.props.optJogo === 'novo'){
                dataAtualidade = atualidades
            }
            if(this.props.optJogo === 'continuar'){
                dataAtualidade = JSON.parse(localStorage.getItem('atualidade'))
            }
            if(this.props.indexAtualidade === ''){
                return (
                    <div className='base'>
                        <h2 className='voltar' onClick={()=>this.props.mudaMensagem('SelecionarCategoria')}>Voltar</h2>
                        <div className='botaoCategoria'>
                            <h1 className='categoria' onClick={()=>this.props.mudaIndexAtualidade(this.geraIndexAtualidade(dataAtualidade))}>Clique para iniciar</h1>
                        </div>
                    </div>
                 )
            }
            if(dataAtualidade.length === 0){
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
            if(this.props.indexAtualidade !== '' && dataAtualidade.length > 0){
            
                if(this.props.perguntasAtualidadeFeitas.includes(dataAtualidade[this.props.indexAtualidade].pergunta) === false){
                   
                   
                    return(
                        <div className='base'>
                        <h2 className='voltar' onClick={()=>{
                            
                            this.props.mudaRespostaAtualidade('Resposta:')
                            this.props.mudaIndexAtualidade(this.geraIndexAtualidade(dataAtualidade))
                            this.props.perguntasAtualidadeFeitas.push(dataAtualidade[this.props.indexAtualidade].pergunta)
                            dataAtualidade.splice(this.props.indexAtualidade, 1)
                            localStorage.setItem('atualidade', JSON.stringify(dataAtualidade))
                            this.props.mudaMensagem('SelecionarCategoria')
                            
                            }}>Voltar</h2>
                        <div className='botaoCategoria'>
                            <h1 className='pergunta' >{dataAtualidade[this.props.indexAtualidade].pergunta}</h1>
                            <h1 className='resposta' onClick={()=>this.props.mudaRespostaAtualidade(dataAtualidade[this.props.indexAtualidade].resposta)}>{this.props.respostaAtualidade}</h1>
                        </div>
                        <Timer/>
                        </div>
                )
                }
    
            }}catch(e){
            }
            
        }
}

const mapStateToProps = state => {
    let mensagem = state.AppReducer.mensagem
    let indexAtualidade = state.AppReducer.indexAtualidade
    let perguntasAtualidadeFeitas = state.AppReducer.perguntasAtualidadeFeitas
    let respostaAtualidade = state.AppReducer.respostaAtualidade
    let optJogo = state.AppReducer.optJogo
    return{
        mensagem,
        indexAtualidade,
        perguntasAtualidadeFeitas, 
        respostaAtualidade, 
        optJogo
    }
}

export default connect(mapStateToProps, {
    mudaIndexAtualidade, 
    mudaRespostaAtualidade, 
    mudaMensagem,
})(Atualidades)