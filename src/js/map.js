$(document).ready(function() {

  $("#country").change(function(ev) {
    // var frase = "En "+ country.pais +" se generan "+ country.kilo +"kg de basura electrónica por habitante al año.";

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

    $('.index_map--message').html("En "+ country.pais +" se generan "+ country.kilo +"kg de basura electrónica por habitante al año.");
  });
    
});