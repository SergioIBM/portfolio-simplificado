
/*
- Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html 
  Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele 
  Passo 2 - identificar o clique no botão 
  Passo 3 - adicionar a classe "ativo" nos projetos escondidos 

- Objetivo 2 - esconder o botão de mostrar mais 
  Passo 1 - pegar o botão e esconder ele *
*/


const btnMostrarProjetos = document.querySelector('.btn-mostrar-projetos')
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)')

btnMostrarProjetos.addEventListener('click', () => {mostrarMaisProjetos(); esconderBotao()});   

function mostrarMaisProjetos () {
  projetosInativos.forEach(element => { element.classList.add('ativo')})
}

function esconderBotao() {
  btnMostrarProjetos.classList.add('remover')
}
    
    // btnMostrarProjetos.textContent = "Mostrar menos";
    // btnMostrarProjetos.removeEventListener('click', () => {});
    // projetosInativos.forEach(element => { element.classList.add('ativo','menos')
  
    // btnMostrarProjetos.addEventListener('click', () => {
    //   const projetosMais = document.querySelectorAll('.menos')
    // projetosMais.forEach(element => { element.classList.remove('ativo','menos')  })})
    

// https://www.youtube.com/watch?v=VTu1kJX52mU