//dom

const horas = document.querySelector('#horas')
const minutos = document.querySelector('#minutos')
const segundos = document.querySelector('#segundos')

//eventos

setInterval(relogio, 1000)

//funções

function relogio(){

    let dia = new Date()
    let hr = dia.getHours()
    let min = dia.getMinutes()
    let seg = dia.getSeconds()

    if(hr<10){
        hr="0"+hr
    }

    if(min<10){
        min="0"+min
    }

    if(seg<10){
        seg="0"+seg
    }

    horas.textContent = hr
    minutos.textContent = min
    segundos.textContent = seg
}