
#help(str.split)

cursos = 'Java JavaScript Node Python Diseño'
lista_cursos = cursos.split()
print(f'Lisa de cursos: {lista_cursos}')
print(type(lista_cursos))

cursos_separados_coma = 'Java,JavaScript,Node,Python,Spring'
lista_cursos = cursos_separados_coma.split(',',2)
print(f'Lista de cursos: {lista_cursos}')
print(len(lista_cursos))