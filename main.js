$(document).ready(function() {
    $('#adicionar-tarefa').click(function() {
        $('form').slideDown();
    })

    $('#botao-apagar').click(function() {
        $("li").remove();
        alert('Todas as tarefas foram apagadas')
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit',function(e) {
        e.preventDefault();
        const novaTarefa = $('#tarefa').val();
        const novoItem = $('<li></li>');
        $(`<li>${novaTarefa}</li>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');

        $("li").click(function() {
            $(this).addClass("tarefa-concluida");
        });
        $('#tarefa').val("");
    
    })
})