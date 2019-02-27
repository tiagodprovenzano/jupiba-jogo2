import React, {Component} from 'react';
import { connect } from 'react-redux';
import Geografia from './Start.js'
import Esportes from './Esportes.js'
import Biblia from './Biblia.js'
import Atualidades from './Atualidades.js'
import Cinema from './Cinema.js'
import {mudaMensagem, mudaOptJogo, mudaBackground} from '../actions/AppActions.js'

export class SelecionarCategoria extends Component{
    componentWillMount(){
    }
    _setBackground(type){
    if(type === this.props.background){
        return '#7FB2FE'
    }
    else{
        return null
    }
    }
    render(){
        if(this.props.mensagem === 'inicial'){
            return(
            <div className='base' style={{backgroundColor:'#ffffff'}}>
            <div className='botaoCategoria' style={{marginTop:'-10pt'}}>
                <h2 className='categoria' 
                    style={{ backgroundColor:this._setBackground('continuar')}}
                    onMouseOver={()=> 
                        {
                            this.props.mudaBackground('continuar')
                    }}
                
                    onMouseOut={()=> this.props.mudaBackground('')}
                    onClick={()=>{
                        this.props.mudaOptJogo('continuar')
                        this.props.mudaMensagem('SelecionarCategoria')}
                    
                    }
                    >Continuar jogo</h2>
                <h2 className='categoria' 
                    style={{ backgroundColor:this._setBackground('novo')}}
                    onMouseOver={()=> 
                        {
                            this.props.mudaBackground('novo')
                    }}
                
                    onMouseOut={()=> this.props.mudaBackground('')}
                    onClick={()=>{
                        this.props.mudaOptJogo('novo')
                        this.props.mudaMensagem('SelecionarCategoria')}
                    }
                    >Novo jogo</h2>
                <img style={{marginTop:100}} src={require('../imgs/triviaLogo.png')}/>    
            </div>
            </div>
            )
        }
        if(this.props.mensagem === 'SelecionarCategoria'){
            return(
                <div className='base'>
                    <h1 className='voltar'>Escolha uma categoria:</h1>
                    <div className='botaoCategoria' style={{marginTop:'-10pt'}}>
                        <h2 style={{ backgroundColor:this._setBackground('Geografia')}}
                            onMouseOver={()=> 
                            {
                            this.props.mudaBackground('Geografia')
                            }}
                            onMouseOut={()=> this.props.mudaBackground('')}className='categoria' onClick={()=>this.props.mudaMensagem('Geografia')}>Geografia e História</h2>
        
                        <h2 style={{ backgroundColor:this._setBackground('Esportes')}}
                            onMouseOver={()=> 
                            {
                            this.props.mudaBackground('Esportes')
                            }}
                            onMouseOut={()=> this.props.mudaBackground('')} className='categoria' onClick={()=>this.props.mudaMensagem('Esportes')}>Esportes</h2>
                        <h2 style={{ backgroundColor:this._setBackground('Biblica')}}
                            onMouseOver={()=> 
                            {
                            this.props.mudaBackground('Biblica')
                            }}
                            onMouseOut={()=> this.props.mudaBackground('')} className='categoria' onClick={()=>this.props.mudaMensagem('Biblica')}>Bíblia</h2>
                        <h2 style={{ backgroundColor:this._setBackground('atualidade')}}
                            onMouseOver={()=> 
                            {
                            this.props.mudaBackground('atualidade')
                            }}
                            onMouseOut={()=> this.props.mudaBackground('')} className='categoria' onClick={()=>this.props.mudaMensagem('atualidade')}>Conhecimentos Gerais</h2>
                        <h2 style={{ backgroundColor:this._setBackground('Cinema')}}
                            onMouseOver={()=> 
                            {
                            this.props.mudaBackground('Cinema')
                            }}
                            onMouseOut={()=> this.props.mudaBackground('')} className='categoria' onClick={()=>this.props.mudaMensagem('Cinema')}>Cinema</h2>
                    </div>
                </div>
            )
        }else
        if(this.props.mensagem === 'Geografia'){
            return <Geografia/>
        }
        if(this.props.mensagem === 'Biblica'){
            return <Biblia/>
        }
        if(this.props.mensagem === 'Cinema'){
            return <Cinema/>
        }
        if(this.props.mensagem === 'atualidade'){
            return <Atualidades/>
        }
        else
        if(this.props.mensagem === 'Esportes'){
            return <Esportes/>
        }
        else{
        
            return (
            <div>
                <h2 onClick={()=>this.props.mudaMensagem('SelecionarCategoria')}>Voltar</h2>
                <h1>{this.props.mensagem}</h1>
            </div>
        
                )    }
    }
}

const mapStateToProps = state => {
    let mensagem = state.AppReducer.mensagem
    let background = state.AppReducer.background
    return{
        mensagem,
        background
    }
}

export default connect(mapStateToProps, {mudaMensagem, mudaOptJogo, mudaBackground})(SelecionarCategoria)