---
  layout: post
  title: "* Operator and Unpacking in 파이썬(Python)"
  tags: 
  categories: Python
---

> 파이썬 3.5 이상  
> unpacking 역할을 하는 * 연산자의 의문점들 해소 과정 공부 입니다.


파이썬을 같이 공부하는 분이 신기한게 있다고 링크를 하나 주셨다.
[가장 빠른 shallow copy of list in Python 3.5+](https://stackoverflow.com/questions/47859482/what-is-the-fastest-way-to-make-a-shallow-copy-of-list-in-python3-5)  

1. `some_list.copy()`
2. `some_list[:]`
3. `list(some_list)`
4. `[*some_list]`
5. ect.

요지는 `some_list`라는 어떤 리스트를 복사하는 가장 빠른 방법이 4. `[*some_list]` 라는 것이다.

# 내가 알던 * 연산자

내가 알던 * 연산으로는 다음과 같다

### 곱하기 연산
```python
num1 = 10
num2 = 2

num1 * num1 # ~> 20
```  

### 거듭 제곱  
```python
num1 = 10
num2 = 2

num1 ** num1 # ~> 10000
```  

### 반복  
```python
print("hi"*3) # ~> hihihi
```  

### 가변 인자 입력  
```python
def data(*args, **kargs):
  psss
```

# 새로 알게 된  * 연산

다시 돌아와서 지인이 알려준 가장 빠른 리스트 복사를 통해 * 연산자가 unpacking을 한다는 것 이다. 
[PEP 448](https://www.python.org/dev/peps/pep-0448/)에서 'Additional Unpacking Generalizations' 제목으로 제안 된 사항이고
[Python 3.5](https://docs.python.org/3/whatsnew/3.5.html?highlight=unpacking)에 추가 되었다는 것을 알 수 있었다. 

[PEP 448](https://www.python.org/dev/peps/pep-0448/#id4)에서 눈에 들어 온 부분이 있었다.
Whilst `*elements, = iterable`causes elements to be a list, `elements = *iterable`, causes elements to be a tuple

```
>>> *elments, = range(3) # 1
>>> print("elements type : ", type(elements), elements)
··· elements type :  <class 'list'> [0, 1, 2, 3, 4]

>>> elements = *range(3), # 2
>>> print("elements type : ", type(elements), elements)
··· elements type :  <class 'tuple'> (0, 1, 2)
```

## 의문점
1. \#1 \#2의 과정이 대체 뭐가 어떻게 되는 것인가?
2. \#1의 elements는 왜 list이고, \#2의 elements는 왜 tuple인가?
3. 왜 *iterable하고 ,을 찍지 않으면 에러가 나는가?

# 의문점 해결

## 1. \#1 \#2의 과정이 대체 뭐가 어떻게 되는 것인가?
쉽게 말해서 #1는 packing, #2는 unpacking이 되는 코드다. 

**packing**

```
>>> a, *b, c = range(5)
>>> print(a, b, c)
··· 0 [1, 2, 3] 4
```
`*elments, = range(3)`는 0~3의 숫자 모두 가변인자 elements에 다 담겠다는 뜻이 되기 떄문에 elements는 리스트 [0,1,2,3]이 되는 겁니다.

**upacking**

```
>>> data = [1,2,3] # 1
>>> def print_data(*args): # 2
>>>   print(args) # 3
>>> print_data(*data) # 4
··· 1, 2, 3
```
`*data`를 하면 data를 unpack 하겠다는 뜻이다.
\#4 에서 data를 unpack하여 인자를 넘겨준다. 즉 print_data(*data)는 print_data(1,2,3)이 된다.
\#2 에서 def print_data(*args): 에서 *args는 다시 1,2,3을 pack 한다.
\#3 에는 1,2,3이 pack 된 args를 출력하여 1,2,3 이 나온다.

## 2. \#1의 elements는 왜 list이고, \#2의 elements는 왜 tuple인가?
\#2에서는 튜플로 감싸서 unpack하기 때문
\#1에서는 unpack 연산은 unpack된 값들을 list로 감싸기 때문

부연 설명을 붙이면 다음과 같다

\#2먼저 보면, 

```
>>> num = 1, 2
>>> print(type(num), num)
··· <class 'tuple'> (1, 2)
```
파이썬에서는 괄호()안에 콤마(,)로 구성된 데이터를 튜플 자료형이라고 한다. 
위의 예제에서 볼 수 있듯이, 파이썬은 괄호()가 없어도 콤마(,)만 써도 튜플 자료형으로 인식한다. 

따라서 `elements = *range(3) , `는 `elements = (*range(3) , )`이다. 
range(3)을 튜플 자료형에서 unpack 하는 것이기 때문에 `elements = (0,1,2,)`가 된다. 

이제 \#1 이다.

[PEP 3132](https://www.python.org/dev/peps/pep-3132/)를 보면 
*This PEP proposes a change to iterable unpacking syntax, allowing to specify a "catch-all" name which will be assigned a list of all items not assigned to a "regular" name.*
위와 같이 명시 되어 있는 것을 볼 수 있다. 
한마디로 *unpacking 문법은 넘겨주는 요소들을 다 받아서 리스트 컨테이너로 감싼다*는 말이라고 해석 했다.

즉, packing된 데이터들은 항상 리스트 자료형이라고 볼 수 있겠다. 

`*elments, = range(3)` 의문도 풀린다. range(3) dml 0, 1, 2가 elments에 [0, 1, 2]로 되기 때문에 의문이 풀렸다

## 3. 왜 *iterable하고 ,을 찍지 않으면 에러가 나는가?

이쯤에서 뭔가 상당히 신경쓰이는 게 있다. 바로 콤마(,)이다. 

콤마가 있고 없고에 따라 에러가 난다. 
*가 unpack을 하는것을 알겠는데, 그러면 `elements = *range(3)` 하면 실행 되어야 하는거 같은데 안된다. 

많이 찾아 봤지만 아쉽지만 근거가 될 자료를 찾지 못했다. 
다만, 여러가지 코드를 실행해 보고 다음과 같이 결론을 내렸다. 

<p style="text-decoration: underline; font-weight: bold;">
unpack은 컨테이너안에서 실행 될 수 있고 컨테이너를 없애고 안에 내용물들을 반환한다.
</p>

```
>>> elements = *range(3)
··· SyntaxError: can't use starred expression here

>>> elements = *range(3) ,
>>> print(type(elements), elements)
··· <class 'tuple'> (0, 1, 2)

>>> elements = [*range(3)]
>>> print(type(elements), elements)
··· <class 'list'> [0, 1, 2]

>>> elements = {*range(3)}
>>> print(type(elements), elements)
··· <class 'set'> {0, 1, 2}

>>> print(*range(3))
··· 0 1 2
```

감싸진 컨테이너가 없이 unpack하면 문법에러가 나고,  
특정 컨테이너안에서 unpack하면 특정 컨테이너로 감싸지고 값을 반환한다.




---
### REF
[Unpacking generalizations](https://stackoverflow.com/questions/41251729/unpacking-generalizations)
[Star operator on left vs right side of an assignment statement](https://stackoverflow.com/questions/35636785/star-operator-on-left-vs-right-side-of-an-assignment-statement)