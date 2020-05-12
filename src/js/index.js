import $ from 'jquery';
$(document).ready(function() {
	$('#next').click(function(e) {
		var slider = $('.slider');
		var activeSlide = $('.slider_item.active');
		var nextSlides = activeSlide.nextAll();

		if (nextSlides.length <= 1) {
			slider.children('.slider_item').first().appendTo(slider);
		}
		var nextSlide = activeSlide.next();
		activeSlide.removeClass('active');
		nextSlide.addClass('active');
	})

	$('#prev').click(function(e) {
	var slider = $('.slider');
		var activeSlide = $('.slider_item.active');
		var pervSlides = activeSlide.prevAll();
		if (pervSlides.length <= 1) {
			slider.children('.slider_item').last().prependTo(slider);
		}
		var prevSlide = activeSlide.prev();
		activeSlide.removeClass('active');
		prevSlide.addClass('active');
	})
})