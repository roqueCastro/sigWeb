function Validar_Usuario(){
    

  $('#msg').html("<center><img src='../Iconos/barra.gif' width='30' height='30' ></center>"); 

    $.post('Usuario_Cont', {
    login:$('#login').val() , 
    password: $('#password').val(),    
    Validar_Usuario : "Validar_Usuario"
    }, function(responseText) {
    
    
   
            var json_obj = $.parseJSON(responseText);//parse JSON
            $.each(json_obj, function(i,item) 
            {
              if(parseInt(item[4])===1)
              {
                $("#msg").html("Usuario "+item[1]+" inicio como administrador"); 
                  $('#usuario').html(item[1]);
                $('#menu').show();
                $("#Frm_Admin").modal("hide"); 
                Iniciar_Sesion(item[0]);
                }
        else{
            alert("Usuario no autorizado");
            }      
                
        });
    });       




}

function Iniciar_Sesion(indent){
      $.post('Usuario_Cont', {
        ident:indent,
        Iniciar_Sesion : "Iniciar_Sesion"
        }, function(responseText) {
            
  
              $('#usuario').html(responseText);
           
            }); 
    
}