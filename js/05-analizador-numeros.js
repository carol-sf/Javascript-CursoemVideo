let vetor = [];
let inpNum = document.querySelector('#inpNum');
let selVetor = document.querySelector('#selVetor');
let divAnalize = document.querySelector('#divAnalize');

function adicionar() {
    let opTitulo = document.querySelector('#opTitulo');
    let num = Number(inpNum.value);
    divAnalize.innerHTML = '';
    if(validar(num)) {
        vetor.push(num);    
        let item = document.createElement('option');
        item.text = `Valor ${num} adicionado`;
        item.value = `${num}`;
        selVetor.appendChild(item);
        opTitulo.style.color = '#FFCC00';
    }
    inpNum.value = '';
    inpNum.focus();
}

function validar(pNum) {
    if(inpNum.value == '') {
        alert('Por favor, insira um número.');
        return false;
    }
    if(pNum < 1 || pNum > 100) {
        alert('Valor inválido. Por favor, digite um número entre 1 e 100.');
        return false;
    }
    if(vetor.indexOf(pNum) != -1) {
        alert('O valor já se encontra na lista');
        return false;
    }
    return true;
}

function limpar() {
    selVetor.innerHTML = `<option value="titulo" id="opTitulo">Seu vetor &#128513</option>`;    
    divAnalize.innerHTML = '';    
    vetor = [];
}

function analizar() {
    if(vetor.length != 0) {
        divAnalize.innerHTML = '';    
        divAnalize.innerHTML += '<p class="tituloAnalize">Sua análise:</p>';
        divAnalize.innerHTML += `<p>- Ao todo temos <strong class="destaque">${vetor.length}</strong> números cadastrados.</p>`;
        divAnalize.innerHTML += `<p>- O maior número informado foi <strong class="destaque">${maior()}</strong>.</p>`;
        divAnalize.innerHTML += `<p>- O menor número informado foi <strong class="destaque">${menor()}</strong>.</p>`;
        divAnalize.innerHTML += `<p>- Somando todos os valores temos <strong class="destaque">${soma()}</strong>.</p>`;
        divAnalize.innerHTML += `<p>- A média dos valores digitados é <strong class="destaque">${media()}</strong>.</p>`;
    } else {
        alert('Não há nenhum valor no vetor.');
    }
}

function maior() {
    let vetorAux = vetor;
    vetorAux.sort();
    return vetorAux[vetorAux.length - 1];
}

function menor() {
    let vetorAux = vetor;
    vetorAux.sort();
    return vetorAux[0];
}

function soma() {
    let soma = 0;
    vetor.forEach(e => {
        soma += e;
    });
    return soma;
}

function media() {
    return soma() / vetor.length;
}