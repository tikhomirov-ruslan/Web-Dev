# Входные данные
# Вводится натуральное число x.

# Выходные данные
# Выведите сумму цифр числа x.


x = int(input())
sum_digits = 0
for i in str(x):
    sum_digits += int(i)
print(sum_digits)