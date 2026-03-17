# Напишите функцию int min (int a, int b, int c, int d) (C/C++), 
# static int min (int a, int b, int c, int d) (Java) function min (a,b,c,d: integer):integer (Pascal), 
# находящую наименьшее из четырех данных чисел.

# Входные данные
# Вводится четыре числа.

# Выходные данные
# Необходимо вывести  наименьшее из 4-х данных чисел.

# Примеры
# Входные данные
# 4 5 6 7
# Выходные данные
# 4


def min_of_four(a, b, c, d):
    # Находим минимум среди всех четырех чисел
    return min(a, b, c, d)

# Чтение входных данных
a, b, c, d = map(int, input().split())

# Вывод результата
print(min_of_four(a, b, c, d))