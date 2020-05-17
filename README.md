# ShinJam Dev Blog

> Built with Jekyll
> Theme - [huxpro.github.io](https://github.com/Huxpro/huxpro.github.io)

## Requisites

Install rbenv, ruby-build

```shell
$ brew update
$ brew install rbenv ruby-build
```

Check rebenv versions

```shell
$ rbenv versions
$ rbenv install -l
```

Set rbenv version globaly

```shell
$ rbenv install 2.6.6
$ rbenv global 2.6.6
```

Add rbenv PATH to `~/.zshrc`

```
[[ -d ~/.rbenv  ]] && \
  export PATH=${HOME}/.rbenv/bin:${PATH} && \
  eval "$(rbenv init -)"
```

Rerun zsh

```shell
$ source ~/.zshrc
```

## Installation

Install bundler

```shell
$ gem install bundler github-pages jekyll
```

## Excute local test server

```shell
$ bundle exec jekyll serve
```
