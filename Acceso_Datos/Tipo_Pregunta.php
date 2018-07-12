<?php

require 'Conexion.php';

class Tipo_Pregunta
{

    $db       = new Conecar_bd();
    $Conexion = $db->Realizar_Conexion();

    public $nombre_tipo_pregunta;

    public function Listar_Tipo_Preguntas()
    {

        $Sql      = "SELECT * FROM bomberos.tipo_pregunta";
        $Consulta = $Conexion->prepare($Sql);

        if ($Consulta->execute()) {
            $result = $Consulta->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($result);
        } else {
            echo 'No se ejecuto';
        }
    }

    public function Registrar_Tipo_Pregunta($no_ti_pre)
    {
        try {

            $sql      = "INSERT INTO tipo_pregunta (nomb_tipo_pgta)VALUES(:nom_Ti_Pre);";
            $consulta = $conexion->prepare($sql);

            $consulta->bindParam(':nom_Ti_Pre', $no_ti_pre);

            if ($consulta->execute()) {
                echo "Se inserto";
            } else {
                echo "No se inserto";
            }

        } catch (Exception $e) {
            echo 'Falló la conexión: ' . $e->getMessage();
        }
    }

}
