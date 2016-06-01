$(document).ready(function() {
  $("#country").val("espana");
  $('.in_map--message--uno').hide();
  $('.in_map--message--dos').hide();
  $('.in_map--message--tres').hide();
	
	$("#in_map--btn").click(function(ev) {
    $('.in_map--message--uno').hide();
    $('.in_map--message--dos').hide();
    $('.in_map--message--tres').hide();

    if ($("#country").val() == "alemania") {
      var country ={ pais: 'Alemania',
          kilo: 21.68}
    } else if ($("#country").val() == "argentina") {
    var country ={ pais: 'Argentina',
          kilo: 6.95}
    } else if ($("#country").val() == "bangladesh") {
    var country ={ pais: 'Bangladesh',
          kilo: 0.83}
    } else if ($("#country").val() == "belgica") {
    var country ={ pais: 'Bélgica',
          kilo: 21.47}
    } else if ($("#country").val() == "bolivia") {
    var country ={ pais: 'Bolivia',
          kilo: 3.97}
    } else if ($("#country").val() == "brasil") {
    var country ={ pais: 'Brasil',
          kilo: 7.01}
    } else if ($("#country").val() == "canada") {
    var country ={ pais: 'Canadá',
          kilo: 20.39}
    } else if ($("#country").val() == "china") {
    var country ={ pais: 'China',
          kilo: 4.41,
          general: true}
    } else if ($("#country").val() == "colombia") {
    var country ={ pais: 'Colombia',
          kilo: 5.29}
    } else if ($("#country").val() == "espana") {
    var country ={ pais: 'España',
          kilo: 17.77}
    } else if ($("#country").val() == "eua") {
    var country ={ pais: 'Estado Unidos de América',
          kilo: 22.12,
          general: true}
    } else if ($("#country").val() == "francia") {
    var country ={ pais: 'Francia',
          kilo: 22.17}
    } else if ($("#country").val() == "ghana") {
    var country ={ pais: 'Ghana',
          kilo: 1.43}
    } else if ($("#country").val() == "india") {
    var country ={ pais: 'India',
          kilo: 1.31}
    } else if ($("#country").val() == "islandia") {
    var country ={ pais: 'Islandia',
          kilo: 26.07,
          persona: true}
    } else if ($("#country").val() == "japon") {
    var country ={ pais: 'Japón',
          kilo: 17.32}
    } else if ($("#country").val() == "mexico") {
    var country ={ pais: 'México',
          kilo: 8.17}
    } else if ($("#country").val() == "noruega") {
    var country ={ pais: 'Noruega',
          kilo: 28.36,
          persona: true}
    } else if ($("#country").val() == "reinounido") {
    var country ={ pais: 'Reino Unido',
          kilo: 23.51}
    } else {
		var country ={ pais: 'Senegal',
          kilo: 0.89}
    };

    if (country.persona) {
      $('.in_map--message--dos').html(country.pais +" es uno de los paises que más basura electrónica genera por habitante al año.");
      $('.in_map--message--dos').show();
    };
    if (country.general) {
      $('.in_map--message--tres').html(country.pais+" es uno de los países que más basura electrónica genera al año en conjunto.");
      $('.in_map--message--tres').show();
    }

    $('.in_map--message').html("En "+ country.pais +" se generan "+ country.kilo +"kg de basura electrónica por habitante al año.");

    if ($("#kilo").val() > country.kilo) {
        $('.in_map--message--uno').show();
    };

    $("#kilo").val("");

  });
    
});