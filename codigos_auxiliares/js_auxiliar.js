$(document).ready(function() {

    $('.btn-mobile').click(function(){
        $('.menu-mobile').slideToggle();
    })
    
    function atualizarTamanhoTela() {
        var largura = window.innerWidth;
        var altura = window.innerHeight;
        
        if(largura >= 768) {
            $('.menu-mobile').css({'display': 'none'});
        }

    }

    // Captura o tamanho inicial da tela
    atualizarTamanhoTela();

    // Atualiza quando a tela for redimensionada
    $(window).resize(atualizarTamanhoTela);

});