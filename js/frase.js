$("#botao-frase").click(fraseAleatoria);

function fraseAleatoria(){
    $("#spinner").show();

    $.get("http://localhost:3000/frases", trocaFraseAleatoria)
    .fail(function(){
        $("#erro").toggle();
        setTimeout(function(){
            $("#erro").toggle();
            }, 1500);
    })
    .always(function(){
        $("#spinner").toggle();
    });
}

function trocaFraseAleatoria(data){
    var frase = $(".frase");
    var numeroAleatorio = Math.ceil(Math.random() * data.length);

    frase.text(data[numeroAleatorio].texto);

    atualizaTamanhoFrase();
    atualizaTempoInicial(data[numeroAleatorio].tempo);
}