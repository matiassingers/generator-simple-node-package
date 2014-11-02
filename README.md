# generator-simple-node-package [![Build Status](http://img.shields.io/travis/matiassingers/generator-simple-node-package.svg?style=flat-square)](https://travis-ci.org/matiassingers/generator-simple-node-package) [![Dependency Status](http://img.shields.io/gemnasium/matiassingers/generator-simple-node-package.svg?style=flat-square)](https://gemnasium.com/matiassingers/generator-simple-node-package) [![Gitter](http://img.shields.io/badge/gitter-join%20chat%20%E2%86%92-brightgreen.svg?style=flat-square)](https://gitter.im/matiassingers/generator-simple-node-package?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)
> start a simple node module project, including CLI

Heavily inspired by how [Sindre Sorhus](https://github.com/sindresorhus) structures his small Node.js modules.

## Install

```sh
$ npm install --global generator-simple-node-package
```


## Usage

```sh
$ yo simple-node-package
[?] What is the name of your module? hello world
[?] Please provide a short description for the project: say hello to the world!
[?] Will this module include a CLI? Yes
   create index.js
   create test.js
   create cli.js
   create readme.md
   create license
   create package.json
   create .editorconfig
   create .gitignore
   create .jshintrc
   create .travis.yml


I'm all done. Running npm install for you to install the required dependencies. If this fails, try running the command yourself.
```

## todo
- ~~tests~~
- create GitHub repo
- init [TravisCI](https://travis-ci.org/) for project
- init [Gemnasium](https://gemnasium.com/dashboard) for project

## License

MIT © [Matias Singers](http://mts.io)
