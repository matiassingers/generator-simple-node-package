# <%= _.slugify(moduleName) %> [![Build Status](http://img.shields.io/travis/<%= githubUsername %>/<%= _.slugify(moduleName) %>.svg?style=flat-square)](https://travis-ci.org/<%= githubUsername %>/<%= _.slugify(moduleName) %>) [![Dependency Status](http://img.shields.io/gemnasium/<%= githubUsername %>/<%= _.slugify(moduleName) %>.svg?style=flat-square)](https://gemnasium.com/<%= githubUsername %>/<%= _.slugify(moduleName) %>)
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
