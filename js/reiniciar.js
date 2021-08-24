function reiniciaJogo(){

    console.log("clik");
    campo.attr("disabled", false);
    campo.val(" ");
    $("#contador-palavras").text("0");
    $("#contador-caracteres").text("0");
    $("#tempo-digitacao").text(tempoInicial);
    inicializaCronometro();
    campo.toggleClass("campo-desativado");
    };
