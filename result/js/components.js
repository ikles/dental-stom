// NAV TABS
$(document).on('click', '[data-tab]', function(evt) {
	var $toggler = $(this);
	var targetId = $toggler.attr('data-tab') || $toggler.attr('href');
	var $target = $(targetId);
	if ($target.length > 0 && $target.is('.tab-pane')) {
		evt.preventDefault();
		
		$target.closest('.tab-container').find('.tab-pane').removeClass('active').trigger('tab.hide');
		$target.addClass('active').trigger('tab.show');
		
		var $siblingsLinks = $toggler.closest('ul').find('[data-tab]');
		if ($siblingsLinks.length > 0) {
			$siblingsLinks.removeClass('active').trigger('tab.hide');
			$toggler.addClass('active').trigger('tab.show');
		}
	}
});

// MAIN FIRST SLIDER
$(InitMainFirstSlider);
$(document).on("reload", function() {
	InitMainFirstSlider();
});
function InitMainFirstSlider() {
	var $swiperBlock = $('#main-first-slider:not(.js-swiper-initialized)');
	if ($swiperBlock.length > 0) {
		var swiperOpts = {
			init: true,
			loop: false,
			speed: 300,
			navigation: {
				prevEl: $swiperBlock.find('.swiper-button.prev'),
				nextEl: $swiperBlock.find('.swiper-button.next')
			},
			effect: 'fade',
			fadeEffect: {
				crossFade: true
			},
			autoplay: {
				delay: 5000,
			},
			initialSlide: 0,
			slidesPerView: 1,
			slidesPerGroup: 1,
			spaceBetween: 0,
			pagination: {
				el: $swiperBlock.find('.swiper-pagination'),
				clickable: true,
				type: 'bullets'
			}
		};
			
		var sw = new Swiper($swiperBlock.find('.swiper-container'), swiperOpts);
		$swiperBlock.data('swiper', sw).addClass('js-swiper-initialized');
	}
}

// MAIN FIRST MENU
$(InitMainFirstMenuSlider);
$(document).on("reload", InitMainFirstMenuSlider);
$(window).on("load resize resizeend", InitMainFirstMenuSlider);
function InitMainFirstMenuSlider() {
	var $swiperBlock = $('#main-first-menu');
	if ($swiperBlock.length > 0) {
		if (window.matchMedia('(min-width: 768px)').matches) {
			if ($swiperBlock.is('.js-swiper-initialized')) {
				$swiperBlock.removeClass('js-swiper-initialized').data('swiper').destroy();
			}
		}
		else {
			if ($swiperBlock.is('.js-swiper-initialized')) {
				$swiperBlock.data('swiper').update();
			}
			else {
				var swiperOpts = {
					init: true,
					loop: false,
					speed: 300,
					navigation: false,
					initialSlide: 0,
					slidesPerView: 'auto',
					slidesPerGroup: 1,
					spaceBetween: 20,
					pagination: false,
				};
				var sw = new Swiper($swiperBlock.find('.swiper-container'), swiperOpts);
				$swiperBlock.addClass('js-swiper-initialized').data('swiper', sw);
			}
		}
	}
}

// MAIN OFFERS SLIDER
$(InitMainOffersSlider);
$(document).on("reload", InitMainOffersSlider);
$(window).on("load resize resizeend", InitMainOffersSlider);
function InitMainOffersSlider() {
	var $swiperBlock = $('#main-offers-slider');
	if ($swiperBlock.length > 0) {
		if (window.matchMedia('(min-width: 768px)').matches) {
			if ($swiperBlock.is('.js-swiper-initialized')) {
				$swiperBlock.removeClass('js-swiper-initialized').data('swiper').destroy();
			}
		}
		else {
			if ($swiperBlock.is('.js-swiper-initialized')) {
				$swiperBlock.data('swiper').update();
			}
			else {
				var swiperOpts = {
					init: true,
					loop: false,
					speed: 300,
					navigation: false,
					initialSlide: 0,
					slidesPerView: 'auto',
					slidesPerGroup: 1,
					spaceBetween: 10,
					pagination: false,
				};
				var sw = new Swiper($swiperBlock.find('.swiper-container'), swiperOpts);
				$swiperBlock.addClass('js-swiper-initialized').data('swiper', sw);
			}
		}
	}
}

