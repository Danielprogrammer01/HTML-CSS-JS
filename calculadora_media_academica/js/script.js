//dom

const nome = document.querySelector('#nome')
const nota1 = document.querySelector('#nota1')
const nota2 = document.querySelector('#nota2')
const nota3 = document.querySelector('#nota3')
const botao = document.querySelector('#botao')
const resultado = document.querySelector('#resultado')


//evento e funcao

botao.addEventListener('click', ()=>{

    n1 = Number(nota1.value)
    n2 = Number(nota2.value)
    n3 = Number(nota3.value)

    media = (n1 + n2 + n3) / 3

    if (media>=5) {

        situacao = 'APROVADO!'

    } else {
        
        situacao = 'EM RECUPERAÇÃO!'
    }
    

    if (n1 == 0 || n2 == 0 || n3 == 0) {

        resultado.textContent = `Preencha todos os dados!`

    }
    else{

        resultado.textContent = `${nome.value}, sua média foi de ${media.toFixed(1)} pontos. Você está ${situacao}`

    }
    
})