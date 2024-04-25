$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();
        
        const inputBotaoCadastrar = $('botao-cadastrar');
        const inputNomeTarefa = $('#nome-tarefa').val();
        const novaTarefa = $('<li></li>');

        $(`<span>${inputNomeTarefa}</span>`).appendTo(novaTarefa);
        $(novaTarefa).appendTo('ul');
        tarefas.push = $(`${inputNomeTarefa}`)
        $('#nome-tarefa').val('');
})

    $('ul').click(function(e) {
        if(e.target.classList.contains('checked')){
            e.target.classList.remove('checked');
        } else {
            e.target.classList.add('checked');
        }
    })
})