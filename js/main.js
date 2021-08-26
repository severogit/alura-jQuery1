var tempoInicial = $("#tempo-digitacao").text();
var campo = $(".campo-digitacao");
var body = $(".bodyclass");

// nesse caso -- $ é um atalho para $(document).ready

$(function(){
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
    inicializaMarcadores();
    $("#botao-reiniciar").click(reiniciaJogo);
    $("#botao-dark").click(modoDark);
    atualizaPlacar();
    $("#usuarios").selectize({
        create: true,
        sortField: 'text'
    });
});

function atualizaTempoInicial(tempo){
    tempoInicial = tempo;
    $("#tempo-digitacao").text(tempo);
}

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
    campo.one("focus", function() {
        var tempoRestante = $("#tempo-digitacao").text();
        var cronometroID = setInterval(function() {
            tempoRestante--;
            $("#tempo-digitacao").text(tempoRestante);
            if (tempoRestante < 1) {
                clearInterval(cronometroID);
                finalizaJogo();
            }
        }, 1000);
    });
    }

function finalizaJogo(){
    campo.attr("disabled", true);
    campo.toggleClass("campo-desativado");
    inserePlacar();
}

function inicializaMarcadores(){
campo.on("input",function(){
    var frase = $(".frase").text();
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

function inserePlacar(){
    var corpoTabela = $(".placar").find("tbody");
    var usuario = "svr";
    var numPalavras = $("#contador-palavras").text();

    var linha = novaLinha(usuario, numPalavras);
    linha.find(".botao-remover").click(removeLinha)

    corpoTabela.prepend(linha);
};

function novaLinha(usuario, numPalavras){
    var linha = $("<tr>");
    var colunaUsuario = $("<td>").text(usuario);
    var colunaPalavras = $("<td>").text(numPalavras);
    var colunaRemover = $("<td>");

    var link = $("<a>").addClass("botao-remover").attr("href","#");
    var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");

    link.append(icone);

    colunaRemover.append(link);

    linha.append(colunaUsuario);
    linha.append(colunaPalavras);
    linha.append(colunaRemover);
    
    return linha;
}

function modoDark(){
    console.log("clik");
    $("html,body").toggleClass("background-dark");
    $("html,body").toggleClass("fonte-dark");
    };