// CATALOG ITEM
$(document).on('mouseenter', '.catalog-item', function (evt) {
	var $item = $(this);
	$item.parent().addClass('catalog-item-fixed-wrapper').css('height', $item.innerHeight());
	$item.addClass('hover');
});
$(document).on('mouseleave', '.catalog-item', function (evt) {
	var $item = $(this);
	$item.removeClass('hover');
	$item.parent().removeClass('catalog-item-fixed-wrapper').css('height', 'auto');
});

// CATALOG SLIDER
$(InitCatalogSlider);
$(document).on("reload", InitCatalogSlider);
$(window).on("load resize resizeend", InitCatalogSlider);
function InitCatalogSlider() {
	var $sliders = $('.catalog-slider');
	if ($sliders.length > 0) {
		$sliders.each(function () {
			var $swiperBlock = $(this);
			if ($swiperBlock.length > 0) {
				if (window.matchMedia('(min-width: 768px)').matches) {
					if ($swiperBlock.is('.js-swiper-initialized')) {
						$swiperBlock.removeClass('js-swiper-initialized').data('swiper').destroy();
					}
				}
				else {
					if ($swiperBlock.is('.js-swiper-initialized')) {
						$swiperBlock.data('swiper').update();
					}
					else {
						var swiperOpts = {
							init: true,
							loop: false,
							speed: 300,
							navigation: false,
							initialSlide: 0,
							slidesPerView: 'auto',
							slidesPerGroup: 1,
							spaceBetween: 10,
							pagination: false,
						};
						var sw = new Swiper($swiperBlock.find('.swiper-container'), swiperOpts);
						$swiperBlock.addClass('js-swiper-initialized').data('swiper', sw);
					}
				}
			}
		});
	}
}

// CATALOG RECOMMENDED SLIDER
$(InitCatalogRecommendedSlider);
$(document).on("reload", InitCatalogRecommendedSlider);
function InitCatalogRecommendedSlider() {
	var $sliders = $('.catalog-recommended-slider:not(.js-swiper-initialized)');
	if ($sliders.length > 0) {
		$sliders.each(function () {
			var $swiperBlock = $(this);
			
			var swiperOpts = {
				init: true,
				loop: false,
				speed: 300,
				navigation: {
					prevEl: $swiperBlock.find('.swiper-button.prev'),
					nextEl: $swiperBlock.find('.swiper-button.next')
				},
				initialSlide: 0,
				slidesPerView: 6,
				slidesPerGroup: 1,
				spaceBetween: 30,
				pagination: {
					el: $swiperBlock.find('.swiper-pagination'),
					clickable: true,
					type: 'bullets'
				},
				breakpoints: {
					1799: {
						slidesPerView: 5
					},
					1399: {
						slidesPerView: 4
					},
					1199: {
						slidesPerView: 4,
						spaceBetween: 16,
					},
					1023: {
						slidesPerView: 3,
						spaceBetween: 16,
					},
					767: {
						slidesPerView: 'auto',
						spaceBetween: 10,
					}
				}
			};
			
			var sw = new Swiper($swiperBlock.find('.swiper-container'), swiperOpts);
			$swiperBlock.data('swiper', sw).addClass('js-swiper-initialized');
		});
	}
}

