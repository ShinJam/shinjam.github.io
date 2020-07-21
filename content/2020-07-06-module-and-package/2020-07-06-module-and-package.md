---
title: Python module/package 
date: 2020-07-06
category: CS
tags:
    - python
    - error
---

> 에러 해결 과정을 위한 module, package 정리 내용 입니다. 

# 문제 
```bash
~/fruit
├── all_fruit.py
├── like.py
├── spring
│   ├── dislike.py
│   ├── love.py
│   └── melon.py
└── summer
    └── grape.py
```

- ***beyond top level package error in relative import***  
e.g. summer/grape.py 내용을 사용 하는 spring/love.py를 실행 시킬 때 

- ***attempted relative import with no known parent package***  
e.g. fruit/에서 spring/love.py를 실행 시킬 때

# module VS package
파이썬의 module과 package 차이점은 간략하게 *한개* 혹은 *여러개* 이다. 

<p style='text-align: center'>
single VS multi === module VS package
</p>

즉 all_fruit.py, melon.py, grape.py 하나하나가 module 이고,  
module이 모여 있는 fruit/, spring/, summer/가 package이다.

## package 특징
1.  package는 `__init__.py`라는 파일을 package directory에 위치 해줘야 package라는 것을 알 수 있다.
2. `from` 으로 접근이 가능하다
3.  `.`으로 접근이 가능하다

**1.**

```bash
~/fruit
├── __init__.py
├── all_fruit.py
├── like.py
├── spring
│   ├── __init__.py
│   ├── dislike.py
│   ├── love.py
│   └── melon.py
└── summer
    ├── __init__.py
    └── grape.py
```

**2. all_fruits.py**

```python
from .spring import melon
...
```

**3.**  
*-m mod : run library module as a script (terminates option list)* 

```bash
$ cd ~
$ python -m fruit.spring.love
```

## module 특징
1. `import`로 부른다.

**love.py**

```python
import melon
...
```

# Solution
다시 돌아 와서 **package나 module을 부를 때 에러**가 발생 하기도 하는데, 
**어느 위치에서 실행** 시켰는지, **from혹은 import 잘못 사용**의 원인이 됩니다.

최초 실행되는 module을 기준을 절대 root로 package를 부르기 때문에 package구조 정보가 핵심입니다. 

<u>python -m 옵션 명령어를 사용하여 패키지 정보를 포함하여 moudle을 실행</u> 시켜야 합니다. 

## 확인

**all_fruit.py**

```python
from spring import melon

print('There are some fruits!')
print('  __name__', __name__)
print('  __package__', __package__)
```

**melon.py**

```python
NAME = 'melon'

print('This is melon.py')
print('  __name__', __name__)
print('  __package__', __package__, end='\n\n')


def say_name():
    return NAME
```

**love.py**

```python
from . import melon

print('I like', melon.say_name())
print('  __name__', __name__)
print('  __package__', __package__, end='\n\n')
```

**dislike.py**
```python
from ..summer import grape

print('I dislike', melon.say_name())
print('  __name__', __name__)
print('  __package__', __package__, end='\n\n')
```

### case 1

```bash
$ cd fruit
$ python all_fruit.py

This is melon.py
  __name__ spring.melon
  __package__ spring

There are some fruits!
  __name__ __main__
  __package__ None
```

### case 2
```bash
$ cd ~
$ python -m fruit/all_fruit
...
ModuleNotFoundError: No module named 'spring'
```

### case 3
```bash
$ cd ~
$ python -m fruit.spring.love

This is melon.py
  __name__ fruit.spring.melon
  __package__ fruit.spring

I like melon
  __name__ __main__
  __package__ fruit.spring
```

### case 4
```bash
$ cd fruit/spring
$ python love.py          
...
ImportError: attempted relative import with no known parent package
```

### case 5
```bash
$ cd fruit
$ python -m spring.dislike
...
ValueError: attempted relative import beyond top-level package
```
### 참고

`__name__` : 실행 되는 module을 포함한 package구조 정보  
`__package__`: 실행 되는 module의 package구조 정보  
`__main__`: 처음 실행되는 module의 `__name__`  


---
# References
- [stackoverflow](https://stackoverflow.com/questions/30669474/beyond-top-level-package-error-in-relative-import)
- [napuzba.com](https://napuzba.com/a/import-error-relative-no-parent/p2)
- [blog.naver.com/wideeye](https://m.blog.naver.com/wideeyed/221839634437)
- [myjorney.tistory.com/52](https://myjorney.tistory.com/52)
