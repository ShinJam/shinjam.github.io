---
title: codility lessons 02
date: 2020-08-05
category: Algorithm
tags:
    - 코딜리디
---

# [Codility lessons] CyclicRotation | [문제 2번](https://app.codility.com/programmers/lessons/2-arrays/cyclic_rotation/start/)

### 분류
`구현`

### 입력
N개의 숫자 배열, 정수 K  $1 {\ge} N, K {\ge} 200$

### 출력
N개의 숫자 배열

### Sol

```python
from collections import deque
def solution(A, K):
    case = deque(A)
    for _ in range(K):
        case.rotate()
    return [*case]
```

### Notes
- deque의 rotate 사용



# [Codility lessons] OddOccurrencesInArray | [문제 2번](https://app.codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/start/)

### 분류
`구현`

### 입력
N개의 숫자 배열 $1 {\ge} N {\ge} 1,000,000$

### 출력
정수

### Sol

```python
def solution(A):
    check = {}
    ret = 0
    for x in A:
        if x in check:
            check[x] += 1
        else:
            check[x] = 1
    for key, val in check.items():
        if val % 2 == 1:
            ret = key
    
    return ret
```

### Notes
- 딕셔너리 자료구조를 사용하여 카운팅
