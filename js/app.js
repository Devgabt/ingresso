// Definindo a quantidade inicial de ingressos disponíveis para cada tipo
let pista = 100;
let cadeiraSuperior = 200;
let cadeiraInferior = 400;

function comprar() {
    // Referenciando o tipo do ingresso selecionado pelo usuário
    let tipoIngresso = document.getElementById('tipo-ingresso').value;

    // Convertendo a quantidade de ingressos desejada para um número inteiro
    let quantidadeIngresso = parseInt(document.getElementById('qtd').value);

    // Referenciando os elementos HTML que exibem a quantidade disponível de ingressos
    let quantidadeDisponivelPista = document.getElementById('qtd-pista');
    let quantidadeDisponivelSuperior = document.getElementById('qtd-superior');
    let quantidadeDisponivelInferior = document.getElementById('qtd-inferior');

    // Mensagem a ser exibida caso a quantidade solicitada seja maior do que a disponível
    let ingressosIndisponiveis = 'Não há ingressos disponíveis o suficiente.';

    // Verificando se a quantidade solicitada excede a quantidade disponível para o tipo de ingresso selecionado
    if(tipoIngresso == 'pista' && quantidadeIngresso > pista){
        alert(ingressosIndisponiveis);
        return; // Interrompe a execução da função se a quantidade for insuficiente
    } else if(tipoIngresso == 'superior' && quantidadeIngresso > cadeiraSuperior){
        alert(ingressosIndisponiveis);
        return;
    } else if(tipoIngresso == 'inferior' && quantidadeIngresso > cadeiraInferior){
        alert(ingressosIndisponiveis);
        return;
    }

    // Atualizando a quantidade disponível de ingressos com base na compra
    if (tipoIngresso == 'pista') {
        pista = pista - quantidadeIngresso; // Subtrai a quantidade comprada do total disponível
        quantidadeDisponivelPista.textContent = `${pista}`; // Atualiza a exibição da quantidade disponível
    } else if(tipoIngresso == 'superior') {
        cadeiraSuperior = cadeiraSuperior - quantidadeIngresso;
        quantidadeDisponivelSuperior.textContent = `${cadeiraSuperior}`;
    } else if (tipoIngresso == 'inferior') {
        cadeiraInferior = cadeiraInferior - quantidadeIngresso;
        quantidadeDisponivelInferior.textContent = `${cadeiraInferior}`;
    }
}
