function gerarTabuada() {
    let selTabuada = document.querySelector('#selTabuada');
    let opTitulo = document.querySelector('#opTitulo');
    let cmbTipoTabuada = document.querySelector('#cmbTipoTabuada');
    
    if (inpNum.value != '') {
        let inpNum = document.querySelector('#inpNum');
        let num = Number(inpNum.value);
        let tipoTabuada = cmbTipoTabuada.options[cmbTipoTabuada.selectedIndex].value;
        let result = 0;
        let sinal = '';

        selTabuada.innerHTML = '';
        for (let i = 1; i <= 10; i++) {
            switch (tipoTabuada) {
                case "soma":
                    result = num + i;
                    sinal = "+";
                    break;
                case "subtracao":
                    result = num - i;
                    sinal = "-";
                    break;
                case "multiplicacao":
                    result = num * i;
                    sinal = "x";
                    break;
                case "divisao":
                    result = num / i;
                    sinal = "/";
                    break;
            }
            let item = document.createElement('option');
            item.text = `${num} ${sinal} ${i} = ${result}`
            item.value = `item${i}`;
            selTabuada.appendChild(item);
        }
    } else {
        alert('Por favor, informe um número.')
    }
}