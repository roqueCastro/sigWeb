$(function() {
   $('#myTab a:last').tab('show');
    // $('#menu').hide(); 
    
    Usuario_Activo();
   
     
});



function Usuario_Activo(){
    
    
     
      $.post('Usuario_Cont', {
        Usuario_Activo : "Usuario_Activo"
        }, function(responseText) {
            
             $('#usuario').html(responseText);
           
            }); 
     
     
    
}

function Abrir_Form_Pregunta(){
   $('.modal-body').load('Vistas/preguntas.php',function(){
        $('#Frm_Admin').modal({show:true});
                 $("#msg").html("Formulario de periodo cargado"); 
    });  
}















function Abrir_Form_Validar(){
   $('.modal-body').load('Vistas/Validar.jsp',function(){
        $('#Frm_Admin').modal({show:true});
             $("#msg").html("Formulario de validación de Usuarios"); 
    });    
  
       
}


function Salir_Sistema(){
      $('#menu').hide();   
    alert("Usuario fuera del sistema");
}









