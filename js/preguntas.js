$(document).ready(function() {
    Listar_Tipo_Tipo_Pregunta();
    Listar_Tipos_Encuestas();
    // Cargar_Data_Table();
    // $("#Frm_Reg_Preguntas").hide();
});
var idioma_esp = {
    "sProcessing": "Procesando...",
    "sLengthMenu": 'Mostrar <select>' + '<option value="5">5</option>' + '<option value="10">10</option>' + '<option value="15">15</option>' + '<option value="20">20</option>' + '<option value="-1">All</option>' + '</select> registros',
    "sZeroRecords": "No se encontraron resultados",
    "sEmptyTable": "Ningún dato disponible en esta tabla",
    "sInfo": "Mostrando del (_START_ al _END_) de un total de _TOTAL_ registros",
    "sInfoEmpty": "Mostrando del 0 al 0 de un total de 0 registros",
    "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
    "sInfoPostFix": "",
    "sSearch": "Filtrar:",
    "sUrl": "",
    "sInfoThousands": ",",
    "sLoadingRecords": "Por favor espere - cargando...",
    "oPaginate": {
        "sFirst": "Primero",
        "sLast": "Último",
        "sNext": "Siguiente",
        "sPrevious": "Anterior"
    },
    "oAria": {
        "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
        "sSortDescending": ": Activar para ordenar la columna de manera descendente"
    }
};
var Cargar_Data_Table = function() {
    var parametros = {
        "Listar_Preguntas": "Listar_Preguntas "
    };
    var table = $('#datatable').DataTable({
        "destroy": true,
        "bDeferRender": true,
        "sPaginationType": "full_numbers",
        "ajax": {
            "url": "Cont_Pregunta",
            "type": "POST",
            "data": parametros
        },
        "columns": [{
            "data": "id"
        }, {
            "data": "nombre"
        }, {
            "defaultContent": "<button type='button' class='editar btn btn-primary'><i class='fa fa-pencil-square-o'></i></button>  <button type='button' class='eliminar btn btn-danger' data-toggle='modal' data-target='#modalEliminar' ><i class='fa fa-trash-o'></i></button>"
        }],
        "oLanguage": idioma_esp
    });
    Eliminar_Pregunta("#datatable tbody", table);
    Actializar_Pregunta("#datatable tbody", table);
};
var Eliminar_Pregunta = function(tbody, table) {
    $(tbody).on("click", "button.eliminar", function() {
        var data = table.row($(this).parents("tr")).data();
        $('#msg').html("<center><img src='Iconos/barra.gif' width='30' height='30' ></center>");
        $.post('Cont_Pregunta', {
            id: data.id,
            Eliminar_Pregunta: "Eliminar_Pregunta"
        }, function(responseText) {
            Cargar_Data_Table();
            $('#msg').html(responseText);
        });
    });
};
var Actializar_Pregunta = function(tbody, table) {
    $(tbody).on("click", "button.editar", function() {
        var data = table.row($(this).parents("tr")).data();
        $('#msg').html("<center><img src='Iconos/barra.gif' width='30' height='30' ></center>");
        alert(data.id);
        $.post('Cont_Pregunta', {
            id: data.id,
            Buscar_Pregunta_Id: "Buscar_Pregunta_Id"
        }, function(responseText) {
            //  Cargar_Data_Table();  
            var cadena = responseText.split(";");
            $('#id_preg').val(cadena[0]);
            $('#nom_pre').val(cadena[1]);
            $('#tipo_pregunta').val(cadena[2]);
            $('#estado_pregunta').val(cadena[3]);
            $("#Frm_Reg_Preguntas").show();
            $('#msg').html("Resultado de la busqueda");
        });
    });
};

function Cancelar_Registro__Pregunta() {
    $("#Frm_Reg_Preguntas").hide();
}

function Frm_Reg_Preguntas() {
    $('#id_preg').val(0);
    $("#Frm_Reg_Preguntas").show();
}
//GUARDA TODAS LAS PREGUNTAS
function Registrar_Pregunta() {
    // $('#resu').html("<center> <img src='iconos/cargando.gif' width='30' height='30' ></center>");
    $.post('Cont_Pregunta', {
        id_preg: $('#id_preg').val(),
        encuesta: $('#encuesta').val(),
        tipo_pregunta: $('#tipo_pregunta').val(),
        nom_pre: $('#nom_pre').val(),
        estado_pregunta: $('#estado_pregunta').val(),
        Registrar_Pregunta: 'Registrar_Pregunta'
    }, function(responseText) {
        $('#msg').html(responseText);
        $("#Frm_Reg_Preguntas").hide();
        Cargar_Data_Table();
    });
}
// 
////
//
//LISTA TODOS LOS TIPOS DE PREGUNTAS
function Listar_Tipo_Tipo_Pregunta() {
    $.ajax({
        url: 'Controladores/Control_Tipo_Pregunta.php',
        data: {
            Operacion: 'Listar_Tipo_Pregunta'
        },
        type: 'POST',
        dataType: 'json',
        success: function(datos) {
            //creamos el ciclo para recorrer el json y creamos la variable
            // tipo_pre de tipo string y la imprimimos en el select de tipo pregunta
            var tipo_pre = '';
            for (var i = 0; i < datos.length; i++) {
                tipo_pre += '<option value="' + datos[i].id_tipo_pgta + '">' + datos[i].nomb_tipo_pgta + '</option>';
            }
            $('#tipo_pregunta').html(tipo_pre);
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
}
//
////
////
//  Listar_Tipos_Encuestas
function Listar_Tipos_Encuestas() {
    $.ajax({
        url: 'Controladores/Control_Encuesta.php',
        data: {
            Operacion: 'Listar_Tipos_Encuestas'
        },
        type: 'POST',
        dataType: 'json',
        success: function(datos) {
            //creamos el ciclo para recorrer el json y creamos la variable
            // tipo_pre de tipo string y la imprimimos en el select de tipo pregunta
            var dato_imprimir = '';
            for (var i = 0; i < datos.length; i++) {
                dato_imprimir += '<option value="' + datos[i].id_encuesta + '">' + datos[i].nomb_encta + '</option>';
            }
            $('#encuesta').html(dato_imprimir);
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
}