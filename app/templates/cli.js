#!/usr/bin/env node
'use strict';

var pkg = require('./package.json');
var <%= _.camelize(moduleName) %> = require('./');
var argv = process.argv.slice(2);

function help() {
  console.log([
    '',
      '  ' + pkg.description,
    '',
    '  Example',
    '    <%= _.slugify(moduleName) %> ',
    ''
  ].join('\n'));
}

if (argv.indexOf('--help') !== -1) {
  help();
  return;
}

if (argv.indexOf('--version') !== -1) {
  console.log(pkg.version);
  return;
}


<%= _.camelize(moduleName) %>(argv[0], function(){

});
