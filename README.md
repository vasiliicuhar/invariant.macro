**deprecated: use <a href="https://www.npmjs.com/package/babel-plugin-dev-expression">babel-plugin-dev-expression</a> instead.**

<div align="center">
<h1>invariant.macro</h1>

<p>Invariant assertions implemented as <a href="https://babeljs.io/blog/2017/09/11/zero-config-with-babel-macros">babel-plugin-macros</a> macro.</p>
</div>

---

<!-- prettier-ignore-start -->
[![build][build-badge]][build]
[![version][version-badge]][package]
[![downloads][downloads-badge]][npmtrends]
[![MIT License][license-badge]][license]
<!-- prettier-ignore-end -->

## Install

```sh
# npm
npm install @vasiliicuhar/invariant.macro

# yarn
yarn add @vasiliicuhar/invariant.macro
```

## Usage

```js
import invariant from "@vasiliicuhar/invariant.macro"

let sum = 2 + 3
invariant(sum === 4, `expected 4, got ${sum}`)
// throws new InvariantError('Invariant failed: expected 4, got 5')
```

In production error messages are stripped from resulting bundle

```js
invariant(condition, `error message ${prettyPrint(obj)}`)
// is transpiled to
invariant(condition)
```

## Development only invariants

```js
invariant(condition, "invariant failed", { env: "development" })
```

<!-- prettier-ignore-start -->
[version-badge]: https://img.shields.io/npm/v/@vasiliicuhar/invariant.macro.svg?style=flat-square
[package]: https://www.npmjs.com/package/@vasiliicuhar/invariant.macro
[downloads-badge]: https://img.shields.io/npm/dm/@vasiliicuhar/invariant.macro.svg?style=flat-square
[build-badge]: https://github.com/vasiliicuhar/invariant.macro/actions/workflows/build.yml/badge.svg
[npmtrends]: http://www.npmtrends.com/@vasiliicuhar/invariant.macro
[license-badge]: https://img.shields.io/npm/l/@vasiliicuhar/invariant.macro.svg?style=flat-square
[license]: /LICENSE
[build]: https://github.com/vasiliicuhar/invariant.macro/actions/workflows/build.yml
<!-- prettier-ignore-end -->
