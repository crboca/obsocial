$(document).ready(function() {
	$('.smartphone').show();
	$('.tablet').show();
	$('.portatil').show();

	$('select').change(function(ev){
		
		if ($("select option:selected").val() == 1) {
			$('.smartphone').show();
			$('.tablet').hide();
			$('.portatil').hide();

		} else if ($("select option:selected").val() == 2) {
			$('.tablet').show();
			$('.smartphone').hide();
			$('.portatil').hide();

		} else if ($("select option:selected").val() == 3) {
			$('.portatil').show();
			$('.smartphone').hide();
			$('.tablet').hide();
		
		} else {
			$('.smartphone').show();
			$('.tablet').show();
			$('.portatil').show();
		} 
	})		

});