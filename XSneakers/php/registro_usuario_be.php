<?php 

    include 'conexion_be.php';

    $nombre_completo = $_POST['nombre_completo'];
    $correo = $_POST['correo'];
    $usuario = $_POST['usuario'];
    $contrasena = $_POST['contrasena'];


    $contrasena = hash('sha512', $contrasena);


    $query = "INSERT INTO usuarios(nombre_completo, correo, usuario, contrasena)
    VALUES('$nombre_completo', '$correo',  '$usuario', '$contrasena')";

    $verificar = mysqli_query($conexion, "SELECT * FROM usuarios WHERE correo='$correo' ");
    if(mysqli_num_rows($verificar) > 0){
        echo '
            <script>
                alert("Este correo ya esta registrado,  por favor intenta con otro");
                window.location="../login/login.php";
            </script>
        ';
        exit();
    }

    $verificarU = mysqli_query($conexion, "SELECT * FROM usuarios WHERE usuario='$usuario' ");
    if(mysqli_num_rows($verificarU) > 0){
        echo '
            <script>
                alert("Este usuario ya esta registrado,  por favor intenta con otro");
                window.location="../login/login.php";
            </script>
        ';
        exit();
    }

    $ejecutar = mysqli_query($conexion, $query);


    if ($ejecutar) {
        echo '
            <script>
                alert("Cuenta Creada Exitosamente");
                window.location = "../index.html";  
            </script>
        ';
    }else {
        echo'
            <script>
                alert("Intentalo de nuevo, cuenta no creada");
                window.location = "../login.php";
                </script>
            ';
    }

    mysqli_close($conexion);
?>