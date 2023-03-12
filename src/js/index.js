// OBJETIVO - quando clicarmos no botão temos que mostras a imagem de fundo correspondente

// PASSO 1 - dar um jeito de pegar o elemento HTML dos botôes

// PASSO 2 - dar um jeito de identificar o clique do usuário no botão

// PASSO 3 - desmarcar o botão selecionado anterior

// PASSO 4 - marcar o botão clicando como se estivesse selecionada

// PASSO 5 - esconder a imagem de fundo anterior

// PASSO 6 - fazer aparecer a imagem de fundo correspondente ao botao clicando
//****************************************************************************** */

// PASSO 1 - dar um jeito de pegar o elemento HTML dos botôes

const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

// PASSO 2 - dar um jeito de identificar o clique do usuário no botão

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        // PASSO 3 - desmarcar o botão selecionado anterior
        desativarBotaoSelecionado();

        // PASSO 4 - marcar o botão clicando como se estivesse selecionado

        selecionarBotaoCarrossel(botao);

        // PASSO 5 - esconder a imagem de fundo anterior

        esconderImagemAtiva();

        // PASSO 6 - fazer aparecer a imagem de fundo correspondente ao botao clicando

        mostrarimagemDeFundo(indice);

    })
})


function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function mostrarimagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

