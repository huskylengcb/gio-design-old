# GrowingIO Design System

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

## Publish

```
yarn build
lerna publish
```

## References

[Lerna](https://lerna.js.org/)
[Yarn Workspace](https://yarnpkg.com/lang/en/docs/workspaces/)
[nohoist in Workspaces](https://yarnpkg.com/blog/2018/02/15/nohoist/)
[GrowingIO Design System](https://growingio.design)
