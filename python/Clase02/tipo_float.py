#Profundizando el tipo float
a = 3.0

#Constructor de tipo float -> puede recibir int y str
a = float(10) #utilizamos tipo int
a = float('10')
print(f'a: {a: .2f}')

#Notación exponencial (valores positivos y negativos)
a = 3e5
print(f'a: {a: .2f}')

a = 3e-5
print(f'a: {a: .5f}')

#Cualquier calculo que incluye un float, todo cambia a float

a = 4.0 +5
print(a)
print(type(a))