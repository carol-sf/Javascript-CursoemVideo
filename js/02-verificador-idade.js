function verificar() {
    var inpAno = document.querySelector('#inpAno');
    var divResp = document.querySelector('#divResp');
    var radSex = document.getElementsByName('radSex');

    var dataAtual = new Date();
    var anoAtual = dataAtual.getFullYear();
    if(inpAno.value == 0 || inpAno.value > anoAtual) {
        alert('Verifique os dados e tente novamente');
    } else {
        var idade = anoAtual - Number(inpAno.value);
        var genero = '';
        var imagem = document.createElement('img');
        imagem.setAttribute('id', 'imagem');

        if(radSex[0].checked) {
            genero = 'homem';
            if(idade >= 0 && idade < 10) {
                imagem.setAttribute('src', './img/homem-crianca.png');
            } else if(idade < 21) {
                imagem.setAttribute('src', './img/homem-jovem.png');
            } else if(idade < 50) {
                imagem.setAttribute('src', './img/homem-adulto.png');
            } else if(idade < 200) {
                imagem.setAttribute('src', './img/homem-idoso.png');
            } else {
                imagem.setAttribute('src', './img/caveira.png');
            }
        } else if(radSex[1].checked) {
            genero = 'mulher';
            if(idade >= 0 && idade < 10) {
                imagem.setAttribute('src', './img/mulher-crianca.png');
            } else if(idade < 21) {
                imagem.setAttribute('src', './img/mulher-jovem.png');
            } else if(idade < 50) {
                imagem.setAttribute('src', './img/mulher-adulto.png');
            } else if(idade < 200) {
                imagem.setAttribute('src', './img/mulher-idoso.png');
            } else {
                imagem.setAttribute('src', './img/caveira.png');
            }
        }
        divResp.innerHTML = `<p class="subtitulo">Detectamos ${genero} de ${idade} anos<p>`;
        divResp.style.textAlign = 'center';
        divResp.appendChild(imagem);
    }
}