// external js: masonry.pkgd.js
window.addEventListener('load', function () {
   $('.grid').masonry({
		itemSelector: '.grid_item',
		columnWidth: '.grid_sizer',
		percentPosition: true
	});
})