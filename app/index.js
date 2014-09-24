'use strict';
var yeoman = require('yeoman-generator');

var SimpleNodePackageGenerator = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');

    this.email = this.user.git.email();
    this.name = this.user.git.name();

    this.user.github.username(function(err, username){
      this.githubUsername = username;
    }.bind(this));
  },

  prompting: {
    askForName: function() {
      var done = this.async();

      var prompts = [
        {
          name: 'moduleName',
          message: 'What is the name of your module?'
        }
      ];

      this.prompt(prompts, function(props) {
        this.moduleName = props.moduleName;
        this.config.setmoduleName = props.moduleName;

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
