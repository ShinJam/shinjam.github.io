---
title: 2020 카카오 인턴십 코딩테스트
date: 2020-07-29
category: Algorithm
tags:
    - 코딩테스트
    - 투포인터
---

# [카카오 인턴] 보석 쇼핑 | [문제 3번](https://programmers.co.kr/learn/courses/30/lessons/67258)

### 분류
`투포인터`

### 입력
문자열 배열 : $1 {\ge} ARRAY {\ge} 100,00$

### 출력
가장 짧은 구간 배열: [시작, 끝]

### Sol

```python
from collections import defaultdict


def solution(gems):
    result = [0, len(gems)]
    kinds = len(set(gems))
    current = defaultdict(int)

    l, r = 0, 0
    while r <= len(gems):
        if len(current) == kinds:
            if result[1] - result[0] > r -1 -l:
                result = [l + 1, r]
                
            current[gems[l]] -= 1
            if current[gems[l]] == 0:
                del current[gems[l]]
            l += 1

        else:
            if r < len(gems):
                current[gems[r]] += 1
            r += 1
            
    return result
```

### Notes
- `투포인터`를 사용 하여 해결.
l과 r을 0 번째 요소부터 시작하여 보속이 충족 될 때 까지 r을 증가 시켜주고 충족 되었을 시, l을 증가 시켜준다.
- 보석 충족 때마다 구간 길이를 계산하여 최소 값으로 갱신.
- 구간이 변할 때 마다 `set`으로 원소 확인 했으나 효율성에서 반이상 시간초과.
현재 구간에서의 보석 상황을 저장해 놓는다. r이 늘어 날때는 추가하고 l이 늘어날 때는 삭제 해준다.  