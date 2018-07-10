<?php
     class Conecar_bd
     {
        

   private $conexion;
   private $host = '10.97.128.75';
   private $usuario = 'bomberos';
   private $pass = 'juanjose1201';
   private $bbdd = 'bomberos';
public function Realizar_Conexion(){

     


        try {
                // $gbd = new PDO($dsn,$usuario,$contraseña);
            $this->conexion = new PDO("mysql:host={$this->host};dbname={$this->bbdd}",$this->usuario,$this->pass);


              $this->conexion->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_SILENT );
             $this->conexion->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING );
            $this->conexion->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
              
                 return $this->conexion ; 
            } catch (PDOException $e) {
                    return   $e->getMessage();
                                       }
              


                        }
        
    }

?>