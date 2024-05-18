# Dado un array de enteros, encuentra la suma de sus elementos.
# Por ejemplo si el array esta conformado por los elementos 1, 2 y 3 la suma de estos deberá ser 6.

#Solucion 1
def sumItems(arr):
    suma = 0
    for item in arr:
        suma += item
    return suma

call = sumItems([1,2,3,4,10,11])
print(call)


#Solucion 2
def sumItems(arr):
    suma = 0
    array = list(arr)
    for item in array:
        suma += item
    return suma

entrada = input("")
numeros_str = entrada.split()
numeros = [int(num) for num in numeros_str]
call = sumItems(numeros)
print(call)


#Solucion 3
def sumItems(arr):
    suma = 0
    array = list(arr)
    for item in array:
        suma += item
    return suma

array_items = []
numeros_ingresar = int(input("Ingresa el numero de elementos del arreglo: "))

for i in range(numeros_ingresar):
    numeros = int(input("Ingresa el elemento: "))
    array_items.append(numeros)

call = sumItems(array_items)
print(call)

#Solucion 4 (Solucion Aceptada por el compilador de Hacker Rank)
def sumItems():
    size = int(input(""))
    arr = input("")
    split = arr.split()
    arr_n = [int(n) for n in split]
    suma = 0
    for elemento in arr_n:
        suma += elemento
    return print(suma)

sumItems()