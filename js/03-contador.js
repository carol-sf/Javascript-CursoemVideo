var inpInicio = document.querySelector('#inpInicio');
var inpFim = document.querySelector('#inpFim');
var inpPasso = document.querySelector('#inpPasso');
var divResp = document.querySelector('#divResp');

function contar() {
    if(validar()) {
        var inicio = Number(inpInicio.value);
        var fim = Number(inpFim.value);
        var passo = Number(inpPasso.value);    

        if(inicio <= fim) {
            divResp.innerHTML = '<p>Contando:</p>';
            for(var i = inicio; i <= fim; i += passo) {
                divResp.innerHTML += `<span>${i}</span>`;
                divResp.innerHTML += `<span class="emoji"> &#9992 </span>`; //emoji de avião
            }
        } else {
            divResp.innerHTML = '<p>Ok! Vamos de contagem regressiva então:</p>';
            for(var i = inicio; i >= fim; i -= passo) {
                divResp.innerHTML += `<span>${i}</span>`;
                divResp.innerHTML += `<span class="emoji"> &#9992 </span>`; //emoji de avião
            }
        }
        divResp.innerHTML += `<span>&#9996</span>`; //emoji de mão fazendo o 2
    }
}

function validar() {
    if(inpInicio.value == '' || inpFim.value == '') {
        // alert('Por favor, preencha os dados de inicio e fim.');
        divResp.innerHTML = '<p>Hum... Estão faltando dados importantes aí! Por favor, preencha os dados de inicio e fim.</p>';
        return false;
    }
    if(inpPasso.value == 0 || inpPasso.value == '') {
        var confirmacao = confirm('Você deseja considerar o passo como 1?');
        if(confirmacao == true) {
            inpPasso.value = 1;
        } else {
            return false;
        }
    }
    if(inpPasso.value < 0) {
        alert('O passo não pode ser negativo. Por favor, tente novamente.');
        return false;
    }
    return true;
}