---
title: codility lessons 03
date: 2020-08-05
category: Algorithm
tags:
    - 코딜리디
---

# [Codility lessons] FrogJmp | [문제 3번](https://app.codility.com/programmers/lessons/3-time_complexity/frog_jmp/start/)

### 분류
`구현`

### 입력
정수 X, Y, D

### 출력
정수

### Sol

```python
def solution(X, Y, D):
    div, mod = divmod(Y - X, D)
    return div + 1 if mod else div
```

# [Codility lessons] PermMissingElem | [문제 3번](https://app.codility.com/programmers/lessons/3-time_complexity/perm_missing_elem/start/)

### 분류
`구현`

### 입력
N개의 숫자 배열 $1 {\ge} N {\ge} 100,000$

### 출력
정수 

### Sol

```python
def solution(A):
    size = len(A)
    check = [0] * (size + 1)
    for x in A:
        check[x - 1] = 1
    for idx, val in enumerate(check):
        if val == 0:
            ret = idx + 1
    return ret
```


# [Codility lessons] TapeEquilibrium | [문제 3번](https://app.codility.com/programmers/lessons/3-time_complexity/tape_equilibrium/start/)

### 분류
`구현`

### 입력
정수 N개의 배열, $2 {\ge} N {\ge} 100,000$

### 출력
정수

### Sol

```python
def solution(A):
    ret = []
    left_sum, right_sum = 0, sum(A)
    for p in range(len(A)-1):
        left_sum += A[p]
        right_sum -= A[p]
        ret.append(abs(left_sum - right_sum))
    return min(ret)
```

### Notes
- 매 루프마다 sum을 해주면 시간초과 난다
- p의 위치에 따라 연산은 좌,우 한번씩 해준다.