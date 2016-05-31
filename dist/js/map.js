$(document).ready(function() {

	
	$("#index_map--btn").click(function(ev) {

    $('.index_map--message--notanto').hide();

    if ($("#country").val() == "espana") {
    	var country ={ pais: 'España',
          kilo: 17.77}
    } else if ($("#country").val() == "alemania") {
		var country ={ pais: 'Alemania',
          kilo: 21.68}

    } else if ($("#country").val() == "francia") {
		var country ={ pais: 'Francia',
          kilo: 22.17}
    } else if ($("#country").val() == "portugal") {
		var country ={ pais: 'Portugal',
          kilo: 16.17}
    } else if ($("#country").val() == "reinounido") {
		var country ={ pais: 'Reino Unido',
          kilo: 23.51}
    } else {
		var country ={ pais: 'Irlanda',
          kilo: 19.81}
    };

    if ($("#kilo").val() > country.kilo) {
    		$('.index_map--message--notanto').show();
    	};

    $('.index_map--message').html("En "+ country.pais +" se generan "+ country.kilo +"kg de basura electrónica por habitante al año.");

    $("#kilo").val("");

  });
    
});