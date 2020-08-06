---
title: codility lessons 04
date: 2020-08-05
category: Algorithm
tags:
    - 코딜리디
---

# [Codility lessons] FrogOneRiver | [문제 4번](https://app.codility.com/programmers/lessons/4-counting_elements/frog_river_one/start/)

### 분류
`구현`

### 입력
정수 X, N개의 정수 배열 $1 {\ge} X, N {\ge} 100,000$

### 출력
정수

### Sol

```python
def solution(X, A):
    leaf = [0] * X
    cnt = X
    for idx, val in enumerate(A):
        if not leaf[val-1]:
            leaf[val-1] = 1
            cnt -= 1
        if cnt == 0:
            return idx
    return -1
```

# [Codility lessons] MaxCounter | [문제 4번](https://app.codility.com/programmers/lessons/4-counting_elements/max_counters/start/)

### 분류
`구현`

### 입력
카운터 갯수 N, 카운터 정보 배열 A $1 {\ge} N {\ge} 100,000$

### 출력
결과값 정수 배열

### Sol

```python
def solution(N, A):
    MAX, MIN = 0, 0
    counter = [0] * N
    for M in A:
        if M < N and counter[M - 1] < MIN:
            counter[M - 1] = MIN
        if 1 <= M <= N:
            counter[M - 1] += 1
            if counter[M - 1] > MAX:
                MAX = counter[M - 1]
        else:
            MIN = MAX
            
    
    for idx, val in enumerate(counter):
        if val < MIN:
            counter[idx] = MIN
    
    return counter
```

# [Codility lessons] MissingInteger | [문제 4번](https://app.codility.com/programmers/lessons/4-counting_elements/missing_integer/start/)

### 분류
`구현`

### 입력
N개의 정수 배열 $1 {\ge} N {\ge} 100,000$

### 출력
정수

### Sol

```python
def solution(A):
    A.sort()
    min = 1
    for i in A:
        if i == min:
            min += 1
    return min
```


# [Codility lessons] PermCheck | [문제 4번](https://app.codility.com/programmers/lessons/4-counting_elements/perm_check/start/)

### 분류
`구현`

### 입력
N 개의 정수 배열, $1 {\ge} N {\ge} 100,000$

### 출력
0 또는 1

### Sol

```python
def solution(A):
    N = len(A)
    check = [0] * N
    for x in A:
        if x > N or check[x - 1]:
            return 0
        check[x - 1] = 1
    return 1
```
