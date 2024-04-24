$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();
        
        const inputBotaoCadastrar = $('botao-cadastrar');
        const inputNomeTarefa = $('#nome-tarefa').val();
        const novaTarefa = $('<li></li>');
        $(`${inputNomeTarefa}`).appendTo(novaTarefa);
        $(novaTarefa).appendTo('ul');
    })
})