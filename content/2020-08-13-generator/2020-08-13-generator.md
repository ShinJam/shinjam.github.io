---
title: 파이썬 제너레이터(Generator)
date: 2020-08-13
category: Development
tags:
    - python
    - generator
---

> 제너레이터의 개념, 사용법, 쓰임새 등을 정리합니다.

> 필요 개념 : **이터레이터(iterator)**

# 제너레이터(Generator) 개념

*In computer science, a generator is a routine that can be used to control the iteration behaviour of a loop.*[wiki](https://en.wikipedia.org/wiki/Generator_(computer_programming))

*컴퓨터 과학에서, 제너레이터는 반복자(iterator)와 같은 루프를 다루기 위해 쓰여지는 특별한 함수 또는 루틴*

Generator는 Iterator이다. 하지만  Iterator는 Generator가 아니다.  
(Generator $\rightarrow$ Iterator $BUT$ Iterator $\nrightarrow$ Generator) 

<u>Iterator와 Generator의 차이를 이해하는 것이 Generator를 이해</u>하는 것이라고 할 수 있을거 같습니다. 

# 어떻게 만들까? 
1. 함수 내부에 [yeild](#yeild)라는 키워드가 포함 되면 해당 함수는 제너레이터가 됨
2. [Generator Expresison](#generator-expression제너레이터-표현식) 사용

## Yeild

### 일반 함수
```python
def square_numbers(nums):
    result = []
    for i in nums:
        result.append(i * i)
    return result

my_nums = square_numbers([1, 2, 3, 4, 5])

print(my_nums)
```

```bash
>>> python generator.py
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

```bash
>>> python generator.py
<generator object square_numbers at 0x1007c8f50>
```

```bash
>>> for i in range(5):
>>>   print(next(my_nums))
1
4
9
16
25
```

## Generator Expression(제너레이터 표현식)

리스트 컴프리핸션에서 `[]`를 `()`로 바꾸면 제너레이터가 된다.

```python
my_nums = (x*x for x in [1, 2, 3, 4, 5])  #1

print my_nums

for num in my_nums:
    print num
```

```bash
>>> python generator.py
>>> <generator object <genexpr> at 0x1007c8f50>
1
4
9
16
25
```

# 왜 사용 할까?
**효율적인 메모리 사용**  
- 전체 크기만큼의 메모리를 가지고 있는 시퀀스 데이터와는 달리 메모리를 적게 사용  

list처럼 list요소가 커질수록 메모리가 커지는 반면 Generator는 그냥 레퍼런스만 저장하기 떄문이다.
 ```bash
>>> x=(i for i in range(1,11))
>>> dir(x)
['__class__', '__delattr__', '__doc__', '__format__', '__getattribute__', '__hash__', '__init__', '__iter__', '__name__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', 'close', *'gi_code'*, *'gi_frame'*, *'gi_running'*, 'next', 'send', 'throw']
```
gi\_frame, gi\_running, gi\_code등과 같이 매 반복 순간에 대한 정보를 담고 있을 뿐이다. 

---
### REF
- [스쿨 오브 웹](http://schoolofweb.net/blog/posts/%ED%8C%8C%EC%9D%B4%EC%8D%AC-%EC%A0%9C%EB%84%88%EB%A0%88%EC%9D%B4%ED%84%B0-generator/)
- [코딩 도장](https://dojang.io/mod/page/view.php?id=2412)
- [Python Tips](https://book.pythontips.com/en/latest/generators.html)
- [Stackoverflow-27794267](https://stackoverflow.com/questions/27794267/size-of-generator-object-in-python)
- [Stackoverflow-52458135](https://stackoverflow.com/questions/52458135/in-what-situations-should-you-actually-use-generators-in-python)