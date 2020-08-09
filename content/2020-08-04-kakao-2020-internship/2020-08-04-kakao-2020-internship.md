---
title: 2020 카카오 인턴십 코딩테스트
date: 2020-08-04
category: Algorithm
tags:
    - 코딩테스트
    - 완전탐색
---

# [카카오 인턴] 동굴 탐색 | [문제 5번](https://programmers.co.kr/learn/courses/30/lessons/67260)

### 분류
`완전탐색`

### 입력
동굴 수 : n , (2 {\le} n {\le} 200,00)
n개의 연결 동굴 경로 : path
조건 경로 order

### 출력
모든 동굴 방문 가능 여부

### Sol

```python
from collections import deque


def dfs(graph, order, n):
    stack = deque([*graph[0]])
    visited, prv, nxt = [0] * n, [0] * n, [0] * n
    for a, b in order:
        if b == 0:
            return False
        prv[b] = a

    while stack:
        cave = stack.pop()
        
        # 이미 방문 했을 때 패스
        if visited[cave]:
            continue
        # 필요 동굴 방문 안했을 때 패스
        if prv[cave] and not visited[prv[cave]]:
            nxt[prv[cave]] = cave # 충분 동굴 방문 시 돌아와야할 동굴
            continue
        
        visited[cave] = 1
        
        # 자식 동굴 탐색 추가(0아니면서 방문 안한 동굴 만)
        stack.extend(x for x in graph[cave] if x and not visited[x])

        # 충분 동굴 다시 탐색 시작 
        if nxt[cave]:
            stack.append(nxt[cave])

        
    return visited.count(1) == n - 1
        
    
def solution(n, path, order):
    # 동굴 양방향 그래프 생성
    graph = [[] for _ in range(n)]
    for a, b in path:
        graph[a].append(b)
        graph[b].append(a)
    
    answer = dfs(graph, order, n)
    
    return answer
```

### Notes
- 경로 탐색을 위해 DFS 사용
- 각 동굴 순회하며 조건에 부합하는지 확인
- 모든 동굴이 조건에 부합하면 True
