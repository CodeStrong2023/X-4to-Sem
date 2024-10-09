
#dar formato a un string

nombre = 'Ariel'
edad = 28
mensaje_con_fomato = 'Mi nombre es %s y tengo %d años'%(nombre, edad)
print(mensaje_con_fomato)

#Creamos una tupla
persona = ('Carla', 'Gómez', 5000.00)
mensaje_con_fomato = 'Hola %s %s . Tu sueldo es %2f' % persona
#print(mensaje_con_fomato)

nombre = 'Juan'
edad = 19
sueldo = 3000
#mensaje_con_fomato = 'Nombre {} Edad {} Sueldo {:.2f}'.format(nombre, edad, sueldo)

#mensaje = 'Nombre {0} Edad {1} Sueldo {2:.2f}'.format(nombre, edad, sueldo)
#print(mensaje)

#mensaje = 'Sueldo {2:.2f} Edad {1} Nombre {0}'.format(nombre, edad, sueldo)
#print(mensaje)

mensaje = 'Nombre {n} Edad {e} Sueldo {s:.2f}'.format(n=nombre, e=edad, s=sueldo)
#print(mensaje)

diccionario = {'nombre': 'Ivan', 'Edad': 35, 'Sueldo': 8000.00}
mensaje = 'Nombre {dic[nombre]} Edad {dic[Edad]} Sueldo{dic[Sueldo]:.2f}'.format(dic=diccionario)
print(mensaje)
