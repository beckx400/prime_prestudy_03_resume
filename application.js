$(document).ready(function(){
	$('button').on('mouseenter', function(){
		$(this).animate({'padding': '40px', 'opacity': 1, 'font-size': '45px'}, 300)
	});
	$('button').on('mouseleave', function(){
		$(this).animate({'padding': '5px', 'font-size': '30px'}, 300)
	});
	$('button').on('click', function(){
		$('main').animate({'opacity': 1})
		$('button').hide();
	});
	$('.work-title').on('click', function(){
		$(this).siblings('.work-content').slideToggle();
	});
});
	