//dom

//relogio
const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

//calculadora
const nome = document.querySelector('#nome')
const peso = document.querySelector('#peso')
const altura = document.querySelector('#altura')
const botao = document.querySelector('#botao')
const resultado = document.querySelector('#resultado')
const imagem = document.querySelector('#imagem')


//tema
const claro = document.querySelector('#claro')
const escuro = document.querySelector('#escuro')
const fundo = document.querySelector('body')

//eventos e funções

setInterval(()=>{ 

let tempo = new Date()
let hr = tempo.getHours()
let min = tempo.getMinutes()
let s = tempo.getSeconds()

if(hr<10)
{
    hr = '0'+ hr
}

if(min<10)
{
    min = '0'+ min
}

if(s<10)
{
    s = '0'+ s
}

horas.textContent = hr
minutos.textContent = min
segundos.textContent = s

} , 1000)


botao.addEventListener('click', ()=>{
    
    p = peso.value
    a = altura.value/100

    imc = p / (a**2)

    if (imc<18.5) {

        situacao = "BAIXO PESO"
        imagem.className = 'magro'
       // imagem.src = 'files/imc-baixo.jpg'

    } 
    
    if(imc>18.5 && imc<24.9){
        situacao = "PESO IDEAL"
        imagem.className = 'malhado'
    }
    
    if (imc>=25 && imc<29.9) {
        situacao = "SOBREPESO"
        imagem.className = 'gordo'
    }
    if (imc>30 && imc<34.9) {
        
        situacao = "OBESIDADE GRAU 1"
        imagem.className = 'gordo'
    }
    if (imc>35 && imc<39.9) {
        situacao = "OBESIDADE GRAU 2"
        imagem.className = 'gordo'
    }
    if (imc>=40) {
        situacao = "OBESIDADE EXTREMA!"
        imagem.className = 'gordo'
    }

    resultado.textContent = `${nome.value}, o seu IMC é de ${imc.toFixed(2)}. Você está com ${situacao}`

})

claro.addEventListener('click', ()=>{

    fundo.className = 'claro'
})

escuro.addEventListener('click', ()=>{

    fundo.className = 'escuro'
})



