function ocultar_menu() {
	$('.main-menu').animate({
		top: '-190px'
	}, 500);
	$('.bt-menu').removeClass('bt-menu2');
}

function main_menu() {
	var marcador = 1;

	$('.bt-menu').on('click', function () {
		if (marcador == 1) {
			$('.main-menu').animate({
				top: '40px'
			}, 500);
			$('.bt-menu').addClass('bt-menu2');

			marcador = 0;
		} else {
			marcador = 1;
			ocultar_menu();
		}
	});

	$("html").click(function() {
		marcador = 1;
        ocultar_menu();
    });
    $('.bt-menu').click(function (e) {
        e.stopPropagation();
    });
    $('.main-menu').click(function (e) {
        e.stopPropagation();
    });
}

window.addEventListener('load', () => {
	// Menu Responsive
	if ($(window).width() < 769) {
		main_menu();
	}
});


// Menú principal fijo
var altura = $('#main-menu').offset().top;

console.log(altura);

$(window).on('scroll', function() {
	if ($(window).width() > 768) {
		if ($(window).scrollTop() > altura + 126) {
			$('.bloque').css({
				display: 'block'
			});
			$('#main-menu').addClass('main-menu-fijo');
		} else {
			$('.bloque').css({
				display: 'none'
			});
			$('#main-menu').removeClass('main-menu-fijo');
		}
	}
});