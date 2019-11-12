---
  layout: post
  title: '파이썬 개발 환경 세팅'
  tags: python
  categories: python
---

# 파이썬 개발 환경 세팅

## pyenv, pyenv-virtualenv 설치
```
$ brew install pyenv
$ brew install pyenv-virtualenv
```

*참고 : [Ihy's blog](https://lhy.kr/configuring-the-python-development-environment-with-pyenv-and-virtualenv)*

## pyenv 실행 전 필수 패키지 설치

```
$ brew list # 설치된 formula 확인
$ brew install readline xz
```

*참고 : [Common build problem](https://github.com/pyenv/pyenv/wiki/Common-build-problems)*

## zshrc 설정
```
$ export PYENV_PATH=$HOME/.pyenv
$ if which pyenv > /dev/null; then eval "$(pyenv init -)"; fi
$ if which pyenv-virtualenv-init > /dev/null; then eval "$(pyenv virtualenv-init -)"; fi
```

## python 설치
```
$ pyenv install 3.7.5
$ pyenv global 3.7.5
```

## 가상환경 설정
```
$ pyenv virtualenv 3.7.5 my-project-env 
$ cd /my-project
$ pwd
/users/jam/my-project
$ pyenv local wps-python-env
$ pyenv versions
$ pip list
$ pip install --upgrade pip
```

## local setting
* `git init`
* .gitignore 파일 생성
  - [gitignore.io](http://gitignore.io/)에서 설정