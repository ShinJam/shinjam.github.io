---
  layout: post
  title: '클로저(Closure)_Python'
  tags: [python, closure]
  categories: python
---

> 클로저의 개념, 쓰임새, 사용법

> 필요 개념 : **일급 객체**, **내부 함수**

> 관련 개념 : **함수형 프로그래밍**

# 클로저(Closure)란 무엇인가?
#### - _What_ is closure?
*In programming languages, a closure, also lexical closure or function closure, is a technique for implementing lexically scoped name binding in a language with first-class functions...* [wikipedia](https://en.wikipedia.org/wiki/Closure_(computer_programming))

*프로그래밍 언어에서의 클로저란 퍼스트클래스 함수를 지원하는 언어의 네임 바인딩 기술*

- 어떤 함수가 자신이 갖고있는 환경과 함께 저장한 레코드
- 자신의 영역 밖에서 호출된 함수의 변수값과 레퍼런스를 복사하고 저장한 뒤, 이 값들에 액세스, 맵핑 할 수 있게 하는 역할
- 함수형 프로그래밍에서부터 고안된 기법

# 왜 사용할까?
### - _Why_ closure is used?
- 일반적으로 제공해야 할 기능(method)이 적은 경우
- 지역 변수와 코드를 묶어서 사용 하고 싶을 때
- 데이터를 숨기고 싶을때 : 클로저에 속한 지역 변수는 바깥에서 접근 불가
- 기존에 만들어진 함수나 모듈 등을 수정하지 않고 커스터마이징 하고 싶을 때

# 어떻게 사용 할까?
### - _How_ to use closure?
```python
# print_name.py
def your_name(name):
  kor = "안녕하세요~!"
  eng = "Hi~!"
  fr = "Bonjour~!"

  def greeting(nation):
    current_nation = ''
    if nation == "한국":
      current_nation = kor
    elif nation == "미국":
      current_nation = eng
    elif nation == "프랑스":
      current_nation = fr
    else:
      current_nation = kor
    print(f"kor: {kor}, eng: {eng}, fr: {fr}")
    return f"{current_nation} {name}님"
  return greeting

hello = your_name("Shinjam")
print("hello는 뭐가 들어 있을까? :", hello)
print("hello의 타입은? :",type(hello))
print("아! hello는 함수 이구나, 실행해 보자(영어) ==> ", hello("미국"))
print("아! hello는 함수 이구나, 실행해 보자(한국어) ==> ", hello("한국"))
```
```
$ python print_name.py

hello는 뭐가 들어 있을까? : <function your_name.<locals>.greeting at 0x10c6ea950>
hello의 타입은? : <class 'function'>
kor: 안녕하세요~!, eng: Hi~!, fr: Bonjour~!
아! hello는 함수 이구나, 실행해 보자(영어)==>  Hi~! Shinjam님
kor: 안녕하세요~!, eng: Hi~!, fr: Bonjour~!
아! hello는 함수 이구나, 실행해 보자(한국어)==>  안녕하세요~! Shinjam님
```

### 그림으로 이해하기
- `your_name(name)`함수를 아래 그림처럼 표현해 볼수 있다.
![closure_img1](/assets/img/img_closure1_python.png)
- `$ hello = your_name("Shinjam")`하면 다음과 같다.
![closure_img1](/assets/img/img_closure2_python.png)
- `hello("미국")` 은 `greeting("미국")`한거와 같다. 클로저 함수 덕분에 `greeeting함수`에서 없어진 `your_nameg함수`에 있는 **kor, eng,  fr**변수를 쓸 수 있다.

# 외부 함수에 있는 변수는 어디에 있는가?
### - 반환된 `greeting함수`를 가리키고있는 **hello**를 살펴 본다.

```python
print(dir(hello))
```

**output :**
<p>
['__annotations__', '__call__', '__class__', <span style="font: 25px solid;color: red">'__closure__'</span>, '__code__', '__defaults__', '__delattr__', '__dict__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__get__', '__getattribute__', '__globals__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__kwdefaults__', '__le__', '__lt__', '__module__', '__name__', '__ne__', '__new__', '__qualname__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__']
</p>

### - **hello**가 클로저 인가보다.
### - **hello**는 그럼 함수 인가?

```python
print(type(hello.__closure__))
```

**output :**
<p>
<class 'tuple'>
</p>

### - **hello**는 튜플 같은데 뭐가 들었나 보고 싶다.

```python
print(hello.__closure__)
```
**output :**
<p>
(<cell at 0x10c71c810: str object at 0x10c5cd0b0>, <cell at 0x10c71ca90: str object at 0x10c5cda70>, <cell at 0x10c743990: str object at 0x10c7ebdc0>, <cell at 0x10c743650: str object at 0x10aa56a70>)
</p>

### - cell ~ 이 4개나 들어 있다. cell 객체는 무엇을 갖고 있을까?
> [파이썬에서 *'cell'*은 객체로 여러 스코프에서 참조되는 변수를 실행하기 위해 사용 된다.](https://docs.python.org/ko/3.6/c-api/cell.html)

```python
print(dir(hello.__closure__[0])) # 4개 다 동일 하게 출력 되다.
```
**output :**
<p>
['__class__', '__delattr__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__le__', '__lt__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', <span style="font: 25px solid;color: red">'cell_contents'</span>]
</p>

### - 'cell_contents'라는 속성 값이 눈에 들어온다. 조회해 보자.
```python
# len(hello.__closure__) => 4
for i in range(4):
    print(hello.__closure__[i].cell_contents)
```

**output :**
<p>
Hi~! <br>
Bonjour~! <br>
안녕하세요~! <br>
Shinjam <br>
</p>

### - `your_name함수`에 있는 전달한 매개 변수를 포함한 속성 값들이 출력 된다!


# 어디에 사용 할까?
### - _Where_ can be used?

## Example 1
### - 그냥 함수 사용
```python
def func_power_2(num):
    return num * num
def func_power_3(num):
    return num * num * num
def func_power_4(num):
    return num * num * num * num

print (calc_power_2(3)) # ~> 9
print (calc_power_3(3)) # ~> 27
print (calc_power_4(3)) # ~> 81
```
### - 클로저 이용
```python
def func_pow(n):
    def power(num):
        return num ** n
    return power

power2 = func_pow(2)
power3 = func_pow(3)
power4 = func_pow(4)

print (power2(3)) # ~> 9
print (power3(3)) # ~> 27
print (power4(3)) # ~> 81
```

## Example 2
### - lambda 함수 사용
```python
def calc():
    a = 4
    b = 8
    return lambda x: a * x + b    # 람다 익명 함수 반환
 
c = calc()
print(c(1), c(2), c(3), c(4), c(5)) # ~> 12 16 20 24 28
```

---

### REF
- [스쿨 오브 웹](http://schoolofweb.net/blog/posts/파이썬-클로저-closure/)
- [whatisthenext.tistory.com/112](https://whatisthenext.tistory.com/112)
- [잔재미코딩](https://fun-coding.org/PL&OOP4-3.html)
- [코딩도장](https://dojang.io/mod/page/view.php?id=2366)