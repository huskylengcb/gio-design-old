# GrowingIO Design System
## 私有NPM仓库使用指南
> https://growingio.atlassian.net/wiki/spaces/FEW/pages/887784903/NPM

## Getting Started

```
yarn install
```

GIO-Design

```
yarn start
```

Documentation

```
yarn start:website
```

文档目录 `packages/website/src`

Clean
```
# node_modules
npx lerna clean
```

Add dependency

```
# all packages
yarn workspaces add [dependency]
# package
yarn workspaces add [package] [dependency]
# local dependency
yarn workspaces add [package] [local-dependency@version]
# root
yarn add -W [dependency]
```

## Packages

- @gio-design/tokens
- @gio-design/components

## Repositories

- playground

- website

## Create

lerna create [package-name]

## Build
```
yarn install
yarn build
```
gst
## Publish component

```
cd packages/components
yarn build
(npx) lerna publish
```

## Publish icon/token/theme

```
yarn build
(npx) lerna publish
```

## 出现不能publish（put 401）的解决办法
npm login --registry=https://repo.growingio.com/repository/npm-hosted/
输入公司wifi账户名 密码 公司邮箱
然后再执行
npx lerna publish from-package --registry=https://repo.growingio.com/repository/npm-hosted/

## References

[Lerna](https://lerna.js.org/)
[Yarn Workspace](https://yarnpkg.com/lang/en/docs/workspaces/)
[nohoist in Workspaces](https://yarnpkg.com/blog/2018/02/15/nohoist/)
[GrowingIO Design System](https://growingio.design)
