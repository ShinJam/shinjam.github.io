---
title: Algorithm 준비하기
date: 2020-06-26
category: Algorithm
tags:
    - 시간복잡도
    - 공간복잡도
---

> 알고리즘 문제를 해결 하기 앞서 필요한 내용을 정리 합니다.

# 문제 사이트

**국내**
- 백준
- 프로그래머스
- 알고스팟
- 삼성 SW Expert Academy 

**해외**
- 탑코더
- 해커랭크
- 코딜리티

# 문제 해결 과정

1. 문제를 읽고 이해한다.
    - 조건 파악
    - 입/출력의 범위, 양식, 예외 파악

2. 문제를 익숙한 용어로 재정의한다.
    - 문제 요구사항 재정의해보기
    - 표, 그래프, 그림 등으로 표현하며 추상화해보기
    - 기능별로 함수 등으로 나누며 구현하는데 편리해진다.

3. 어떻게 해결할지 계획을 세운다.
    - 자료구조 및 알고리즘 선택

4. 계획을 검증한다.
    - 시간 및 메모리 체크 -> 시간복잡도, 공간복잡도

5. <p>프로그램으로 구현한다.</p>

6. 어떻게 풀었는지 돌아보고, 개선할 방법이 있는지 찾아본다.
    - 다양한 코드 참고하기
    - 시간을 얼마나 줄였는가
    - 얼마나 깔끔하게 짰는가

# 문제 해결 전략 팁
- 비슷한 유형 문제 해결 경험 확인
- 단순한 방법으로 해결 가능한가
- 문제를 단순화할 수 없을까? -> (e.g. 2차원을 1차원으로, 홀/짝)
- 그림으로 그려 볼 수 있을까?
- 문제를 분해 할 수 있을까? -> (e.g. 하노이 탑)
- 뒤에서부터 생각 할 수 있을까?
- 순서를 강제 할 수 있을까?
- 특정 형태의 답만을 고려 할 수 있을까?

# 시간복잡도 / 공간복잡도
주어진 제한 시간과 제한 공간 안에 구현 전에 계획하는 알고리즘이 안전한가 경계를 확인해야 합니다.
아래와 같은 생각 흐름을 갖습니다.
- 주어진 N 크기 확인, 시간 확인
- 선택한 알고리즘의 시간 복잡도
- 주어진 제한 메모리 확인
- 선택한 알고리즘의 공간 복잡도

그렇다면, 안전한지 판단 기준이 필요합니다.  
**시간복잡도**
$$
 N! \gt X^N \gt N^X \gt \color{blue} N \color{black} \gt \sqrt{\smash[b]{y}} \gt \log{N} \gt 1
$$
상황에 따라 시간복잡도에 따른 알고리즘을 생각해내야 합니다. O(n)를 기준으로 계산하면 됩니다.

$$
N == 1,000,000 + O(n) \longrightarrow t \lt 1sec
$$

O(n)이고 단순 연산에서 N == 1,000,000 일 때 약 0.2초, N == 10,000,000일 때 약 2초 정도 시간이 걸립니다.
알고리즘이 단순 연산이 아닌 복잡한 연산이라면 시간이 더 걸릴 수 있기 때문에 <u>N이 최대 1,000,000 이하 일 때 1초 이하</u>가 걸릴 것이라고 감을 잡으면 됩니다. 

**공간복잡도**  
파이썬 객체가 차지하는 공간은 Anaconda 배포판의 64비트 Python 3.6에서 sys.getsizeof로 측정하면 다음과 같습니다. 
![object-size](object-size.png)

백준 [수 정렬하기 3](https://www.acmicpc.net/problem/10989)을 예를 들면   
제한 메모리가 8mb, 주어지는 N의 크기는 10,000,000입니다. 
8mb를 바이트로 변환 할 때 8,388,608byte이며 파이썬 list의 크기는 하나씩 요소가 추가 될때 8byte씩 차지합니다. 
8,388,608byte / 8byte = 1,048,576 대략 백만개(1,000,000)개가 가능합니다.  
따라서 주어진 조건대로 N의 크기(10,000,000) 만큼 list를 만든다면 메모리 초과 에러가 나게 됩니다. 

---
# References
- [수빈님 블로그](https://subinium.github.io/Algorithm/docs/chapter00/2)
- [discuss](https://discuss.codechef.com/t/how-many-approx-loops-are-allowed-in-1-sec-lime-limit/375/3)
- [공간복잡도](https://c10106.tistory.com/4557)