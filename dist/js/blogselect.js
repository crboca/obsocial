$(document).ready(function() {
	$('.eventos').show();
	$('.donaciones').show();
	$('.noticias').show();

	$('select').change(function(ev){
		
		if ($("select option:selected").val() == 1) {
			$('.eventos').show();
			$('.donaciones').hide();
			$('.noticias').hide();
			
			$('.grid').masonry({
  				itemSelector: '.grid_item',
  				columnWidth: '.grid_sizer',
  				percentPosition: true
			});

		} else if ($("select option:selected").val() == 2) {
			$('.donaciones').show();
			$('.eventos').hide();
			$('.noticias').hide();

			$('.grid').masonry({
  				itemSelector: '.grid_item',
  				columnWidth: '.grid_sizer',
  				percentPosition: true
			});

		} else if ($("select option:selected").val() == 3) {
			$('.noticias').show();
			$('.eventos').hide();
			$('.donaciones').hide();

			$('.grid').masonry({
  				itemSelector: '.grid_item',
  				columnWidth: '.grid_sizer',
  				percentPosition: true
			});
		
		} else {
			$('.eventos').show();
			$('.donaciones').show();
			$('.noticias').show();

			$('.grid').masonry({
  				itemSelector: '.grid_item',
  				columnWidth: '.grid_sizer',
  				percentPosition: true
			});
		} 
	})		

});