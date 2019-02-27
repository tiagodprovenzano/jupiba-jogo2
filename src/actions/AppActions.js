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
    MUDA_BACKGROUND


} from './types.js'

export const mudaMensagem = (mensagem) =>{

    return {
        type: MUDA_MENSAGEM,
        payload: mensagem
    }
}
export const mudaIndexGeografia = (num) =>{

    return {
        type: MUDA_INDEX_GEOGRAFIA,
        payload: num
    }
}
export const mudaRespostaGeografia = (resposta) =>{

    return {
        type: MUDA_RESPOSTA_GEOGRAFIA,
        payload: resposta
    }
}
export const mudaIndexEsporte = (num) =>{

    return {
        type: MUDA_INDEX_ESPORTE,
        payload: num
    }
}
export const mudaRespostaEsporte = (resposta) =>{

    return {
        type: MUDA_RESPOSTA_ESPORTE,
        payload: resposta
    }
}
export const mudaIndexBiblia = (num) =>{

    return {
        type: MUDA_INDEX_BIBLIA,
        payload: num
    }
}
export const mudaRespostaBiblia = (resposta) =>{

    return {
        type: MUDA_RESPOSTA_BIBLIA,
        payload: resposta
    }
}
export const mudaIndexCinema = (num) =>{

    return {
        type: MUDA_INDEX_CINEMA,
        payload: num
    }
}
export const mudaRespostaCinema = (resposta) =>{

    return {
        type: MUDA_RESPOSTA_CINEMA,
        payload: resposta
    }
}
export const mudaIndexAtualidade = (num) =>{

    return {
        type: MUDA_INDEX_ATUALIDADE,
        payload: num
    }
}
export const mudaRespostaAtualidade = (resposta) =>{

    return {
        type: MUDA_RESPOSTA_ATUALIDADE,
        payload: resposta
    }
}
export const mudaTimerPaused = (status) =>{
let novoStatus = !status
    return {
        type: MUDA_TIMER_PAUSED,
        payload: novoStatus
    }
}
export const countdownTimer = (time) =>{
time--
    return {
        type: MUDA_TIME,
        payload: time
    }
}
export const resetTime = () =>{

    return {
        type: RESET_TIME,
        payload: 30
    }
}
export const mudaOptJogo = (opt) =>{

    return {
        type: MUDA_OPT_JOGO,
        payload: opt
    }
}
export const mudaBackground = (txt) =>{

    return {
        type: MUDA_BACKGROUND,
        payload: txt
    }
}