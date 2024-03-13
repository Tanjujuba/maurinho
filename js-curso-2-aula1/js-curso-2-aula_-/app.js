let listaNumeroSorteado = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

mensagemInicial();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

//Função que verificará o numero chutado pelo usuário
function verificarChute() {
    
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        exibirTextoNaTela('h1', 'Você acertou!');
        exibirTextoNaTela('p', `Você descobriu o numero secreto com ${tentativas} ${palavraTentativa}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        exibirTextoNaTela('p', numeroSecreto > chute ? 'O numero secreto é maior' : 'O numero secreto é menor');
        tentativas++;
        limparCampo();
    }   

}

function gerarNumeroAleatorio() {
    let numeroSorteado = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementosDaLista = listaNumeroSorteado.length;

    if (quantidadeElementosDaLista == numeroLimite) {
        listaNumeroSorteado = [];
    }
    //Função que verifica se determinado elemento se encontra em um array. Caso sim, retorna true. Caso não, retorna false;
    if (listaNumeroSorteado.includes(numeroSorteado)) {
        //Recursão, chamei a mesma função de novo;
        return gerarNumeroAleatorio();
    } else {
        //Função que coloca determinado elemento no final da array;
        listaNumeroSorteado.push(numeroSorteado);
        console.log(listaNumeroSorteado);
        return numeroSorteado;
    }
}


function limparCampo() {
    //Selecionei todo o input
    chute = document.querySelector('input');
    //Igualei o valor do input como uma string vazia
    chute.value = '';
}

function mensagemInicial () {

    exibirTextoNaTela('h1', 'Jogo do Numero Secreto');
    exibirTextoNaTela('p', 'Escolha um numero entre 1 e 100');

}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    mensagemInicial();
    limparCampo();
    document.getElementById('reiniciar').setAttribute('disabled', true);
};

