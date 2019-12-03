---
  layout: post
  title: 해쉬테이블(hash_table)
  tags: Hash
  categories: 'Hash'
---



# 해쉬 구조

- 키(Key)에 데이터(Value)를 저장하는 데이터 구조
- Key를 통해 데이터를 받아올 수 있으므로, 속도가 획기적으로 빨라짐
- 보통 배열로 Hash Table 새성 후 사용 (공간과 탐색 시간을 맞바꾸는 기법)
- 파이썬에서는 딕셔너리 사용



# 용어

- 해쉬(Hash) : 임의 값을 고정 길이로 변환하는 것
- 해쉬 테이블(Hash Table) : 키 값의 연산에 의해 직접 접근이 가능한 데이터 구조
- 해싱 함수(Hashing Funciton) : Key에 대해 산술 연산을 이용해 데이터 위치를 찾을 수 있는 함수
- 해쉬 값(Hash Value)/해쉬 주소(Hash Address) : Key를 해싱 함수로 연산하여 나온 값



### 해쉬 함수

다양한 해쉬 함수 고안 기법이 있다.

가장 간단한 방식이 Division 방법(나누기 연산에 의한 나머지 값 사용)



### 해쉬 테이블 자료구조

- 검색이 많이 필요한 경우
- 저장, 삭제, 읽기가 빈번한 경우 
- 캐쉬 구현할 경우 (중복 확인이 쉽기 때문)



<table>
  <colgroup>
  	<col style="width: 50%">
    <col style="width: 50%">
  </colgroup>
  <thead>
  	<tr>
    	<th style="background: #e5e5e5">장점</th>
      <th style="background: #e5e5e5">단점</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    	<td style="padding: .5em .3em; vertical-align:middle">데이터 저장/읽기 속도가 빠르다 (검색 속도가 빠르다)</td>
      <td style="padding: .5em .3em; vertical-align:middle">일반적으로 저장 공간이 좀 더 많이 필요</td>
    </tr>
    <tr>
    	<td style="padding: .5em .3em; vertical-align:middle">해쉬는 키에 대한 데이터가 있는지(중복) 확인이 쉬움</td>
      <td style="padding: .5em .3em; vertical-align:middle">여러 키에 해당하는 주소가 동일할 경우 충돌 해결을 위한 별도의 자료구조 필요</td>
    </tr>
  </tbody>
</table>



## 충돌 해결 알고리즘

해쉬 테이블의 가장 큰 문제는 충돌(Collision)

### Seperate chaining

closed addressing/open hasing

버킷이 꽉 차더라도 데이터 주소값은 변하지 않는다

#### Separate chaining with linked lists

충돌이 일어날 경우 연결 리스트로 데이터를 연결 하는 기법

![img](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Hash_table_5_0_1_1_1_1_1_LL.svg/450px-Hash_table_5_0_1_1_1_1_1_LL.svg.png)

### Open addressing

closed hasing

충돌이 일어날 경우 다른 버킷에 데이터 삽입

#### Linear probing

해쉬 충돌시 다음 버킷 혹은 몇개 건너 뛰어 빈 버킷에 데이터 삽입

![img](https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Hash_table_5_0_1_1_1_1_0_SP.svg/380px-Hash_table_5_0_1_1_1_1_0_SP.svg.png)

#### Quardratic probing

충돌시 제곱만큼 건너 뛰어 데이터 삽입

#### Double hasing

충돌시 다른 해쉬 함수를 한번더 적용한 결과를 이용



#  시간 복잡도

- 일반적으로 충돌이 없을 경우 O(1)
- 최악의 경우, 충돌이 모두 발생하는 경우 O(n)