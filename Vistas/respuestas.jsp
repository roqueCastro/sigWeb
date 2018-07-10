

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>


<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>SB Admin 2 - Bootstrap Admin Theme</title>

 

</head>

<body>
    
    
    
    

    
    
            <div class="row center-block">
                
               
                    <div class="panel ">
                        <div class="panel-primary">
                            REGISTRO DE RESPUESTAS
                        </div>
                        <div class="panel-body">
                           
                              
                                            
                                            <div id="resu" ></div>
                                            
                                              <div class="form-group">
                                                <label for="disabledSelect">Listado Preguntas</label>
                                                <select id="C_pregunta" class="form-control">
                                                                                                   
                                                </select>
                                            </div>                                                                                                             

                                            
                                            
                                            <div class="form-group">
                                                <label for="disabledSelect">Respuesta</label>
                                                <input class="form-control" id="respuesta" type="text" placeholder="" >
                                            </div>
                                            
                                              <div class="form-group">
                                                <label for="disabledSelect">Tipo De Datos</label>
                                                <select id="C_pregunta" class="form-control">
                                                    
                                                    <option value="entero">Enteros</option>                                               
                                                </
                                                >
                                            </div> 
                                            
                                            
                                  
                                           
                                            </div>
                                  
                                           <div class="text-center" >
                                           
                                               <input type="Button" class="btn btn-primary" id="Btn_Reg_Periodo" value="Guardar Pregunta" onclick="Guardar_Respuesta()">

                                           </div>
                                         
                                            
                             </fieldset>
                        
                        </div>
                        
                        
                        
                    </div>
                    <!-- /.col-lg-4 -->
            
                
                
                
                <!----------------------------->
                <div class="row center-block">
                <div class="col-lg-12">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                           LISTA DE PREGUNTAS REGISTRADAS 
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <table width="100%" class="table table-striped table-bordered table-hover" id="dataTables-example">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>PERIODO</th>
                                         <th>AÑO</th>
                                         <th>TIPO</th>
                                         <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                             
                               
                                </tbody>
                             
                                
                            </table>
                            <!-- /.table-responsive -->
                          
                        </div>
                        <!-- /.panel-body -->
                    </div>
                    <!-- /.panel -->
                </div>
                <!-- /.col-lg-12 -->
            </div>
                
                <!--------------------------------->
         
            </div>

     
            <script src="js/respuesta_JS.js" type="text/javascript"></script>
  

</body>


</html>


