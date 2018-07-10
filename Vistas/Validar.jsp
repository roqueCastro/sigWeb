<%-- 
    Document   : Validar
    Created on : 02-ene-2018, 13:14:16
    Author     : WILSON
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <div class="row center-block">
                
               
                    <div class="panel panel-yellow">
                        <div class="panel-heading">
                            INGRESAR COMO ADMINISTRADOR
                        </div>
                        <div class="panel-body">
                           
                              <fieldset >
                                            <div class="form-group">
                                                <label for="disabledSelect">login</label>
                                                <input class="form-control" id="login" type="text" placeholder="Digite el login" >
                                            </div>
                                  
                                            <div class="form-group">
                                                <label for="disabledSelect">password</label>
                                                <input class="form-control" id="password" type="text" placeholder="Digite el password" >
                                            </div>
                                  
                                                  <div class="text-center" >
                                           
                                               <input type="Button" class="btn btn-primary" id="Btn_Reg_Validar" value="INGRESAR" onclick="Validar_Usuario();">
                                             </div>                                     
                             </fieldset>
                        
                        </div>
                        
                        
                        
                    </div>
                    <!-- /.col-lg-4 -->
            
                
                
                
             
                
                <!--------------------------------->
         
            </div>
    </body>
    

</html>
    <script src="js/Validar.js" type="text/javascript"></script>