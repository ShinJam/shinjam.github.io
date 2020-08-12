---
title: 프로그래머스 문제풀이 - 여행경로
date: 2020-08-12
category: Algorithm
tags:
    - 프로그래머스
---

> level 3 - 여행경로 문제풀이 입니다. 


# [프로그래머스 고득점 kit] [여행경로](https://programmers.co.kr/learn/courses/30/lessons/43164)

### 분류
`BFS/DFS`

### 입력
티켓 배열 $3 {\le} tickets {\le} 10,000$  
티켓 = 알파벳 대문자 3글자

### 출력
티켓 경로 배열

### Sol

```python
from collections import defaultdict

def solution(tickets):
    tickets.sort(reverse=True)
    route = defaultdict(list)
    for departure, arrival in tickets:
        route[departure].append(arrival)
            
    stack = ['ICN']
    result = []

    while stack:
        last = stack[-1]
        if not last in route or not route[last]:
            result.append(stack.pop())
        else:
            stack.append(route[last].pop())
    
    return result[::-1]
```

### Try
```python{16}{numberLines: true}
from collections import defaultdict, deque

def solution(tickets):
    tickets.sort()
    route = defaultdict(deque)
    N = len(tickets)
    for departure, arrival in tickets:
        route[departure].append(arrival)
            
    result = ['ICN']

    while route:
        last = route[result[-1]]
        arrival = last.popleft()
        
        if len(result) != N and not arrival in route:
            last.append(arrival)
            continue
        result.append(arrival)
        
        if not last:
            route.pop(result[-2])
    
    return result
```


### Notes
- 제가 시도한 방법에서 도착지가 2개 이상일 때 16번째 줄에서 오류가 납니다. 
- 티켓이 존재하지 않아도 모두 방문 하기 위해 DFS사용하여 구현 했습니다. 

**테스트케이스 2.**  
['ICN' ,'B'], ['ICN', 'C'] ,['C', 'D'], ['D', 'ICN']  
$\rightarrow$ ['ICN', 'C', 'D', 'ICN', 'B']
 
도착지가 비행기 경로상에 없는 곳이 마지막 경로로 와야합니다.  
알파벳 순서 때문에 B를 먼저 방문하여 문제가 될 수 있었습니다. 

**테스트케이스 1.**  
['ICN', 'B'], ['B', 'C'], ['C', 'ICN'], ['ICN', 'D'], ['ICN', 'E'], ['E', 'F']  
$\rightarrow$ ['ICN', 'B', 'C', 'ICN', 'E', 'F', 'G', 'D']

문제 오류로 보입니다. 문제에서는 *모든 도시를 방문할 수 없는 경우는 주어지지 않습니다.* 로 나와있습니다.  
위에 예시로 보면 최종 도착지가 두 군데로 나뉘는 케이스가 포함이 됩니다. 

---

## Reference
- [Chaebiny블로그](https://chaibin0.tistory.com/entry/%EC%97%AC%ED%96%89%EA%B2%BD%EB%A1%9C-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98)
- [copy-driven-dev블로그](https://copy-driven-dev.tistory.com/entry/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-ProgrammersPython-%EC%97%AC%ED%96%89%EA%B2%BD%EB%A1%9C)