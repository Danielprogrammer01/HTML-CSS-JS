//dom

const horas = document.querySelector('#horas')
const minutos = document.querySelector('#minutos')
const segundos = document.querySelector('#segundos')
const imagem = document.querySelector('#imagem')
const saudacao = document.querySelector('#saudacao')
const dia = document.querySelector('#dia')
const mes = document.querySelector('#mes')
const ano = document.querySelector('#ano')

//eventos

setInterval(relogio, 1000)

//funções

function relogio(){

    let tempo = new Date()
    let hr = tempo.getHours()
    let min = tempo.getMinutes()
    let seg = tempo.getSeconds()
    let d = tempo.getDate()
    let m = tempo.getMonth() + 1
    let a = tempo.getFullYear()

    if(hr<10){
        hr="0"+hr
    }

    if(min<10){
        min="0"+min
    }

    if(seg<10){
        seg="0"+seg
    }

    if(d<10){
        d="0"+d
    }

    if(m<10){
        m="0"+m
    }

    
    if (hr>=5 && hr<18) {
        imagem.src = "images/sol.png"
    } else {
        imagem.src = "images/lua.png"
    }

    
    dia.textContent = d 
    mes.textContent = m 
    ano.textContent = a
    horas.textContent = hr
    minutos.textContent = min
    segundos.textContent = seg
    
    if(hr>=5 && hr<12){
        saudacao.textContent = "Bom dia!"
    }
    else if (hr>=12 && hr<18){
        saudacao.textContent = "Boa Tarde!"
    } 
    else {
        saudacao.textContent =  "Boa Noite!"
    }
    
}