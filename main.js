$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();
        
        const inputBotaoCadastrar = $('botao-cadastrar');
        const inputNomeTarefa = $('#nome-tarefa').val();
        const novaTarefa = $('<li></li>');

        if (verificaSeExiste(inputNomeTarefa)) {
            alert("Tarefa jÃ¡ existe!")
            return;
        }
        
        $(`<li>${inputNomeTarefa}</li>`).appendTo(novaTarefa);
        $(novaTarefa).appendTo('ul');
        $('#nome-tarefa').val('');
})

    $('ul').click(function(e) {
        if(e.target.classList.contains('checked')){
            e.target.classList.remove('checked');
        } else {
            e.target.classList.add('checked');
        }
    })

    function verificaSeExiste(novaTarefa) {
        var existe = false;
        $('ul').find('li').each(function () {

            if ($(this).text() === novaTarefa) {
                existe = true;
                return false; // para sair da verificacao
            }

        });
        return existe;
    }
})