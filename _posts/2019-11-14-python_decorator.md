---
  layout: post
  title: '데코레이터(Decorator)_Python'
  tags: [python, decorator]
  categories: python
---

> 데코레이터 개념, 사용법, 쓰임새

> 필요 개념 : **일급 객체**, **클로저**

> 관련 개념 : **데코레이터 패턴**, **메다 프로그래밍**

# 데코레이터(Decorator)란 무엇인가?
#### - _What_ is decorator?

*A Python decorator is a specific change to the Python syntax that allows us to more conveniently alter functions and methods* [wiki.python.org](https://wiki.python.org/moin/PythonDecorators#What_is_a_Decorator)

*파이썬에서 데코레이터는 편리하게 함수와 메소드를 바꿀수 있게 하는 문법이다.*

- decorator는 메소드, 클래스, 함수 수정에 사용되는 호출 가능한 python 객체
- java annotation에서 파생 되었고 decorator pattern 과 유사하지만 같지 않다.
- meta programming의 한 형식

# 어떻게 사용 할까? 
### - _How_ to use closure?
꾸며주고 싶은 함수 위에 키워드 `@`를 사용한다.

> [코드잇](https://blog.naver.com/codeitofficial/221673642106) 파이썬에서 데코레이터(Decorator)란?? 예제 재구성

**상황 1)**  과속 차량 단속 기계에 들어가는 코드를 작성 한다고 가정한다.  

`is_speeding 함수` :
- 측정된 차량의 속도와 제한 속도를 비교해서 과속 차량인지 아닌지를 판단
- 과속 차량이면 True를, 과속 차량이 아니면 False를 리턴

```python
def is_speeding(speed, standard):
	return speed > standard
```

**상황 2)**  정부 정책 변경 : 과속 차량인 경우, 얼마나 더 과속 했는지 기록 
<p style="text-decoration: underline;color: red">하지만 정부 정책이 또 언제 어떻게 바뀔지 모르기 때문에 기존 함수(is_speeding)을 바꾸고 싶지가 않다.</p>
<p style="font-size: 1.5em">데코레이터로 사용하여 문제 해결!</p>

```python
def quick_fix(func): 

	def result(car_speed, speed_standard):
		if func(car_speed, speed_standard):
			print("적발! 제한 속도 {}km/h 초과".format(car_speed-speed_standard))
			return True 
		else:
			return False 

	return result 

@quick_fix
def is_speeding(speed, standard):
	return speed > standard
```

```python
print(is_speeding(150, 110))
print(is_speeding(100, 110))
```

**output :**  

적발! 제한 속도 40km/h 초과  
True  
False  

### @quick_fix는 is_speeding 함수를 꾸며주는데 원리는 아래와 같다.

```python
is_speeding = quick_fix(is_speeding)
```

![decorator_img](/assets/img/img_decorator1_python.png)

```python
is_speed(speed, standard) = result(car_speed, speed_standard)
```

# 어디에 사용 할까?
### - _Where_ can be used?

## Example 1
### - 분석, 로깅, 디버깅
규모가 큰 애플리케이션에서 현 상황 측정, 다양한 활동을 정량화하는 지표 필요
그러한 중요 이벤트를 전용 함수나 메서드에 캡슐화 하여 요구사항을 높은 가독성으로 쉽게 처리 가능

**상황 )**  함수에 전달 된 데이터를 나열 하여 확인하고 싶을 때  

```python
def print_debug(f):
    def decorator(*args, **kwargs):
        print('args:', args)
        print('kwargs:', kwargs)
        result = f(*args, **kwargs)
        return result
    return decorator

@print_debug
def print_string(value):
    print('print_string call')
    print(value)

print_string('asdf')
```
**output :**  

args: ('asdf',)  
kwargs: {}  
print_string call  
asdf

## Example 2
### - 유효성 검사, 런타임 검사
파이썬은 타입에 엄격하지만 동적이기 때문에 생길 수 있는 버그 캐치
들어오고 나가는 데이터에 대해 맞춤형 검사 가능

**상황 )**  이메일로 가입하는데 `@`가 없으면 오류 강제 발생

```python 
def validate_email(func):
    def wrapper(*args, **kwargs):
        data = func(*args, **kwargs)
        if '@' in data:
          return True
        else:
          raise ValueError("@ is missed")
    return wrapper

@validate_email
def input_email(email):
  user_input = input('원하는 이메일 아이디 입력 :')
  return user_input
```

## Example 3
### - 프레임 워크 제작
플라스크(Flask)에서는 데코레이터를 사용해 HTTP 요청을 처리하는 함수로 URL을 라우팅

```python
# For a RESTful todo-list API.
@app.route("/tasks/", methods=["GET"])
def get_all_tasks():
    tasks = app.store.get_all_tasks()
    return make_response(json.dumps(tasks), 200)

@app.route("/tasks/", methods=["POST"])
def create_task():
    payload = request.get_json(force=True)
    task_id = app.store.create_task(
        summary = payload["summary"],
        description = payload["description"],
    )
    task_info = {"id": task_id}
    return make_response(json.dumps(task_info), 201)
```

## Others
- 클래스 메서드 또는 정적 메서드를 만드는 것 함수 속성 추가, 추적, precondition 와 postcondition, synchronisation을 설정
- tail recursion elimination, memoization, decorators 작성 향상

## Ect.
데코레이터는 여러개 쌓을 수 있다.

```python
@invincible
@favorite_color("Blue")
def black_knight():
    pass
```
```python
def black_knight():
    pass
black_knight = invincible(favorite_color("Blue")(black_knight))
```

---
### REF
- [코드잇](https://blog.naver.com/codeitofficial/221673642106)
- [wkdtjsgur100.github.io](https://wkdtjsgur100.github.io/python-decorator/)
- [한빛미디어](http://www.hanbit.co.kr/media/channel/view.html?cms_code=CMS5689111564)


