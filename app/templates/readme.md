# <%= underscore.slugify(moduleName) %> [![Build Status][travis-badge]][travis-link] [![Dependency Status][gemnasium-badge]][gemnasium-link] [![Coverage Status][coveralls-badge]][coveralls-link]
> <%= description %>

## Install

```sh
$ npm install --save <%= underscore.slugify(moduleName) %>
```


## Usage

```js
var <%= underscore.camelize(moduleName) %> = require('<%= underscore.slugify(moduleName) %>');

<%= underscore.camelize(moduleName) %>()

```

<% if(cli) { %>
## CLI

```sh
$ npm install --global <%= underscore.slugify(moduleName) %>
```

```sh
$ <%= underscore.slugify(moduleName) %> --help

  Example
    <%= underscore.slugify(moduleName) %>

```
<% } %>

## API

#### Option

Type: `String`  
Default: `undefined`

Description of the option.


## License

MIT © [<%= name %>](<%= website %>)

[travis-badge]: http://img.shields.io/travis/<%= githubUsername %>/<%= underscore.slugify(moduleName) %>.svg?style=flat-square
[travis-link]: https://travis-ci.org/<%= githubUsername %>/<%= underscore.slugify(moduleName) %>

[gemnasium-badge]: http://img.shields.io/gemnasium/<%= githubUsername %>/<%= underscore.slugify(moduleName) %>.svg?style=flat-square
[gemnasium-link]: https://gemnasium.com/<%= githubUsername %>/<%= underscore.slugify(moduleName) %>

[coveralls-badge]: http://img.shields.io/coveralls/<%= githubUsername %>/<%= underscore.slugify(moduleName) %>.svg?style=flat-square
[coveralls-link]: https://coveralls.io/r/<%= githubUsername %>/<%= underscore.slugify(moduleName) %>
