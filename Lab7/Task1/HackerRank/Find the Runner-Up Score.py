n = int(input())
scores = list(map(int, input().split()))

max_score = max(scores)

runner_up = -101 
for score in scores:
    if score != max_score and score > runner_up:
        runner_up = score

print(runner_up)