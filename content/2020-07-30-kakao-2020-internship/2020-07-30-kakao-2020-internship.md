---
title: 2020 카카오 인턴십 코딩테스트
date: 2020-07-30
category: Algorithm
tags:
    - 코딩테스트
    - 완전탐색
    - 방향
---

# [카카오 인턴] 경주로 건설 | [문제 4번](https://programmers.co.kr/learn/courses/30/lessons/67259)

### 분류
`완전탐색`

### 입력
N x N 배열 $ 3 {\le} N {\le} 25 $

### 출력
가장 적은 비용

### Sol1

```python
from collections import deque


def move_pos(x, y, d):
    pos = {
        'U': (0, -1),
        'D': (0, 1),
        'L': (-1, 0),
        'R': (1, 0)
    }
    return (x + pos[d][0], y + pos[d][1])

def cal_cost(now_v, new_v, cost):
    # 방향이 같을 경우에만 100 나머진 600
    cost += 100 if now_v == new_v else 600
    return cost

    
def bfs(v, N, board):
    queue = deque([(0, 0, 0, v)])
    visited = [[0] * N for _ in range(N)]
    
    while queue:
        x, y, cost, cur_dir = queue.popleft()
         
        for d in 'U', 'D', 'L', 'R':
            new_x, new_y, new_cost = *move_pos(x, y, d), cal_cost(cur_dir, d, cost)
            
            # 제한 사항(경로 범위 밖, 벽이 있을 경우)
            if not all(0 <= p < N for p in [new_x, new_y]) or board[new_x][new_y]:
                continue
            # 방문을 안했거나, 기존 비용이 더 큰 경우
            if not visited[new_x][new_y] or visited[new_x][new_y] > new_cost:
                visited[new_x][new_y] = new_cost
                queue.append((new_x, new_y, new_cost, d))
                    
    return visited[N-1][N-1]
    

def solution(board):
    answer = []
    N = len(board)
    for v in 'R', 'D':
        ret = bfs(v, N, board )
        answer.append(ret)
    return min(answer)
```

### Sol2

```python
from collections import deque
# 비용 계산
def cal_cost(v, nv, cost):
    cost += 100 if not (v - nv)%2 else 600
    return cost
    
# 경로 탐색 (bfs)
def search(board, N):
    # DP that MIN cost of each point
    visited = [[0] * N for _ in range(N)]
    # East, South, West, North
    dx, dy = [1, 0, -1 , 0], [0 , 1 , 0, -1]
    # Initial direction : East, South
    queue = deque([[0, 0, 0, 0],[0, 0, 1, 0]]) # x, y, Direction, cost
    while queue:
        x, y, vector, cost = queue.popleft()

        # 동서남북 탐색
        for v in range(4):
            nx, ny, nc = x + dx[v], y + dy[v], cal_cost(vector, v, cost)
            # board가 1(벽), N넘을 때, 
            if not all(0 <= p < N for p in [nx, ny]) or board[ny][nx]:
                continue
            # 방문 안했거나 기존 비용이 더 작으면 통과
            if not visited[ny][nx] or visited[ny][nx] >= nc:
                visited[ny][nx] = nc
                queue.append([nx, ny, v, nc])
                            
    return visited[N - 1][N - 1]
    

def solution(board):
    ret = search(board, len(board))
    return ret
```

### Notes
- 경로 탐색을 위한 BFS사용
- BFS는 재방문 하지 않으나, 비용을 계산하여 갱신 해야 할 때 재방문 가능하게 하여 방문 여부가 아닌 최소 비용 값 저장
- 시작 지점에서 오른쪽, 아래쪽 두 방향 케이스가 두 가지다.