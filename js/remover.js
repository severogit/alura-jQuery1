function removeLinha(){
$(".botao-remover").click(function(event){
    event.preventDefault();
    $(this).parent().parent().remove();
});
}