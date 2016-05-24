$(document).ready(function() {
	$('.smartphone').show();
	$('.tablet').show();
	$('.portatil').show();
	$('.desktop').show();

	$('select').change(function(ev){
		$('.smartphone').hide();
		$('.tablet').hide();
		$('.portatil').hide();
		$('.desktop').hide();

		if ($("select option:selected").val() == 1) {
			$('.smartphone').show();

		} else if ($("select option:selected").val() == 2) {
			$('.tablet').show();

		} else if ($("select option:selected").val() == 3) {
			$('.portatil').show();

		} else if ($("select option:selected").val() == 4) {
			$('.desktop').show();
		
		} else {
			$('.smartphone').show();
			$('.tablet').show();
			$('.portatil').show();
			$('.desktop').show();
		} 
	})		

});