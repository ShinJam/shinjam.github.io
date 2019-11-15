---
  layout: post
  title: '제너레이터(Generator)_Python'
  tags: [python, generator]
  categories: python
---

> 데코레이터 개념, 사용법, 쓰임새

> 필요 개념 : **이터레이터(iterator)**

# 데코레이터(Decorator)란 무엇인가?
#### - _What_ is decorator?

*In computer science, a generator is a routine that can be used to control the iteration behaviour of a loop.*[wiki](https://en.wikipedia.org/wiki/Generator_(computer_programming))

*컴퓨터 과학에서, 제너레이터는 반복자(iterator)와 같은 루프를 다루기 위해 쓰여지는 특별한 함수 또는 루틴*

- 이터레이터(iterator)를 직접 만들 때 사용하는 구문

# 어떻게 사용 할까? 
### - _How_ to use closure?
함수 내부에 **yeild**라는 키워드가 포함 되면 해당 함수는 제너레이터가 됨

> [스쿨 오브 웹](http://schoolofweb.net/blog/posts/%ED%8C%8C%EC%9D%B4%EC%8D%AC-%EC%A0%9C%EB%84%88%EB%A0%88%EC%9D%B4%ED%84%B0-generator/)을 재구성 했습니다.

### 일반 함수
```python
def square_numbers(nums):
    result = []
    for i in nums:
        result.append(i * i)
    return result

my_nums = square_numbers([1, 2, 3, 4, 5])

print my_nums
```

**output :**  
```
$ python generator.py
[1, 4, 9, 16, 25]
```

### 제너레이터

```python
def square_numbers(nums):
    for i in nums:
        yield i * i

my_nums = square_numbers([1, 2, 3, 4, 5])

print(my_nums)
```

**output :**  
```
$ python generator.py
<generator object square_numbers at 0x1007c8f50>
```

```python
for i in range(5):
  print(next(my_nums))
```
**output :**  

1
4
9
16
25

## Ect.
### 리스트 컴프리핸션에서 `[]`를 `()`로 바꾸면 제너레이터가 된다.

### 리스트 컴프리핸션
```python
my_nums = [x*x for x in [1, 2, 3, 4, 5]]

print my_nums

for num in my_nums:
    print num
```

**output :**  

```
$ python generator.py
[1, 4, 9, 16, 25]
1
4
9
16
25
```

### 제너레이터
```python
my_nums = (x*x for x in [1, 2, 3, 4, 5])  #1

print my_nums

for num in my_nums:
    print num
```

**output :**  

```
$ python generator.py
<generator object <genexpr> at 0x1007c8f50>
1
4
9
16
25
```

# 왜 사용 할까?
### - _Why_ use generator?
- 좋은 퍼포먼스 : 전체 크기만큼의 메모리를 가지고 있는 시퀀스 데이터와는 달리 메모리를 적게 사용
 

---
### REF
- [스쿨 오브 웹](http://schoolofweb.net/blog/posts/%ED%8C%8C%EC%9D%B4%EC%8D%AC-%EC%A0%9C%EB%84%88%EB%A0%88%EC%9D%B4%ED%84%B0-generator/)
- [코딩 도장](https://dojang.io/mod/page/view.php?id=2412)
