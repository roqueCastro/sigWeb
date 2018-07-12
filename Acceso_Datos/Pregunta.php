<?php
/* Conectar a una base de datos de MySQL invocando al controlador */

  require('Conexion.php');



  class Pregunta{

    $bd = new Conecar_bd();
    $Conexion = $bd->Realizar_Conexion();

  //Definición de Atributos

    public $Nombre;
    public $Estado;
    public $Tipo_Pregunta;
    public $Encuesta;
    //Constructor

    public function Listar_Preguntas(){
    
        
       // $Conexion ->exec(SET CHARACTER SET utf8);
      $Sql= "SELECT * FROM pregunta";
    	$Consulta = $Conexion->prepare($Sql);

       if( $Consulta -> execute()){  		
          $results = $Consulta->fetchAll(PDO::FETCH_ASSOC);
        	echo json_encode($results);

       } else {
    		 echo "NO se ejecuto";
       }

    }



    public function Registrar_Preguntas($nom,$esta,$ti_Pre,$encues){

 			try {

				$sql ="INSERT INTO pregunta (nomb_pgta,estado_pgta,tipo_pregunta,encuesta2)VALUES(:n,:es,:t_p,:ec);";
				$consulta = $conexion->prepare($sql);

 				$consulta->bindParam(':n',$nom);
 				$consulta->bindParam(':es',$esta);
 				$consulta->bindParam(':t_p',$ti_Pre);
 				$consulta->bindParam(':ec',$encues);	

        if($consulta -> execute()){
        	echo "Se inserto";
        }
        else{
          echo "No se inserto";
        }					
							
  		} catch (Exception $e) {
    		echo 'Falló la conexión: ' . $e->getMessage();
  		}  		  
      
    }
  }
?>