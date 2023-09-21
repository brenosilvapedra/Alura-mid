const teclas = document.querySelectorAll('.tecla'); // "Table" com todas as teclas

let n = 0; // Declara a variavel n para ser usada na verificação

while ( n < 9) {    // Aumenta o valor de n até 9
    
    function Som (idAudio) {
        document.querySelector(idAudio).play();
    }
    
    const instrumento = teclas[n].classList[1]; // Busca a segunda classe do elemento e retorna em string


    teclas[n].onclick = function () { // Identifica o instrumento a ser tocado
        Som('#som_'+instrumento );
    }
    
    n += 1; // Aumenta o valor de n de 1 em 1 para evitar um loop infinito

    console.log(n);
}


