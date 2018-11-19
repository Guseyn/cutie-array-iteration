# cutie-array-iteration
Cutie extension for JavaScript array iteration methods.

[![NPM Version][npm-image]][npm-url]

[Cutie](https://github.com/Guseyn/cutie) for JavaScript [array iteration methods](https://www.w3schools.com/js/js_array_iteration.asp). It's based on the [Async Tree Pattern](https://github.com/Guseyn/async-tree-patern/blob/master/Async_Tree_Patern.pdf).

# Examples

You can find examples of using this library in the [test directory](https://github.com/Guseyn/cutie-array-iteration/tree/master/test).

# Usage

```js
const {
  // Here needed async objects from the table below
} = require('@cuties/cutie-array-iteration');
```

For more information about parameters in the async objects visit [docs](https://www.w3schools.com/js/js_array_iteration.asp).

| Async Object  | Async/sync call | Parameters(default value/description) | Representation result |
| ------------- | ----------------| ---------- | --------------------- |
| `Every` | `array.every` | `array, iterator((value, index, array) => {})` | `boolean` |
| `Filtered` | `array.every` | `array, iterator((value, index, array) => {})` | `array` |
| `ForEach` | `array.forEach` | `array, iterator((value, index, array) => {})` | `array` |
| `FoundIndex` | `array.findIndex` | `array, iterator((value, index, array) => {})` | `number` |
| `Found` | `array.find` | `array, iterator((value, index, array) => {})` | `value` |
| `IndexOf` | `array.indexOf` | `array, item, start` | `number` |
| `LastIndexOf` | `array.lastIndexOf` | `array, item, start` | `number` |
| `Mapped` | `array.map` | `array, iterator((value, index, array) => {})` | `array` |
| `Reduced` | `array.reduce` | `array, iterator((total, value, index, array) => {})` | `total` |
| `ReducedRight` | `array.reduceRight` | `array, iterator((total, value, index, array) => {})` | `total` |
| `Some` | `array.some` | `array, iterator((value, index, array) => {})` | `boolean` |

[npm-image]: https://img.shields.io/npm/v/@cuties/array-iteration.svg
[npm-url]: https://npmjs.org/package/@cuties/array-iteration

