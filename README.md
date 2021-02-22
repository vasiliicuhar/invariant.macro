<div align="center">
<h1>invariant.macro</h1>

<p>Invariant assertions implemented as <a href="https://babeljs.io/blog/2017/09/11/zero-config-with-babel-macros">babel-plugin-macros</a> macro.</p>
</div>

---

<!-- prettier-ignore-start -->
[![Build Status][build-badge]][build]
[![Code Coverage][coverage-badge]][coverage]
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
// throws new Error('Invariant failed: expected 4, got 5')
```

In production error messages are stripped from resulting bundle

```js
invariant(condition, `error message ${prettyPrint(obj)}`)
// is transpiled to
invariant(condition)
```
