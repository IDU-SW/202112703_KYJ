# 202112703 김영재 

## 설치

``` 
npm install
```

##  Contents

|       항목       |     URL     | Method  |
| :--------------: | :---------: | :----: |
| [코인 정보 리스트](#코인-정보-리스트) |  /coin_info   |  GET   |
|  [코인 상세 정보](#코인-상세-정보)  | /coin_info/id |  GET   |
|    [코인 추가](#코인-추가)     |  /coin_info   |  POST  |
|    [코인 수정](#코인-수정)     |  /coin_info   |  PUT   |
|    [코인 삭제](#코인-삭제)     | /coin_info/id | DELETE |

---

### 코인 정보 리스트

#### 요청

|    업무     | 코인 정보 리스트 |
| :---------: | ---------------- |
|     URL     | /coin_info         |
|   URL 예    | /coin_info         |
| 요청 메소드 | GET              |


##### 응답 메세지

```  json
    {  
        "id":0,
        "name": "비트코인",
        "simbol": "BTC"
    },
    {
        "id":1,
        "name": "이더리움",
        "simbol": "ETH"
    },
    {
        "id": 2,
        "name": "도지코인",
        "simbol": "DOGE"
    }
```

--------

### 코인 상세 정보

#### 요청

|    업무     | 코인 정보 리스트 |              |
| :---------: | ---------------- | ------------ |
|     URL     | /coin_info/id      | ID : 코인 id |
|   URL 예    | /coin_info/1       |              |
| 요청 메소드 | GET              |             |


##### 응답 메세지

```  json
 {
        "id": 2,
        "name": "도지코인",
        "simbol": "DOGE"
    }
```

------

### 코인 추가

#### 요청

|    업무     | 사람 정보 리스트 |
| :---------: | ---------------- |
|     URL     | /coin_info         |
| 요청 메소드 | POST             |
| 콘텐츠 타입 | application/json |

##### 요청 메시지

``` json
{
    "id": 2,
    "name": "도지코인",
    "simbol": "DOGE"
}
```

##### 응답 메세지

```  json
{
    "msg": "success",
    "data": {
    "id": 2,
    "name": "도지코인",
    "simbol": "DOGE"
}
}
```

-------

### 코인 수정

#### 요청

|    업무     | 코인 정보 리스트 |
| :---------: | ---------------- |
|     URL     | /coin_info         |
|   URL 예    | /coin_info         |
| 요청 메소드 | PUT              |
| 콘텐츠 타입 | application/json |

##### 요청 메시지

``` json
{
    "id": 2,
    "name": "도지코인",
    "simbol": "DOGE"
}
```



##### 응답 메세지

```  json
{
    "id": 2,
    "name": "도지코인",
    "simbol": "DOGE"
}
```

-----

### 코인 삭제

#### 요청

|    업무     | 코인 정보 리스트 |              |
| :---------: | ---------------- | ------------ |
|     URL     | /coin_info/ID      | ID : 코인 ID |
|   URL 예    | /coin_info/2      |              |
| 요청 메소드 | DELETE           |              |


##### 응답 메세지 예

```  json
{
    "msg": "Deleted info",
    "data": 2
}
```