---
title: codility lessons
date: 2020-08-05
category: Algorithm
tags:
    - 코딜리디
---

# [Codility lessons] BinaryGap | [문제 5번](https://app.codility.com/programmers/lessons/1-iterations/)

### 분류
`구현`

### 입력
정수 N

### 출력
최대 0 갯수

### Sol

```python
def solution(N):
    binary = bin(N)[2:]
    
    ones = [idx for idx, val in enumerate(binary) if val == '1']
    cnt = [ones[x] - ones[x - 1] - 1 for x in range(1, len(ones))]
        
    return max(cnt) if len(ones) != 1 else 0
```

### Notes
- bin built-in fuction 사용하여 정수 N을 bianary로 만든다.