// CATALOG FILTER
$(document).on('activate', '#catalog-filter', function (evt) {
	$('body').addClass('catalog-filter-open');
});
$(document).on('deactivate', '#catalog-filter', function (evt) {
	$('body').removeClass('catalog-filter-open');
});
$(document).on('click', '.catalog-filter__item-head', function (evt) {
	var $item = $(this).closest('.catalog-filter__item');
	if ($item.is('.active')) Deactivate($item);
	else Activate($item);
});
$(document).on('click', '.catalog-filter__item-control.show', function (evt) {
	var $target = $(this).closest('.catalog-filter__item-body');
	Activate($target);
});
$(document).on('click', '.catalog-filter__item-control.hide', function (evt) {
	var $target = $(this).closest('.catalog-filter__item-body');
	Deactivate($target);
	$target.find('.catalog-filter__item-scroller').scrollTop(0);
});

// DROPDOWN
$(document).on('click', '.dropdown-toggler', function (evt) {
	evt.preventDefault();
	var $item = $(this).closest('.dropdown');
	if ($item.is('.active')) Deactivate($item, true);
	else Activate($item, true);
});

// CATALOG VIEW
$(document).on('click', '.catalog-controls__item.item--view .catalog-controls__button', function (evt) {
	evt.preventDefault();
	var $item = $(this);
	Deactivate($item.siblings('.catalog-controls__button'), false);
	Activate($item, false);
});
$(document).on('activate', '.catalog-controls__button.view--list', function (evt) {
	evt.preventDefault();
	$('#catalog-content').addClass('view--list');
});
$(document).on('deactivate', '.catalog-controls__button.view--list', function (evt) {
	evt.preventDefault();
	$('#catalog-content').removeClass('view--list');
});

// RANGE SLIDERS
$(InitRangeSliders);
$(document).on("reload", InitRangeSliders);
function InitRangeSliders() {
	var $uiRangeSliders = $('.ui-range-slider:not(.js-initialized)');
	if ($uiRangeSliders.length > 0) {
		$uiRangeSliders.each(function() {
			var $this = $(this);
			
			var minVal = +$this.attr('data-min-value') || 0;
			var maxVal = +$this.attr('data-max-value') || 100;
			var startVal = +$this.attr('data-start-value') || minVal;
			var endVal = +$this.attr('data-end-value') || maxVal;
			
			var $block = $this.closest('.range-block');
			var $minField = $block.find('[data-min-field]');
			var $maxField = $block.find('[data-max-field]');
			
			$minField.attr('placeholder', minVal).val(startVal);
			$maxField.attr('placeholder', maxVal).val(endVal);
			
			$this.slider({
				min: minVal,
				max: maxVal,
				range: true,
				step: !!$this.data('step') ? + $this.data('step') : 1,
				values: [startVal, endVal],
				slide: function(event, ui) {
					var values = ui.values;
					$minField.val(values[0]).trigger('change');
					$maxField.val(values[1]).trigger('change');
				}
			});
			
			$minField.on('keyup', function() {
				var minVal = +$minField.val() || 0;
				var values = $this.slider('values');
				$this.slider('values', [minVal, values[1]]);
			});
			$maxField.on('keyup', function() {
				var maxVal = +$maxField.val() || 0;
				var values = $this.slider('values');
				$this.slider('values', [values[0], maxVal]);
			});
			
			$this.addClass('js-initialized');
		})
	}
}

// REMOVE TAG
$(document).on('click', '.tag-remove', function (evt) {
	evt.preventDefault();
	$(this).closest('.tag').trigger('tag.remove').remove();
});

// MAIN REQUESTS LIST COLLAPSE
// $(document).on('deactivate', '.main-requests-list', function (evt) {
// 	var $anchor = $(this).closest('.main-requests');
// 	setTimeout(function () {
// 		if(!IsVisible($anchor)) {
// 			scrollDocumentTo($anchor)
// 		}
// 	}, 100);
// });
//
// // MAIN CONTACTS LIST COLLAPSE
// $(document).on('deactivate', '.main-contacts-list', function (evt) {
// 	var $anchor = $(this).closest('.main-contacts');
// 	setTimeout(function () {
// 		if(!IsVisible($anchor)) {
// 			scrollDocumentTo($anchor)
// 		}
// 	}, 100);
// });