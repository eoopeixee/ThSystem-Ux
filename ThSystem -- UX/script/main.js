$(document).ready(function(){
    // acompanhamento do menu ativo
    $('body').scrollspy({ target: '#main-area' })

    //inclusão remoção backdrop
    $('#menuControl').on('click', function (e) {
        e.preventDefault();
        $('html').toggleClass('backdrop');
    });
    
    $('html, body').on('click', function (e) {
        if (e.target == document.documentElement) {
            e.preventDefault();
            if ($(window).width() < 991) {
                $('#menuControl').click();
            }
        }
    });

    //reclusão menu pos click nav
    $('.nav-link').on('click', function () {
        $('#menuPage').removeClass('show');
        $('html').removeClass('backdrop');
    });

 
    //rolagem suave
    $('#menuPage .nav a[href^="#"]').click(function(e){
        e.preventDefault();
        var id = $(this).attr('href'),
            targetOffset = $(id).offset().top;
            // menuHeight = $('nav').innerHeight();
        $('html, body').animate({
            scrollTop: targetOffset
        }, 600);
    });
    
})

// maskara de telefone
var CelMaskBehavior = function (val) {
    return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
},
    spOptions = {
        onKeyPress: function (val, e, field, options) {
            field.mask(CelMaskBehavior.apply({}, arguments), options);
    }
};

$('.celphones').mask(CelMaskBehavior, spOptions);