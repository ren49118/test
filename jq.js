$('document').ready(function() {
	$('.about-text').hide();
	$('#about').show();
	$('#latest').hide();
	$('#popular').hide();
	$('#feedback').hide();
	$('#latestBtn').click(function() {
		$('#about').hide(1000);
		$('#latest').show(1000);
		$('#popular').hide(1000);
		$('#feedback').hide(1000);
	});
	$('#popularBtn').click(function() {
		$('#about').hide(1000);
		$('#latest').hide(1000);
		$('#popular').show(1000);
		$('#feedback').hide(1000);
	});
	$('#feedbackBtn').click(function() {
		$('#about').hide(1000);
		$('#latest').hide(1000);
		$('#popular').hide(1000);
		$('#feedback').show(1000);	
	});
	$('#aboutBtn').click(function() {
		$('#about').show(1000);
		$('#latest').hide(1000);
		$('#popular').hide(1000);
		$('#feedback').hide(1000);	
	});
	$('.continue').click(function() {
		$('.about-text').slideToggle("slow");
	});
	$('#shoe').mouseover(function() {
		$('#shoe').attr('src','image/shoe3.webp');
	});
	$('#shoe').mouseleave(function() {
		$('#shoe').attr('src','image/shoe4.jpg');
	});
	$('#glove').mouseover(function() {
		$('#glove').attr('src','image/g-mouseleave.webp');
	});
	$('#glove').mouseleave(function() {
		$('#glove').attr('src','image/glove2.jpg');
	});
	$('#sport').mouseover(function() {
		$('#sport').attr('src','image/sport1.webp');
	});
	$('#sport').mouseleave(function() {
		$('#sport').attr('src','image/glove3.jpg');
	});
	$('#navbar-latest').click(function() {
		$('#about').hide(1000);
		$('#latest').hide(1000);
		$('#popular').hide(1000);
		$('#feedback').show(1000);	
	})
	$('#navbar-about').click(function() {
		$('#about').show(2000);
		$('#latest').hide(1000);
		$('#popular').hide(1000);
		$('#feedback').hide(1000);
	});
	$('#navbar-latest').click(function() {
		$('#about').hide(1000);
		$('#latest').show(1000);
		$('#popular').hide(1000);
		$('#feedback').hide(1000);
	});
	$('#navbar-popular').click(function() {
		$('#about').hide(1000);
		$('#latest').hide(1000);
		$('#popular').show(1000);
		$('#feedback').hide(1000);
	});
	$('.test').hide();
	$('#check').click(function() {
		$('.test').slideToggle("slow");
		// $(".animate").animate({margin-left: '25px'},"slow");
	});
});
