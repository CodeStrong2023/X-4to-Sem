import random
import sys
import pygame
import os
from personaje import Personaje, Enemigo, Explosion
from constantes import SCREEN_WIDTH, SCREEN_HEIGHT, ASSETS_PATH

def mostrar_imagen_inicial(screen, imagen_path, duracion):
    imagen = pygame.image.load(imagen_path).convert()
    imagen = pygame.transform.scale(imagen, (SCREEN_WIDTH, SCREEN_HEIGHT))

    alpha = 255
    clock = pygame.time.Clock()

    tiempo_inicial = pygame.time.get_ticks()
    tiempo_total = duracion
    while pygame.time.get_ticks() - tiempo_inicial < tiempo_total:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                sys.exit()
        #Calcular el tiempo transcurrido
        tiempo_transcurrido = pygame.time.get_ticks() - tiempo_inicial

        #Calcular nuevo valor de alpha basado en el tiempo transcurrido
        alpha = 255 -(255 * (tiempo_transcurrido / tiempo_total))
        if alpha < 0:
            alpha = 0

        #Establecer transparencia y dibujar la imagen
        imagen.set_alpha(int(alpha))
        screen.fill((0, 0, 0))
        screen.blit(imagen,(0, 0))
        pygame.display.flip()

        clock.tick(60)

def main():
    try:
        pygame.init()
        screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
        pygame.display.set_caption('Amenaza Fantasma')

        imagen_inicial_path = os.path.join(ASSETS_PATH, 'images', 'inicio', 'Star.png')
        mostrar_imagen_inicial(screen, imagen_inicial_path, 5000)

        #Usa os.path.join para construir la ruta del icono
        icon = pygame.image.load(os.path.join(ASSETS_PATH, 'images', '001.jfif'))
        pygame.display.set_icon(icon)

        fondo2 = pygame.image.load(os.path.join(ASSETS_PATH, 'images', 'fondo2.jfif'))
        fondo2 = pygame.transform.scale(fondo2, (SCREEN_WIDTH, SCREEN_HEIGHT))

        fondo3 = pygame.image.load(os.path.join(ASSETS_PATH, 'images', 'fondo3.jpg'))
        fondo3 = pygame.transform.scale(fondo3, (SCREEN_WIDTH, SCREEN_HEIGHT))

        #Inicializar fondo actual
        fondo_actual = fondo2

        # os.path.join para las rutas de los sonidos
        sonido_laser = pygame.mixer.Sound(os.path.join(ASSETS_PATH, 'sounds', 'laserdis.mp3'))
        sonido_explosion = pygame.mixer.Sound(os.path.join(ASSETS_PATH, 'sounds', 'explosion.mp3'))

        #Sonido de fondo
        pygame.mixer.music.load(os.path.join(os.path.join(ASSETS_PATH, 'sounds', 'efectos.mp3')))
        pygame.mixer.music.play(-1)


        personaje = Personaje(SCREEN_WIDTH//2, SCREEN_HEIGHT//2)
        enemigos = []
        explosiones = []
        puntos = 0
        nivel = 1

        clock = pygame.time.Clock()
        runing = True
        while runing:
            for event in pygame.event.get():
                if event.type == pygame.QUIT:
                    pygame.quit()
                    sys.exit()

            keys = pygame.key.get_pressed()
            dx, dy = 0, 0

            if keys[pygame.K_LEFT]:
                dx = -5
            if keys[pygame.K_RIGHT]:
                dx = 5
            if keys[pygame.K_UP]:
                dy = -5
            if keys[pygame.K_DOWN]:
                dy = 5

            personaje.mover(dx, dy)

            if keys[pygame.K_SPACE]:
                personaje.lanzar_laser()
                sonido_laser.play()

            #Actualizar posición de enemigos
            for enemigo in enemigos[:]:
                enemigo.mover()
                if enemigo.rect.top > SCREEN_HEIGHT:
                    enemigo.remove(enemigo)

                for laser in personaje.lasers[:]:
                    if enemigo.rect.colliderect(laser.rect):
                        explosiones.append(Explosion(enemigo.rect.centerx, enemigo.rect.centery))
                        enemigo.remove(enemigo)
                        personaje.lasers.remove(laser)
                        sonido.explosion.play()
                        puntos += 10
                        break

                if enemigo.rect.colliderect(personaje.shape):
                    if not personaje.recibir_dano():
                        running = False

            if random.random () <0.02:
                x = random.randint(0, SCREEN_WIDTH -50)
                enemigo = Enemigo(x, 0)
                enemigos.append(enemigo)

            explosiones = [explosion for explosion in explosiones.actualizar()]


            #cambiar fondo de pantalla según los puntos
            if puntos > 0 and puntos % 250 == 0 :
                if fondo_actual == fondo2:
                    fondo_actual = fondo3
                else:
                    fondo_actual = fondo2
                    puntos +=10

            #Dibujar el fondo
            screen.blit(fondo_actual, (0,0))
            #Dibujar el personaje
            personaje.dibujar(screen)
            #Dibujar los enemigos
            for enemigo in enemigos:
                enemigo.dibujar(screen)
            #Dibujar las explosiones
            for explosion in explosiones:
                explosion.dibujar(screen)

        #Mostrar el marcador y el nivel
        font = pygame.font.Font(None, 36)
        texto_puntos = font.render(f'Puntos: {puntos}', True, (255, 255, 255))
        texto_nivel = font.render(f'Nivel: {nivel1}', True,(255,255,255))
        screen.blit(texto_puntos, (10, 50))
        screen.blit(texto_nivel, (10, 90))

        if puntos >= 250:
            nivel +=1
            puntos = 0

        pygame.display.flip()
        clock.tick(60)

        #Mostrar mensaje de GAME OVER
        screen.fill((0, 0, 0))
        #Definir fuente del mensaje
        font_large = pygame.font.Font(None, 74)
        font_small = pygame.font.Font(None, 36)

        #Renderizar textos
        texto_game_over = font.render("GAME OVER", True, (255,0,0))
        texto_mensaje_final = font.render("QUE LA FUERZA TE ACOMPAÑE.!!", True, (255, 255, 255))

        #Calcular posiciones para centrar el texto
        pos_x_game_over = SCREEN_WIDTH // 2 - texto_game_over.get_width() // 2
        pos_y_game_over = SCREEN_HEIGHT // 2 - texto_game_over.get_height() // 2 - 20

        pos_x_mensaje = SCREEN_WIDTH // 2 - texto_mensaje.get_width() // 2
        pos_y_mensaje = SCREEN_HEIGHT // 2 + texto_game_over.get_height() // 2 + 20

        #Mostrar frase
        screen.blit (texto_game_over, (pos_x_game_over, pos_y_game_over))
        screen.blit (texto_mensaje, (pos_x_mensaje, pos_y_mensaje))

        #Actualizar pantalla
        pygame.display.flip()
        pygame.time.wait(5000)
        pygame.quit()
        sys.exit()

    except Exception as e:
        print(f'Ocurrió un error: {e}')
if __name__ == '__main__' :
    main()






                

