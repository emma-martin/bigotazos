//Ocultación pantalla de carga

$(window).on('load', cargado);
  function cargado(){
    $('.overlay').fadeOut(1000);
  }


// desplazamiento vertical scrollTo - Menú navegación

	$('.desplazar').on('click', function(){
		var objetivo = $(this).attr('href');
    $('html').animate({
			scrollTop: $(objetivo).offset().top
	    }, 1000);
	});


// Ocultación menú

var ultimoScroll = 0;

$(window).on('scroll', function(){
  var scrollRealizado = $(window).scrollTop();
  if (scrollRealizado > ultimoScroll) {
    $('#menu').addClass('oculto');
  } else {
    $('#menu').removeClass('oculto');
  }
  ultimoScroll = $(window).scrollTop();
});

// Abrir menú

$('.barras').on('click', muestraMenu);
function barrasToX() {
  $('.barras').toggleClass('open');
}
function muestraMenu(){
  $('#menu').toggleClass('abierto');
  setTimeout(barrasToX, 700);
}

//cerrar menú responsive mobile

$('#menu li a').on('click', function(){
  $("#menu").toggleClass("abierto");
  setTimeout(barrasToX, 700);
});


// Owl Carousel

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    dots: true,
    animateOut: 'fadeOut'
  });
})

//animación escritura

$(document).ready(function(){

	new TypeIt('#escritura', {
	    strings: [" O dos.", " Acoge.", " Adopta."],
	    speed: 150,
	    breakLines: false,
	    autoStart: false,
	    loop: true,
	    deleteSpeed: 130
  });
})

//animación escritura

$(document).ready(function(){

	new TypeIt('#escritura2', {
	    strings: ["Captura | Esteriliza | Suelta", " Método CES"],
	    speed: 150,
	    breakLines: false,
	    autoStart: false,
	    loop: true,
	    deleteSpeed: 130
  });
})

// Animación gato -adaptación ejemplo MagicScroll

var images = [
  "img/animation/0.gif",
  "img/animation/1.gif",
  "img/animation/2.gif",
  "img/animation/3.gif",
  "img/animation/4.gif",
  "img/animation/5.gif",
  "img/animation/6.gif",
  "img/animation/7.gif",
  "img/animation/0.gif",
  "img/animation/1.gif",
  "img/animation/2.gif",
  "img/animation/3.gif",
  "img/animation/4.gif",
  "img/animation/5.gif",
  "img/animation/6.gif",
  "img/animation/7.gif",
  "img/animation/0.gif",
  "img/animation/1.gif",
  "img/animation/2.gif",
  "img/animation/3.gif",
  "img/animation/4.gif",
  "img/animation/5.gif",
  "img/animation/6.gif",
  "img/animation/7.gif"
];

var obj = {curImg: 0};

var tween = TweenMax.to(obj, 0.5,
  {
    curImg: images.length - 1,	
    roundProps: "curImg",				
    repeat: 3,									
    immediateRender: true,			
    ease: Linear.easeNone,			
    onUpdate: function () {
        $("#gato-animado").attr("src", images[obj.curImg]);
    }
  }
);

var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({triggerElement: "#ces", duration: 900, offset: 1})
  .setTween(tween)
  .addTo(controller);



//Replace all SVG images with inline SVG - Encontrado en StackOverflow

jQuery('img.svg').each(function(){
var $img = jQuery(this);
var imgID = $img.attr('id');
var imgClass = $img.attr('class');
var imgURL = $img.attr('src');
jQuery.get(imgURL, function(data) {
    // Get the SVG tag, ignore the rest
    var $svg = jQuery(data).find('svg');
    // Add replaced image's ID to the new SVG
    if(typeof imgID !== 'undefined') {
        $svg = $svg.attr('id', imgID);
    }
    // Add replaced image's classes to the new SVG
    if(typeof imgClass !== 'undefined') {
        $svg = $svg.attr('class', imgClass+' replaced-svg');
    }
    // Remove any invalid XML tags as per http://validator.w3.org
    $svg = $svg.removeAttr('xmlns:a');
    // Replace image with new SVG
    $img.replaceWith($svg);
}, 'xml');
});


// trazado bigote hero SVGs 

new Vivus('heroSvg', {
  type: 'sync',
  duration: 200,
  file: 'img/svg/bigote_animated.svg'
});



// Animaciones Seccion Colabora

new Vivus('socios', { duration: 600, file: 'img/svg/id-card_animated.svg'});

new Vivus('voluntario', { duration: 600, file: 'img/svg/agreement_animated.svg'});

new Vivus('dona', { duration: 600, file: 'img/svg/gift_animated2.svg'});



// controles vídeo: reproducción
$('#iconoPlayVid, #playVid').on('click', function(){
  $('#iconoPlayVid').fadeOut(600);
  $('#videoPresentacion').get(0).play();
});
// controles vídeo: pausa
$('#pauseVid').on('click', function(){
  $('#iconoPlayVid').fadeIn(600);
  $('#videoPresentacion').get(0).pause();
});

// controles vídeo: recarga
$('#stopVid').on('click', function(){
  $('#iconoPlayVid').fadeIn(600);
  $('#videoPresentacion').get(0).load();
});


// Animación formulario contacto - créditos: Quick Minimal Contact Form . Erlen.co.uk

// Auto resize input
function resizeInput() {
  $(this).attr('size', $(this).val().length);
}

$('input[type="text"], input[type="email"]')
  // event handler
  .keyup(resizeInput)
  // resize on page load
  .each(resizeInput);
  console.clear();

// svg logo
new Vivus('logo', { file: 'img/svg/whiskers_menu.svg'});

//svgs sección contacto
new Vivus('saludo', { file: 'img/svg/mouse.svg'});
new Vivus('carta', {duration: 600, file: 'img/svg/love_animated.svg'});

//svgs footer
new Vivus('whiskers', {file: 'img/svg/whiskers.svg'});
new Vivus('camera', {file: 'img/svg/camera.svg'});
new Vivus('postal', {file: 'img/svg/postal.svg'});
new Vivus('laptop', {file: 'img/svg/laptop.svg'});
