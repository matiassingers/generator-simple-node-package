# <%= _.slugify(moduleName) %> [![Build Status][travis-badge]][travis-link] [![Dependency Status][gemnasium-badge]][gemnasium-link] [![Coverage Status][coveralls-badge]][coveralls-link]
> <%= description %>

## Install

```sh
$ npm install --save <%= _.slugify(moduleName) %>
```


## Usage

```js
var <%= _.camelize(moduleName) %> = require('<%= _.slugify(moduleName) %>');

<%= _.camelize(moduleName) %>()

```

<% if(cli) { %>
## CLI

```sh
$ npm install --global <%= _.slugify(moduleName) %>
```

```sh
$ <%= _.slugify(moduleName) %> --help

  Example
    <%= _.slugify(moduleName) %>
    
```
<% } %>

## API

#### Option

Type: `String`  
Default: `undefined`

Description of the option.


## License

MIT © [<%= name %>](<%= website %>)

[travis-badge]: http://img.shields.io/travis/<%= githubUsername %>/<%= _.slugify(moduleName) %>.svg?style=flat-square
[travis-link]: https://travis-ci.org/<%= githubUsername %>/<%= _.slugify(moduleName) %>

[gemnasium-badge]: http://img.shields.io/gemnasium/<%= githubUsername %>/<%= _.slugify(moduleName) %>.svg?style=flat-square
[gemnasium-link]: https://gemnasium.com/<%= githubUsername %>/<%= _.slugify(moduleName) %>

[coveralls-badge]: http://img.shields.io/coveralls/<%= githubUsername %>/<%= _.slugify(moduleName) %>.svg?style=flat-square
[coveralls-link]: https://coveralls.io/r/<%= githubUsername %>/<%= _.slugify(moduleName) %>
