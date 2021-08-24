var tempoInicial = $("#tempo-digitacao").text();
var campo = $(".campo-digitacao");

// nesse caso -- $ é um atalho para $(document).ready

$(function(){
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
    inicializaMarcadores();
    $("#botao-reiniciar").click(reiniciaJogo);
});

function atualizaTamanhoFrase(){
var frase = $(".frase").text();
var numPalavras = frase.split(" ").length;
var tamanhoFrase = $("#tamanho-frase");
tamanhoFrase.text(numPalavras);
}

function inicializaContadores(){
    campo.on("input", function() {
        var conteudo = campo.val();

        var qtdPalavras = conteudo.split(/\S+/).length - 1;
        $("#contador-palavras").text(qtdPalavras);

        var qtdCaracteres = conteudo.length;
        $("#contador-caracteres").text(qtdCaracteres);
});
}

function inicializaCronometro(){
    var tempoRestante = $("#tempo-digitacao").text();
    campo.one("focus", function() {
        var cronometroID = setInterval(function() {
            tempoRestante--;
            $("#tempo-digitacao").text(tempoRestante);
            if (tempoRestante < 1) {
                campo.attr("disabled", true);
                clearInterval(cronometroID);
                campo.toggleClass("campo-desativado");
            }
        }, 1000);
    });
    }

function inicializaMarcadores(){
var frase = $(".frase").text();
campo.on("input",function(){
    var digitado = campo.val();
    var comparavel = frase.substr(0, digitado.length);
    
    if(digitado == comparavel){
        campo.addClass("borda-azul");
        campo.addClass("borda-invisivel");
        campo.removeClass("borda-vermelha");
        campo.removeClass("borda-padrao");
    }else{
        campo.addClass("borda-vermelha");
        campo.addClass("borda-invisivel");
        campo.removeClass("borda-azul");
        campo.removeClass("borda-padrao");
        }
    });
}
