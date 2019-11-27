---
  layout: post
  title: 링크드리스트(linked_list)
  tags: Linked_List
  categories: 'Linked List'
---

# 링크드 리스트(Linked List)구조
- 다른 말로 연결리스트
- 떨어진 곳에 존재하는 데이터를 포인터로 연결해서 관리하는 데이터 구조(배열은 순차적으로 연결된 공간에 데이터 나열 구조)
- 파이썬에서는 리스트 타입이 링크드 리스트의 기능을 모두 지원

- 노드(Node)와 포인터(Poointer)로 구성
  - 노드(Node) : 데이터를 저장하는 고간
  - 포인터(Pointer) : 다음 노드의 위치 주소 저장

# 구현

```python
class Node:
'''
  노드(Node) 클래스
'''
  def __init__(self, data, next=None): # 노드 초기화 함수
    self.data = data
    self.next = next

class NodeMgmt:
'''
  노드 생성, 삽입, 삭제, 조회 클래스
'''
  def __int__(self, data): # 노드 생성
    self.head = Node(data)

  def add(self, data): # 노드 삽입
    if self.head == '':
      self.head = Node(data)
    else:
      node == self.head
      while node.next
        node = node.next
      node.next = Node(data)

  def desc(self): # 노드 조회
    node = self.head
    while node:
      print(node.data)
      node = node.next

  def delete(self, data): # 노드 삭제
    if self.head == '':
    printint("해당 값을 가진 노드가 없습니다.")

    if self.head.data == data:
      temp = self.head
      self.head = self.head.next
      del temp
    else:
      node = self.head
      while node.next:
        if node.next.data == data:
          temp = node.next
          node.next = node.next.next
          del temp
```

# 장단점(C언어에서의 전통적인 링크드리스트)
## 장점 
- 미리 데이터 공간을 확보 하지 않아도 된다

## 단점
- 링크 정보를 담기위한 저장 공간이 필요하기 때문에 저장공간 효율이 좋지 않다
- 연결 정보를 찾는 시간이 있어서 속도가 느림
- 데이터 삭제시 앞, 뒤 노드를 연결해줘야 하는 부가적인 작업 필요

