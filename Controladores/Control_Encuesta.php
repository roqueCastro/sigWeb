<?php

try {

    require '../Acceso_Datos/Encuestas.php';

    $encuesta = new Encuestas();

    $operacion = $_POST['Operacion'];

    /*  if ($operacion == "r_Tipo_Pregunta") {

    $latitud  = $_POST['latitud'];
    $longitud = $_POST['longitud'];
    $encuesta = $_POST['encuesta'];
    $usuario  = $_POST['usuario'];

    $resultado = $even->Registrar_Evento($latitud, $longitud, $encuesta, $usuario);
    echo $resultado;
    }*/

    if ($operacion == "Listar_Tipos_Encuestas") {

        $resultado = $encuesta->Listar_Encuestas();
        echo $resultado;
    }

} catch (PDOException $e) {
    echo 'Falló la conexión: ' . $e->getMessage();
}
