<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# bifurcate

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Split values into two groups.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/utils-bifurcate
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var bifurcate = require( '@stdlib/utils-bifurcate' );
```

#### bifurcate( collection, \[options,] filter )

Splits values into two groups. If an element in `filter` is truthy, the corresponding element in `collection` belongs to the first group; otherwise, the `collection` element belongs to the second group.

```javascript
var arr = [ 'beep', 'boop', 'foo', 'bar' ];
var filter = [ true, true, false, true ];

var out = bifurcate( arr, filter );
// returns [ [ 'beep', 'boop', 'bar' ], [ 'foo' ] ]
```

The function accepts the following `options`:

-   **returns**: specifies the output format. If the option equals `'values'`, the function outputs element values. If the option equals `'indices'`, the function outputs element indices. If the option equals `'*'`, the function outputs both element indices and values. Default: `'values'`.

By default, the function returns element values. To return element indices, set the `returns` option to `'indices'`.

```javascript
var arr = [ 'beep', 'boop', 'foo', 'bar' ];
var filter = [ true, true, false, true ];

var opts = {
    'returns': 'indices'
};
var out = bifurcate( arr, opts, filter );
// returns [ [ 0, 1, 3 ], [ 2 ] ]
```

To return index-element pairs, set the `returns` option to `'*'`.

```javascript
var arr = [ 'beep', 'boop', 'foo', 'bar' ];
var filter = [ true, true, false, true ];

var opts = {
    'returns': '*'
};
var out = bifurcate( arr, opts, filter );
// returns [ [ [ 0, 'beep' ], [ 1, 'boop' ], [ 3, 'bar' ] ], [ [ 2, 'foo' ] ] ]
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   Both `collection` and `filter` **must** be collections. A collection may be either an [`Array`][mdn-array], [`Typed Array`][mdn-typed-array], or an array-like [`Object`][mdn-object] (excluding `strings` and `functions`).

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var floor = require( '@stdlib/math-base-special-floor' );
var bifurcate = require( '@stdlib/utils-bifurcate' );

var vals;
var arr;
var out;
var f;
var i;
var j;

vals = [ 'beep', 'boop', 'foo', 'bar', 'woot', 'woot' ];

// Generate a random collection...
arr = new Array( 100 );
for ( i = 0; i < arr.length; i++ ) {
    j = floor( randu()*vals.length );
    arr[ i ] = vals[ j ];
}

// Randomly assign collection values to a group...
f = new Array( arr.length );
for ( i = 0; i < arr.length; i++ ) {
    f[ i ] = ( randu() < 0.5 );
}

// Compute the groups:
out = bifurcate( arr, f );
console.log( out );
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils-bifurcate-by`][@stdlib/utils/bifurcate-by]</span><span class="delimiter">: </span><span class="description">split values into two groups according to a predicate function.</span>
-   <span class="package-name">[`@stdlib/utils-bifurcate-own`][@stdlib/utils/bifurcate-own]</span><span class="delimiter">: </span><span class="description">split an object's own property values into two groups according to a predicate function.</span>
-   <span class="package-name">[`@stdlib/utils-group`][@stdlib/utils/group]</span><span class="delimiter">: </span><span class="description">group values as arrays associated with distinct keys.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-bifurcate.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-bifurcate

[test-image]: https://github.com/stdlib-js/utils-bifurcate/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/utils-bifurcate/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-bifurcate/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-bifurcate?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-bifurcate.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-bifurcate/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-bifurcate/tree/deno
[deno-readme]: https://github.com/stdlib-js/utils-bifurcate/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/utils-bifurcate/tree/umd
[umd-readme]: https://github.com/stdlib-js/utils-bifurcate/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/utils-bifurcate/tree/esm
[esm-readme]: https://github.com/stdlib-js/utils-bifurcate/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/utils-bifurcate/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-bifurcate/main/LICENSE

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[mdn-object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

<!-- <related-links> -->

[@stdlib/utils/bifurcate-by]: https://github.com/stdlib-js/utils-bifurcate-by

[@stdlib/utils/bifurcate-own]: https://github.com/stdlib-js/utils-bifurcate-own

[@stdlib/utils/group]: https://github.com/stdlib-js/utils-group

<!-- </related-links> -->

</section>

<!-- /.links -->
