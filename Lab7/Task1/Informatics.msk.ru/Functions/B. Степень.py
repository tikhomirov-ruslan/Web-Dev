# Напишите функцию double power (double a, int n) (C/C++), function power (a:real; n:longint): real (Pascal), вычисляющую значение an.

# Входные данные
# Вводится 2 числа - a (вещественное) и n (целое неотрицательное).

# Выходные данные
# Необходимо вывести  значение an.

# Примеры
# Входные данные
# 2 2
# Выходные данные
# 4


def power(a, n):
    result = 1.0
    for _ in range(n):
        result *= a
    return result

a, n = input().split()
a = float(a)
n = int(n)

print(power(a, n))