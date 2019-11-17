---
  layout: post
  title: 스택(Stack)
  tags: stack
  categories: 'Data Structure'
---

# 스택의 구조
- 데이터를 제한적으로 접근할 수 있는 구조
  - 한쪽 끝에서만 자료를 넣거나 뺄 수 있는 구조
- 가장 나중에 쌓은 데이터를 가장 먼저 빼낼 수 있는 데이터 구조
  - 큐 : FIFO , 스택 : LIFO

# 스택의 활용
- 컴퓨터 내부의 프로세스 구조의 함수 동작 방식

# 스택의 장점
- 구조가 단순해서, 구현이 쉽다.
- 데이터 저장/읽기 속도가 빠르다.

# 스택의 단점
- 데이터 최대 갯수를 미리 정해야 한다.
  - 파이썬의 경우 재귀 함수는 1000번까지만 호출이 가능
- 저장 공간의 낭비가 발생할 수 있음

# 파이썬 리스트에서 제공하는 메서드로 스택 사용
```python
data_stack = list()

data_stack.append(1)
data_stack.append(2)

data_stack.pop() # 2