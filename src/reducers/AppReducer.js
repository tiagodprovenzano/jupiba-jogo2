import {

    MUDA_MENSAGEM,
    MUDA_INDEX_GEOGRAFIA,
    MUDA_RESPOSTA_GEOGRAFIA,
    MUDA_INDEX_ESPORTE,
    MUDA_RESPOSTA_ESPORTE,
    MUDA_TIMER_PAUSED,
    MUDA_TIME,
    RESET_TIME,
    MUDA_OPT_JOGO,
    MUDA_INDEX_BIBLIA,
    MUDA_RESPOSTA_BIBLIA,
    MUDA_INDEX_ATUALIDADE,
    MUDA_RESPOSTA_ATUALIDADE,
    MUDA_INDEX_CINEMA,
    MUDA_RESPOSTA_CINEMA,
    MUDA_BACKGROUND,

} from '../actions/types.js'

const INITIAL_STATE = {
    mensagem:'inicial',
    indexGeografia:'',
    perguntasGeografiaFeitas:[],
    respostaGeografia:'Resposta:',
    indexEsporte:'',
    perguntasEsporteFeitas:[],
    respostaEsporte:'Resposta:',
    indexBiblia:'',
    perguntasBibliaFeitas:[],
    respostaBiblia:'Resposta:',
    indexCinema:'',
    perguntasCinemaFeitas:[],
    respostaCinema:'Resposta:',
    indexAtualidade:'',
    perguntasAtualidadeFeitas:[],
    respostaAtualidade:'Resposta:',
    timerPaused:true,
    time:30,
    optJogo:'',
    background:'',
}

export default (state = INITIAL_STATE, action) =>{
    if (action.type === MUDA_MENSAGEM){
        return { ...state, mensagem: action.payload }
    }
    if (action.type === MUDA_INDEX_GEOGRAFIA){
        return { ...state,  indexGeografia: action.payload }
    }
    if (action.type === MUDA_RESPOSTA_GEOGRAFIA){
        return { ...state,  respostaGeografia: action.payload }
    }
    if (action.type === MUDA_INDEX_ESPORTE){
        return { ...state,  indexEsporte: action.payload }
    }
    if (action.type === MUDA_RESPOSTA_ESPORTE){
        return { ...state,  respostaEsporte: action.payload }
    }
    if (action.type === MUDA_INDEX_BIBLIA){
        return { ...state,  indexBiblia: action.payload }
    }
    if (action.type === MUDA_RESPOSTA_BIBLIA){
        return { ...state,  respostaBiblia: action.payload }
    }
    if (action.type === MUDA_INDEX_CINEMA){
        return { ...state,  indexCinema: action.payload }
    }
    if (action.type === MUDA_RESPOSTA_CINEMA){
        return { ...state,  respostaCinema: action.payload }
    }
    if (action.type === MUDA_INDEX_ATUALIDADE){
        return { ...state,  indexAtualidade: action.payload }
    }
    if (action.type === MUDA_RESPOSTA_ATUALIDADE){
        return { ...state,  respostaAtualidade: action.payload }
    }
    if (action.type === MUDA_TIMER_PAUSED){
        return { ...state,  timerPaused: action.payload }
    }
    if (action.type === MUDA_TIME){
        return { ...state,  time: action.payload }
    }
    if (action.type === RESET_TIME){
        return { ...state,  time: action.payload }
    }
    if (action.type === MUDA_OPT_JOGO){
        return { ...state,  optJogo: action.payload }
    }
    if (action.type === MUDA_BACKGROUND){
        return { ...state,  background: action.payload }
    }
    

    return state
}