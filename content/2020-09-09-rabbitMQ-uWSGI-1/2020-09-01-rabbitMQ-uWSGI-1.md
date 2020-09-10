---
title: rabbitMQ로 채팅 구현하기 1
date: 2020-09-01
cover: ./RabbitMQ.jpeg
category: Development
tags:
    - python
    - rabbitMQ
    - uWSGI
    - chat
    - django
    - DRF
---

> 초기 설정 방법 및 실행 방법 입니다.


# 준비

백앤드는 `DRF`, 프론트는 `Vue`, 소켓 서버는 `uWSGI`를 사용했습니다. 

## 라이브러리

*Python:*
- python = "3.7"
- uWSGI = "2.0.18"
- django = "^3.0.6"
- djangorestframework = "&3.11.0"
- pika = "^1.1.0"
- django-cors-headers = "^3.2.1"
- gevent = "^20.5.0"

*JavaScript:*
- Vue.js
- vue-cli
- vue-router

## 가상 환경 세팅

`pyenv`로 가상환경을 만들어 줍니다.

```bash
$ pyenv virtualenv 3.7.5 rabbit-env
$ pyenv local rabbit-env
```

## 설치

*uWSGI:*

OS X El Capitan부터 OpenSSL이 애플의 SDK에서 제외됐기 때문에 homebrew를 통해 설치하고 설정해 줘야 합니다.

```bash
$ brew update && brew upgrade && brew cleanup
$ brew install openssl

$ CFLAGS="-I/usr/local/opt/openssl/include" LDFLAGS="-L/usr/local/opt/openssl/lib" UWSGI_PROFILE_OVERRIDE=ssl=true pip install uwsgi -Iv --no-cache-dir
```

*Python:*

```bash
# make rabbit-backend directory
$ mkdir rabbit-backend

# Start a Project called rabbitMQ
$ django-admin startproject config ./rabbit-backend

$ pip install djangorestframework
```

*Vue.js:*

`vue-cli`를 사용해 빠르게 Vue 앱을 만듭니다. 

```bash
# Install 'vue-cli' from npm
$ npm install -g vue-cli

# Scaffold a new project based on the webpack
$ vue init webpack rabbitMQ-frontend
```

## 실행

*Python:*

```bash
# Install requirements from pip
$ pip install -r requirements.txt

# Run server(localhost:8000)
$ python manage.py runserver
```

*Vue.js:*

```bash
# Change directory to frontend project
$ cd rabbitMQ-frontend

# Install packages from npm
$ npm install

# Run webpack dev server(locaohost:8080)
$ npm run dev
```

# 시리즈

1. [rabbitMQ로 채팅 구현하기 1](/blog/rabbit-mq로-채팅-구현하기-1)
2. [rabbitMQ로 채팅 구현하기 2](/blog/rabbit-mq로-채팅-구현하기-2)
3. [rabbitMQ로 채팅 구현하기 3](/blog/rabbit-mq로-채팅-구현하기-3)
4. [rabbitMQ로 채팅 구현하기 4](/blog/rabbit-mq로-채팅-구현하기-4)
5. [rabbitMQ로 채팅 구현하기 5](/blog/rabbit-mq로-채팅-구현하기-5)
6. [rabbitMQ로 채팅 구현하기 6](/blog/rabbit-mq로-채팅-구현하기-6)

---

## Reference
- [github.com/danidee10/Chatire](https://github.com/danidee10/Chatire)
