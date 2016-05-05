$(document).ready(function() {
	$('.eventos').show();
	$('.donaciones').show();
	$('.noticias').show();

	$('select').change(function(ev){
		
		if ($("select option:selected").val() == 1) {
			$('.eventos').show();
			$('.donaciones').hide();
			$('.noticias').hide();

		} else if ($("select option:selected").val() == 2) {
			$('.donaciones').show();
			$('.eventos').hide();
			$('.noticias').hide();

		} else if ($("select option:selected").val() == 3) {
			$('.noticias').show();
			$('.eventos').hide();
			$('.donaciones').hide();
		
		} else {
			$('.eventos').show();
			$('.donaciones').show();
			$('.noticias').show();
		} 
	})		

});