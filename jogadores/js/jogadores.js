//dom

const titulo = document.querySelector('#titulo')
const imagem = document.querySelector('#imagem')
const jogador1 = document.querySelector('#neymar')
const jogador2 = document.querySelector('#messi')
const jogador3 = document.querySelector('#cr7')
const jogador4 = document.querySelector('#halland ')
const jogador5 = document.querySelector('#vini')
const jogador6 = document.querySelector('#rodrygo ')

//eventos

jogador1.addEventListener('click', neymar)
jogador2.addEventListener('click', messi)
jogador3.addEventListener('click', cr7)
jogador4.addEventListener('click', halland)
jogador5.addEventListener('click', vini)
jogador6.addEventListener('click', rodrygo)

//funções

function neymar(){

    imagem.src = 'images/neymar.jpg'
    
}

function messi(){
    
    imagem.src = 'images/messi.jpg'
    
}

function cr7(){
    

    imagem.src = 'images/cr7.jpg'
    
}

function halland(){
    
    imagem.src = 'images/haaland.jpg'
    
}

function vini(){
    
    imagem.src = 'images/vini.jpg'
    
}

function rodrygo(){
    
    imagem.src = 'images/rodrygo.jpeg'

}