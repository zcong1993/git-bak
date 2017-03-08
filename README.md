# git-bak

[![NPM version](https://img.shields.io/npm/v/git-bak.svg?style=flat)](https://npmjs.com/package/git-bak) [![NPM downloads](https://img.shields.io/npm/dm/git-bak.svg?style=flat)](https://npmjs.com/package/git-bak) [![Build Status](https://img.shields.io/circleci/project/zcong1993/git-bak/master.svg?style=flat)](https://circleci.com/gh/zcong1993/git-bak)

> Easy way to backup your repos

## Install

```bash
$ yarn global add git-bak
```

## Usage

```bash
$ git-bak <username> [options]
# or use alias `gbk`
# example, backup all your repos
$ git-bak zcong1993 --dest bakfolder --all
```

## Input

### username
type: string

default: the git username in your git global config

the github username you want to backup

## Options

### --dest
type: string, **required**

default: null

the folder you want to backup repos to

### --all
type: bool

default: false

if backup all repos of the user

### --skip-fork
type: bool

default: false

if skip the repos forked from other

### --page
type: number

default: 2

the page arg for github api

### --per-page
type: number

default: 1

the per_page arg for github api

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**git-bak** © [zcong1993](https://github.com/zcong1993), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by zcong1993 with help from contributors ([list](https://github.com/zcong1993/git-bak/contributors)).

> [github.com/zcong1993](https://github.com/zcong1993) · GitHub [@zcong1993](https://github.com/zcong1993)
