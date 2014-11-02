'use strict';

var util = require('util');
var path = require('path');
var shell = require('shelljs');
var npmName = require('npm-name');
var yeoman = require('yeoman-generator');

var SimpleNodePackageGenerator = module.exports = function SimpleNodePackageGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({
      skipInstall: options['skip-install'],
      bower: false
    });
  });

  this.pkg = require('../package.json');

  this.cli = false;

  this.name = this.user.git.name();
  this.email = this.user.git.email();

  this.website = shell.exec('git config --get user.website', { silent: true }).output.trim();

  this.githubUsername = void 0;
  this.user.github.username(function(err, username){
    this.githubUsername = username;
  }.bind(this));
};

util.inherits(SimpleNodePackageGenerator, yeoman.generators.Base);

SimpleNodePackageGenerator.prototype.prompting = function prompting() {
  var done = this.async();

  var prompts = [{
    name: 'github',
    message: 'What is your GitHub username?',
    when: function(){
      return this.githubUsername;
    }
  }, {
    name: 'moduleName',
    message: 'What is the name of your module?',
    default: path.basename(process.cwd())
  }, {
    type: 'confirm',
    name: 'pkgName',
    message: 'The name above already exists on npm, choose another?',
    default: true,
    when: function(answers) {
      var done = this.async();

      npmName(answers.moduleName, function (err, available) {
        if (!available) {
          done(true);
        }

        done(false);
      });
    }
  }];

  this.prompt(prompts, function(props) {
    this.githubUsername = props.github || this.githubUsername;
    this.moduleName = props.moduleName;

    if (props.pkgName) {
      return this.askFor();
    }

    done();
  }.bind(this));
};

SimpleNodePackageGenerator.prototype.askFor = function askFor() {
  var done = this.async();

  var prompts = [
    {
      name: 'description',
      message: 'Please provide a short description for the project'
    },
    {
      type: 'confirm',
      name: 'cli',
      message: 'Will this module include a CLI?',
      default: true
    },
    {
      type: 'confirm',
      name: 'git',
      message: 'Do you want to init this project as a Git repo and create initial commit',
      default: true
    }
  ];

  this.prompt(prompts, function(props) {
    this.description = props.description;
    this.cli = props.cli;

    this.git = props.git;

    done();
  }.bind(this));
};

SimpleNodePackageGenerator.prototype.info = function info() {
  if(!this.website) {
    this.website = this.githubUsername ? 'https://github.com/' + this.githubUsername : 'https://github.com/';
    this.log('\n\nCouldn\'t find your website in git config under \'user.website\'');
    this.log('Defaulting to Github url: ' + this.website);
  }
};

SimpleNodePackageGenerator.prototype.project = function project(){
  this.template('readme.md', 'readme.md');

  this.template('license', 'license');

  this.template('_package.json', 'package.json');
  this.template('editorconfig', '.editorconfig');
  this.template('gitignore', '.gitignore');
  this.template('jshintrc', '.jshintrc');
  this.template('travis.yml', '.travis.yml');
};

SimpleNodePackageGenerator.prototype.app = function app(){
  this.template('index.js', 'index.js');
  this.template('test.js', 'test.js');

  if(this.cli){
    this.template('cli.js', 'cli.js');
  }
};
