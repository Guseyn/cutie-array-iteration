# cutie-array-iteration

[![NPM Version](https://img.shields.io/npm/v/@cuties/array-iteration.svg)](https://npmjs.org/package/@cuties/array-iteration)
[![Build Status](https://travis-ci.org/Guseyn/cutie-array-iteration.svg?branch=master)](https://travis-ci.org/Guseyn/cutie-array-iteration)
[![codecov](https://codecov.io/gh/Guseyn/cutie-array-iteration/branch/master/graph/badge.svg)](https://codecov.io/gh/Guseyn/cutie-array-iteration)

[Cutie](https://github.com/Guseyn/cutie) for JavaScript [array iteration methods](https://www.w3schools.com/js/js_array_iteration.asp). It's based on the [Async Tree Pattern](https://github.com/Guseyn/async-tree-patern/blob/master/Async_Tree_Patern.pdf).

## Examples

You can find examples of using this library in the [test directory](https://github.com/Guseyn/cutie-array-iteration/tree/master/test).

## Install

`npm install @cuties/array-iteration`

## Run test

`npm test`

## Run build

`npm run build`

## Usage

```js
const {
  // Here needed async objects from the table below
} = require('@cuties/cutie-array-iteration');
```

For more information about parameters in the async objects visit [docs](https://www.w3schools.com/js/js_array_iteration.asp).

| Async Object  | Async/sync call | Parameters(default value/description) | Representation result |
| ------------- | ----------------| ---------- | --------------------- |
| `Every` | `array.every` | `array, iterator((value, index, array) => {})` | `boolean` |
| `Filtered` | `array.filter` | `array, iterator((value, index, array) => {})` | `array` |
| `ForEach` | `array.slice().forEach` | `array, iterator((value, index, array) => {})` | `array` |
| `FoundIndex` | `array.findIndex` | `array, iterator((value, index, array) => {})` | `number` |
| `Found` | `array.find` | `array, iterator((value, index, array) => {})` | `value` |
| `IndexOf` | `array.indexOf` | `array, item, start` | `number` |
| `LastIndexOf` | `array.lastIndexOf` | `array, item, start` | `number` |
| `Mapped` | `array.map` | `array, iterator((value, index, array) => {})` | `array` |
| `Reduced` | `array.reduce` | `array, iterator((total, value, index, array) => {})` | `total` |
| `ReducedRight` | `array.reduceRight` | `array, iterator((total, value, index, array) => {})` | `total` |
| `Some` | `array.some` | `array, iterator((value, index, array) => {})` | `boolean` |x

For more powerful async objects for processing collections you can use [cutie-async](https://github.com/Guseyn/cutie-async).
