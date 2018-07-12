var mapa = null;
var marcadores_bd = null;

function limpiar_marcadores(lista) {
    for (i in lista) {
        lista[i].setmap(null);
    }
}
$(document).ready(function() {
    //Listar_Todos_Eventos();
    setInterval('Listar_Todos_Eventos()', 5000);
});
var myLatlng = new google.maps.LatLng(0.96667, -74.44323);
var mapOptions = {
    zoom: 8,
    center: myLatlng,
    mapTypeId: 'terrain'
};
mapa = new google.maps.Map(document.getElementById('mapas'), mapOptions);
//Evento con un click
google.maps.event.addListener(mapa, "click", function(event) {
    var coordenadas = event.latLng;
    coordenadas = coordenadas.toString().replace(")", "");
    coordenadas = coordenadas.toString().replace("(", "");
    var ax = coordenadas.toString().split(",");
    var dir = new google.maps.LatLng(ax[0], ax[1]);
    //Registrar_Evento(ax[0],ax[1],1,1);
});

function Listar_Todos_Eventos() {
    //quitar_marcadores(marcadores_nuevos);
    $.ajax({
        url: 'Controladores/Control_Evento.php',
        data: {
            Operacion: 'Listar_Eventos'
        },
        type: 'POST',
        dataType: 'json',
        success: function(datos) {
            Buscar_Eventos_bd(datos);
        },
        error: function(xhr, status) {
            alert('Disculpe, existió un problema');
            // $('#msg').html();
        },
        // código a ejecutar sin importar si la petición falló o no
        complete: function(xhr, status) {
            $('#msg').html('Se listaron todos los eventos..');
        }
    });
} // fin del metodo Listar_Todos_Eventos
function Buscar_Eventos_bd(datos) {
    for (var i = 0; i < datos.length; i++) {
        var punto = new google.maps.LatLng(datos[i].latitud, datos[i].longitud);
        // alert(punto);
        var marcadores = new google.maps.Marker({
            idMarcador: datos[i].id_evento,
            position: punto,
            map: mapa,
            animation: google.maps.Animation.DROP,
            drapggable: false,
            titulo: datos[i].id_evento
        });
        // marcadores_bd.push(marcadores);
        google.maps.event.addListener(marcadores, "click", function(event) {
            alert("evento : " + marcadores.idMarcador);
        });
        marcadores.setMap(mapa);
        //evento del marcador
    } // fin del for
} // fin de buscar eventos en la bd
function Registrar_Evento(lat, log, enc, us) {
    $.post('Controladores/Control_Evento.php', {
        "Operacion": 'Registrar_Evento',
        "latitud": lat,
        "longitud": log,
        "encuesta": enc,
        "usuario": us
    }, function(responseText) {
        alert('tonces Roque');
        //   Listar_Todos_Eventos();  
    });
} // fin de registrar eventos