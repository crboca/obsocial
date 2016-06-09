$(document).ready(function() {
	$('.eventos').show();
	$('.donaciones').show();
	$('.noticias').show();

	function masonery() {
		$('.grid').masonry({
  				itemSelector: '.grid_item',
  				columnWidth: '.grid_sizer',
  				percentPosition: true
			});
	}

	$('select').change(function(ev){
		
		if ($("select option:selected").val() == 1) {
			$('.eventos').show();
			$('.donaciones').hide();
			$('.noticias').hide();
			
			masonery();

		} else if ($("select option:selected").val() == 2) {
			$('.donaciones').show();
			$('.eventos').hide();
			$('.noticias').hide();

			masonery();

		} else if ($("select option:selected").val() == 3) {
			$('.noticias').show();
			$('.eventos').hide();
			$('.donaciones').hide();

			masonery();
		
		} else {
			$('.eventos').show();
			$('.donaciones').show();
			$('.noticias').show();

			masonery();
		} 
	})		

});