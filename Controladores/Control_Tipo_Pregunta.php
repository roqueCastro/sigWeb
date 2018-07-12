<?php

try {

    require '../Acceso_Datos/Tipo_Pregunta.php';

    $tipo_pregunta = new Tipo_Pregunta();

    $operacion = "Listar_Tipo_Pregunta";

    /*  if ($operacion == "r_Tipo_Pregunta") {

    $latitud  = $_POST['latitud'];
    $longitud = $_POST['longitud'];
    $encuesta = $_POST['encuesta'];
    $usuario  = $_POST['usuario'];

    $resultado = $even->Registrar_Evento($latitud, $longitud, $encuesta, $usuario);
    echo $resultado;
    }*/

    if ($operacion == "Listar_Tipo_Pregunta") {

        $resultado = $tipo_pregunta->Listar_Tipo_Preguntas();
        echo $resultado;
    }

} catch (PDOException $e) {
    echo 'Falló la conexión: ' . $e->getMessage();
}
