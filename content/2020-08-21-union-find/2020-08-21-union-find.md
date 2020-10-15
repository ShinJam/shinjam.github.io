---
title: Union Find (Disjoint sets)
date: 2020-08-21
category: Algorithm
tags:
    - 자료구조
---

> 유니온 파인드 개념을 정리합니다.

# 개념

a data structure that stores a collection of disjoint (non-overlapping) sets - [wiki](https://en.wikipedia.org/wiki/Disjoint-set_data_structure)

분할 된 집합의 분류를 만드는 자료구조로 일종의 클러스터링이라고도 볼 수 있을 거 같다. 

# 사용 방법

보통 요소들을 부모와 자식 관계로 만들어 부모를 집합의 대표로 만들어 분류한다. (링크드리스트 구조로도 가능하다.)
분류 방법으로 3가지과정을 거친다.  

**[make_set](#make_set)** : 요소에게 부모를 설정(분류 설정)  
**[find](#find)** : 요소의 부모 찾기(분류 검색)  
**[union](#union)** : 두개의 분류 집합 합치기  


## make_set

```python
def make_set(x):
    x.parent = x
```

x 노드의 부모를 x 로 설정

## find

```python
def find(x)
    if x.parent == x
        return x
    else
        return find(x.parrent)
```
x 노드의 대표가 자기자신 일때 까지 재귀적으로 검색

## union

```python
def union(x, y):
    xRoot = find(x)
    yRoot = find(y)

    xRoot.parent = yRoot
```

두 집합 분류를 합치기 위해 한 쪽 대표를 반대 쪽 대표로 변경

# Union 문제점

부모 자식 구조를 무분별하게 붙이게 되면 레벨이 깊어 질 수 있고 성능이 안좋아 진다. 

## 해결 방법

1. 합칠 때 작은 집합을 큰 집합 자식으로 합치기
2. 부모 자식을 1 래벨로 평평하게 합치기

```python
def find(x):
    if x.parent != x:
        x.parent = find(x.parent)
    return x.parent
```

# 문제 에시
## 백준 [친구 네트워크](https://www.acmicpc.net/problem/4195)

```python
import sys
input = sys.stdin.readline

def find(x):
    if x not in root:
        root[x], root_cnt[x] = x, 1
    if x != root[x]:
        root[x] = find(root[x])
    return root[x]

def union(x, y):
    X, Y = find(x), find(y)
    if X != Y:
        root[Y] = X
        root_cnt[X] += root_cnt[Y]
    return X

for _ in range(int(input())):
    root, root_cnt = dict(), dict()
    for _ in range(int(input())):
        x, y = input().split()
        print(root_cnt[union(x, y)])
```