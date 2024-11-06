<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login y Register</title>
    <link rel="stylesheet" href="../css/main.css">
</head>
<body class="body-reg">
    <header>
        <h1 class="loginlog">XSneakers</h1>
    </header>
    <main class="main-reg">

        <div class="contenedor-todo">
            
            <div class="caja-trasera">

                <div class="caja-trasera-login">
                    <h3>¿Ya tienes una Cuenta?</h3>
                    <p>Inicia sesion para entrar en la pagina</p>
                    <button id="btn-i-sesion">Iniciar sesion</button>
                </div>

                <div class="caja-trasera-register">
                    <h3>¿Aun no tienes una Cuenta?</h3>
                    <p>Registrate para que puedas iniciar sesion</p>
                    <button id="btn-registrarse">Registrarse</button>
                </div>
            </div>

            <div class="contenedor-login-reg">
                
                <form action="../php/login_usuario_be.php" method="POST" 
                class="formulario-login">
                    <h2>Iniciar Sesion</h2>
                    <input type="text" placeholder="Correo Electronico" name="correo">
                    <input type="password" placeholder="Contraseña" name = "contrasena">
                    <button>Entrar</button>
                </form>

                <form action="../php/registro_usuario_be.php" method="POST" class="formulario-register">
                    <h2>Registrarse</h2>
                    <input type="text" placeholder="Nombre Completo" name="nombre_completo">
                    <input type="text" placeholder="Correo Electronico" name="correo">
                    <input type="text" placeholder="Usuario" name="usuario">
                    <input type="password" placeholder="Contraseña"  name="contrasena">

                    <button>Registrarse</button>
                </form>
            </div>
        </div>

    </main>
    <script src="../js/login.js"></script>
</body>
</html>