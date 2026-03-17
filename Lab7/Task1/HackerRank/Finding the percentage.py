n = int(input())
students = {}

for _ in range(n):
    data = input().split()
    name = data[0]
    marks = list(map(float, data[1:]))
    students[name] = marks

query_name = input()

marks = students[query_name]

average = sum(marks) / len(marks)

print(f"{average:.2f}")