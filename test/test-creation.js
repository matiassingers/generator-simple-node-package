'use strict';

var path = require('path');
var helpers = require('yeoman-generator').test;
var assert = require('yeoman-assert');

describe('simple node package generator', function () {
  beforeEach(function (done) {
    helpers.run(path.join( __dirname, '../app'))
      .inDir(path.join( __dirname, './tmp'))
      .withOptions({ 'skip-install': true })
      .withPrompts({ cli: false })
      .on('end', done);
  });

  it('creates expected default files', function () {
    var expected = [
      '.editorconfig',
      '.gitignore',
      '.jshintrc',
      '.travis.yml',

      'license',
      'readme.md',

      'package.json',

      'index.js',
      'test.js'
    ];

    assert.file(expected);
    assert.noFile('cli.js');
  });
});
