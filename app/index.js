'use strict';

var path = require('path');
var npmName = require('npm-name');
var yeoman = require('yeoman-generator');

var SimpleNodePackageGenerator = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');

    this.cli = false;

    this.email = this.user.git.email();
    this.name = this.user.git.name();

    this.user.github.username(function(err, username){
      this.githubUsername = username;
    }.bind(this));
  },

  prompting: {
    askForName: function() {
      var done = this.async();

      var prompts = [{
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
        if (props.pkgName) {
          return this.askForModuleName();
        }

        this.moduleName = props.name;

        done();
      }.bind(this));
    },
    askForDescription: function() {
      var done = this.async();

      var prompts = [
        {
          name: 'description',
          message: 'Please provide a short description for the project'
        }
      ];

      this.prompt(prompts, function(props) {
        this.description = props.description;

        done();
      }.bind(this));
    },
    askIfCLI: function() {
      var done = this.async();

      var prompts = [
        {
          type: 'confirm',
          name: 'cli',
          message: 'Will this module include a CLI?',
          default: true
        }
      ];

      this.prompt(prompts, function(props) {
        this.cli = props.cli;

        done();
      }.bind(this));
    },
    askForPersonalWebsite: function() {
      var done = this.async();

      var prompts = [
        {
          name: 'website',
          message: 'Please provide your personal website',
          default: 'http://mts.io'
        }
      ];

      this.prompt(prompts, function(props) {
        this.website = props.website;

        done();
      }.bind(this));
    }
  },

  writing: {
    app: function () {
      this.template('index.js', 'index.js');
      this.template('test.js', 'test.js');

      if(this.cli){
        this.template('cli.js', 'cli.js');
      }
    },

    projectfiles: function () {
      this.template('readme.md', 'readme.md');

      this.template('license', 'license');

      this.template('_package.json', 'package.json');
      this.template('editorconfig', '.editorconfig');
      this.template('gitignore', '.gitignore');
      this.template('jshintrc', '.jshintrc');
      this.template('travis.yml', '.travis.yml');
    }
  },

  end: function () {
    this.installDependencies({
      bower: false
    });
  }
});

module.exports = SimpleNodePackageGenerator;
