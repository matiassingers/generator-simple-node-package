# <%= _.slugify(moduleName) %>
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

## License

MIT © [<%= name %>](<%= website %>)
