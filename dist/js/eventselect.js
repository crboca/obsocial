$(document).ready(function() {

	$('select').change(function(ev){
		$('.evento_ficha').hide();

		if ($("#dispositivo option:selected").val() == 1) {
			$('.smartphone').show();

			if ($("#lugar option:selected").val() == 1) {
				$('.ateneu').hide();
			} else if ($("#lugar option:selected").val() == 2) {
				$('.bau').hide();
			};

		} else if ($("select option:selected").val() == 2) {
			$('.tablet').show();

			if ($("#lugar option:selected").val() == 1) {
				$('.ateneu').hide();
			} else if ($("#lugar option:selected").val() == 2) {
				$('.bau').hide();
			};

		} else if ($("select option:selected").val() == 3) {
			$('.portatil').show();

			if ($("#lugar option:selected").val() == 1) {
				$('.ateneu').hide();
			} else if ($("#lugar option:selected").val() == 2) {
				$('.bau').hide();
			};

		} else if ($("select option:selected").val() == 4) {
			$('.desktop').show();

			if ($("#lugar option:selected").val() == 1) {
				$('.ateneu').hide();
			} else if ($("#lugar option:selected").val() == 2) {
				$('.bau').hide();
			};
		
		} else {
			$('.evento_ficha').show();

			if ($("#lugar option:selected").val() == 1) {
				$('.ateneu').hide();
			} else if ($("#lugar option:selected").val() == 2) {
				$('.bau').hide();
			};
		}
	})		

});