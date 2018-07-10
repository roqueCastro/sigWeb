



<!DOCTYPE html>


<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    
    
    
    
    
    

    <title>Registrar Pregunta</title>

 

</head>

  <div class="container-fluid">

                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="card m-b-30">
                                        <div class="card-body">

                                            </form>

                                        </div>
                                    </div>
                                </div> <!-- end col -->                            
                            </div> <!-- end row -->

                            <!-- Se lista las preguntas registradas-->
                                                 
            <div class="row center-block">
                
               
                    <div class="panel panel-yellow" id ="Frm_Reg_Preguntas">
                        <div class="panel-heading">
                                                REGISTRO DE PREGUNTAS
                        </div>
                        <div class="panel-body">
                           
                            
                              <fieldset >
                   
                                          <h4 class="mt-0 header-title">Registro de preguntas</h4>
                                            <div id="resu" ></div>
                                           
                                                <div class="form-group">
                                                   
                                                    <input  id="id_preg" type="text">
                                                
                                                    <label>Seleccione la encuesta</label>
                                                    <select id="encuesta" class="form-control">

                                                    </select>
                                                </div>

                                                <div class="form-group">
                                                    <label>Tipo de Pregunta</label>
                                                    <div>
                                                        <select id="tipo_pregunta" class="form-control">

                                                        </select>
                                                    </div>
                                                </div>

                                                <div class="form-group">
                                                    <label>Nombre de la pregunta</label>
                                                    <div>
                                                       <input class="form-control" id="nom_pre" type="text" placeholder="" >
                                                    </div>
                                                </div>
                                            
                                            
                                            <div class="form-group">
                                                    <label>Seleccione el estado</label>
                                                    <select id="estado_pregunta" class="form-control">
                                                     <option value='1'> Activo </option>
                                                     <option value='2'> Inactivo </option>
                                                    </select>
                                                </div>
                                            
                                            
                                            
                                            
                                              
                                                <div class="form-group">
                                                    <div>
                                                        <button type="button" class="btn btn-primary waves-effect waves-light" id="Btn_Reg_Periodo" onclick="Registrar_Pregunta()">
                                                            Guardar
                                                        </button>
                                                        
                                                        <button type="button" class="btn btn-primary waves-effect waves-light" id="Btn_Reg_Periodo" onclick="Cancelar_Registro__Pregunta()">
                                                            Cancelar
                                                        </button>
                                                    </div>
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
                           LISTA DE PREGUNTAS 
                           <button type="button" class="btn btn-primary waves-effect waves-light" id="Btn_Reg_Periodo" onclick="Frm_Reg_Preguntas()">
                                                            +
                                                        </button>
                        </div>
                        
                         
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <table width="100%" class="table table-striped table-bordered table-hover" id="datatable">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>PREGUNTA</th>
                                         <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                             
                               
                                </tbody>
                                <tfoot>  
                                    <tr>
                                        <th>ID</th>
                                        <th>PREGUNTA</th>
                                        
                                         <th></th>
                                    
                                    </tr>
                                </tfoot>
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

                        
                            

</div><!-- container -->


</html>

      

     
    
    <script src="js/preguntas.js" type="text/javascript"></script>