---
  layout: post
  title: airbnb clone
  tags: 
  categories: 
---



# Airbnb Clone

> [노마드 코더  에어비엔비](https://github.com/nomadcoders/airbnb-clone) 

## Init

- git init

- touch READEME.md

- touch .gitignore

  [gitignore.io](https://gitignore.io) 에서 생성

  `macOS`,  `window`,  `linux` ,  `django`,  `python`, `jupyternotebooks`,  `git`,`visualstudiocode` 

- pyenv virtualenv 3.7.5 airbnb-clone-env

- pyenv local airbnb-clone-env

- ~~pip install flake8
  flake8 : python lint~~ 

  [참고1](https://tech.songyunseop.com/post/2017/05/lint-with-flake8/)

- pip install -r requirements.txt

- pip freeze > requirements.txt

## django init

- django-admin startproject airbnb-clone

- django-admin startproject config .

- App structure.

  /airbnb-clone

  ├── README.md
  ├── app
  │   ├── config
  │   ├── converstations
  │   ├── db.sqlite3
  │   ├── lists
  │   ├── manage.py
  │   ├── reservations
  │   ├── reviews
  │   ├── rooms
  │   └── users
  └── requirements.txt

## Pycharm setting

- interpreter
- deburger
- root directory
- enable django surpport