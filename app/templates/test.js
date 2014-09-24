'use strict';

var assert = require('assert');
var <%= _.camelize(moduleName) %> = require('./');

describe('initial', function(){
  it('fail', function() {
    assert(false);
  });
});
