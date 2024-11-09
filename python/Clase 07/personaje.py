import pygame
pygame.init()

#Configuración de pantalla
screen = pygame.display.set_mode((800, 600))
clock = pygame.time.Clock()
running = True
dt = 0

#Posición del jugador
player_pos = pygame.Vector2(screen.get_width()/2, screen.get_height()/2)

#Velocidad del jugador
player_speed = 5

#Bucle principal
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

#Detectar las teclas para presionar
    keys = pygame.key.get_pressed()

    #Movimientos del jugador
    if keys[pygame.K_LEFT]:
        player_pos.x -= player_speed
    if keys[pygame.K_RIGHT]:
        player_pos.x += player_speed
    if keys[pygame.K_DOWN]: #se presiona la tecla hacia abajo
        player_pos.y += player_speed
    if keys[pygame.K_UP]:
        player_pos.y -= player_speed

    #Limpiar la pantalla
    screen.fill('blue')

    #Dibujar el jugador
    pygame.draw.circle(screen, (255,0,0), (int(player_pos.x), int(player_pos.y)), 10)

    #Actualizar pantalla
    pygame.display.flip()

    #Control de velocidad del jugador
    clock.tick(60)

pygame.quit() #Cierre del programa

