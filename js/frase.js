$("#botao-frase").click(fraseAleatoria);

function fraseAleatoria(){
    $.get("http://localhost:3000/frases", trocaFraseAleatoria)
    .fail(function(){
        $("#erro").toggle();
        setTimeout(function(){
            $("#erro").toggle();
            }, 1500);
    });
}

function trocaFraseAleatoria(data){
    var frase = $(".frase");
    var numeroAleatorio = Math.ceil(Math.random() * data.length);

    frase.text(data[numeroAleatorio].texto);

    atualizaTamanhoFrase();
    atualizaTempoInicial(data[numeroAleatorio].tempo);
}