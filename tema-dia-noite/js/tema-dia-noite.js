//dom

const sol = document.querySelector('#sol')
const lua = document.querySelector('#lua')
const fundo = document.querySelector('body')

//evento

sol.addEventListener('click', dia)
lua.addEventListener('click', noite)


//funcao

function dia(){

    fundo.className = 'dia'
    
}

function noite(){

    fundo.className = 'noite'
    
}