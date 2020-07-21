---
title: 2020 카카오 인턴십 코딩테스트
date: 2020-07-21
category: Algorithm
tags:
    - 코딩테스트
    - 브루트포스
---

# [카카오 인턴] 수식 최대화 | [문제 2번](https://programmers.co.kr/learn/courses/30/lessons/67257)

### 분류
`브루트포스`

### 입력
수식 : 길이가 3 이상 100 이하인 문자열

### 출력
계산 결과 값 : $2^{63} - 1$

### Sol

```python
from itertools import product

def cal(f, opts):        
    if opts and not f.isdigit():
        ret = [cal(x, opts[1:]) for x in f.split(opts[0])]
        return str(eval(opts[0].join(ret)))
    return str(eval(f))


def solution(formular):
    opts = ['+', '-', '*']
    ret = []
    cases = [n for n in product(opts, repeat=3) if len(set(n)) == 3]
    
    for c in cases:
        r = cal(formular, c)
        ret.append(abs(int(r)))
    
    return max(ret)
```

### Notes
연산 우선순위 경우의 수 == 3! == 6  
입력받는 수식을 숫자와 기호로 분해 한 뒤, 6가지의 경우에 따라 차례로 계산 하여 결과 값 도출