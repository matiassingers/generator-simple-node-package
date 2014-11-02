'use strict';

var path = require('path');
var helpers = require('yeoman-generator').test;
var assert = require('yeoman-generator').assert;

describe('simple node package generator', function(){
  beforeEach(function (done) {
    helpers.run(path.join( __dirname, '../app'))
      .inDir(path.join( __dirname, './tmp'))
      .withOptions({ 'skip-install': true })
      .withPrompts({ cli: true })
      .on('end', done);
  });

  it('create cli file', function(){
    assert.file('cli.js');
  });

  it('package.json should contain correct bin script', function(){
    var pkg = require('package.json');

    assert.deepEqual(pkg.bin, { tmp: 'cli.js' });
  });
});
