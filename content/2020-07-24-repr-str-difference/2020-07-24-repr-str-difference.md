---
title: __str__ VS __repr__
date: 2020-07-24
category: Development
tags:
    - python
---

> 이해를 바탕으로 str과 repr 차이점을 정리합니다.

**\__repr__**

> Help on built-in function repr in module builtins:  
> 
> repr(obj, /)  
>     Return the canonical string representation of the object.  
>     For many object types, including most builtins, eval(repr(obj)) == obj.  

**\__str__**

> Help on class str in module builtins:  
>
> class str(object)  
> 
>   str(object='') -> str  
>   str(bytes_or_buffer[, encoding[, errors]]) -> str  
>   
>   Create a new string object from the given object.  
>   If encoding or errors is specified, then the object must expose a data buffer  
>   that will be decoded using the given encoding and error handler.  
>   Otherwise, returns the result of object.__str__() (if defined) or repr(object).


# 차이점

## \__repr__

- 객체의 완전한 정보 표현에 목적
- representation 약자
- 일종의 객체 공식 표현 / 개발자를 위한 표현

## \__str__

- 객체의 읽을 수 있는 깔끔한 표현에 목적
- 객체의 추가 가공 및 데이터 호완에 목적
- 일종의 객체 비공식 표현 / 최종 사용자를 위한 표현

<p style='text-align: center; font-size: 1.5em'>
    <u>객체 표현에 따른 역할 구분</u>
</p>

# 공통점

- 객체를 문자열로 표현

# 쓰임

## 재사용 (`eval(repr(obj)) == obj`)

`datetime` 사용시 <b>유저</b>에게는 <b>시간 표시</b>, <b>개발자</b>에게는 <b>객체 표시</b> 하여 **재사용**이 가능하다.

```python
import datetime
```

```bash
>>> time_first = datetime.datetime.now()
>>> time_first
datetime.datetime(2020, 7, 24, 14, 25, 8, 7302)
>>> print(repr(time_first))
datetime.datetime(2020, 7, 24, 14, 25, 8, 7302)
>>> print(time_first)
2020-07-24 14:25:08.007302
```

```bash
>>> time_second = datetime.datetime.now()
>>> time_second
datetime.datetime(2020, 7, 24, 14, 27, 13, 480069)
>>> print(repr(time_second))
datetime.datetime(2020, 7, 24, 14, 27, 13, 480069)
>>> print(time_second)
2020-07-24 14:27:13.480069
```

## 디버깅, 로깅

```python
try:
    x=10/0
except ( FloatingPointError, ZeroDivisionError ) as err:
    print(err)
division by zero

try:
    x=10/0
except ( FloatingPointError, ZeroDivisionError ) as err:
    repr(err)
"ZeroDivisionError('division by zero',)"
```

<p style='text-align: center; font-size: 1.5em'>
    <u>"repr = 개발 관점 / str = 유저 관점"에 따른 객체 표현</u>
</p>


---
# Reference
- [stackoverflow](https://stackoverflow.com/questions/1436703/difference-between-str-and-repr)
- [박성환님블로그](https://shoark7.github.io/programming/python/difference-between-__repr__-vs-__str__)
- [c10106](https://c10106.tistory.com/1598)
- [python.omics](http://python.omics.wiki/strings/str-vs-repr)