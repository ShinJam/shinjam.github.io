---
  layout: post
  title: 큐(Queue)
  tags: 
  categories: 
---

# 큐 구조
- 가장 먼저 넣은 데이터를 가장 먼저 꺼낼 수 있는 구조
  - FIFO(First-in, First-Out) 또는 LILO(Last-in, Last-Out)방식으로 스택과 꺼내는 순서가 반대

# 어디에서 많이 쓰일까?
- 멀티 태스킹을 위한 프로세스 스케쥴링 방식을 구현하기 위해 많이 사용된다. (운영체제 관련)

# 알아둘 용어
- Enqueue : 큐에 데이터를 넣는 기능
- Dequeue : 큐에서 데이터를 꺼내느 ㄴ기능
  - [Visualgo](https://visualgo.net/en/list)에서 시연 가능

# 파이썬 queue 라이브러리 활용
- 다양한 큐 구조로 Queue(), LifoQueue(), PriorityQueue() 제공
- 프로그램에 따라 적합한 자료 구조를 사용
  - Queue() : 가장 일반적인 큐 자료 구조
  - LifoQueue() :  나중에 입력된 데이터가 먼저 출력되는 구조 => 스택과 같음
  - PriorityQueue() : 데이터마다 우선순위를 넣어서, 우선순위가 높은 순으로 데이터 출력

## Queue()로 큐 만들기 (가장 일반적인 큐, FIFO(First--in, First-Out))
```python
import queue

data_queue = queue.Queue()
queue.put("fast-campus")
data_queue.put(1)
data_queue.get() # fast-campus
data_queue.qsize() # 1
```

## LifoQueue()로 큐 만들기 (LIFO(Last-in, Last-Out))
```python
import queue

data_queue = queue.Queue()
queue.put("fast-campus")
data_queue.put(1)
data_queue.get() # 1
data_queue.qsize() # 1
```

## PrioritQueue()로 큐 만들기
```python
import queue

data_queue = queue.PriorityQueue()
data_queue.put((10, "korea")) # (우선순위, 데이터)
data_queue.put((5, 1))
data_queue.put((15,"china"))

data_queue.qsize() # 3
data_queue.get() # (10, "korea")
```
# Ect.
- 큐의 경우에는 장단점 보다는 큐의 활용 예로 프로세스 스케쥴링 방식을 함께 이해 해두는 것이 좋다.