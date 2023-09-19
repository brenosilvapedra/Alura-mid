function Som (idAudio) {
    document.querySelector(idAudio).play();
}



const teclas = document.querySelectorAll('.tecla'); // "Table" com todas as teclas

let n = 0;

while ( n < 9) {    // Aumenta o valor de n até 9
    
    const instrumento = teclas[n].classList[1]; // Busca a segunda classe do elemento e retorna em string


    teclas[n].onclick = function () {
        Som('#som_'+instrumento );
    }
    
    n = n + 1;

    console.log(n);
}


