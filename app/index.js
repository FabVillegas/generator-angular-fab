'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

var colors = require('../node_modules/colors');

var AngularFabGenerator = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the AngularFab generator! I hope you find it useful! <3'
    ));

    var prompts = [
      {
        name: 'app_name',
        message: 'Good day, fine person. What would the app\'s name be?'
      },
      {
        name: 'app_description',
        message: 'What would the apps\'s description be?'
      },
      {
        name: 'app_author',
        message: 'And finally, the author?'
      },
      {
        type    : 'input',
        name    : 'githubusername',
        message : 'What\'s your Github username'
      },
    ];

    this.prompt(prompts, function(props){
      this.app_name = props.app_name;
      this.app_description = props.app_description;
      this.app_author = props.app_author;
      this.githubusername = props.githubusername;
      done();
    }.bind(this));
  },

  scaffoldFolders: function(){
    this.mkdir("app");
    this.mkdir("app/css");
	this.mkdir("app/fonts");
	this.mkdir("app/images");
    this.mkdir("app/states");
    this.mkdir("app/states/example");
    this.mkdir("app/js_scripts/factories");
    this.mkdir("app/js_scripts/services");
    this.mkdir("app/js_scripts/directives");
	this.mkdir("app/php/resources");
  },

  copyMainFiles: function(){

    this.copy("_exampleView.html", "app/states/example/exampleView.html");
    this.copy("_style.css", "app/css/style.css");
	this.copy("_normalize.css", "app/css/normalize.css");
    this.copy("_gruntfile.js", "Gruntfile.js");

    var context = {
        app_name: this.app_name,
        app_description: this.app_description,
        app_author: this.app_author,
        githubusername: this.githubusername
    };

    this.template("_package.json", "package.json", context);
	this.template("_bower.json", "bower.json", context);
	this.template("_index.html", "app/index.html", context);
	this.template("_app.js", "app/app.js", context);

    this.template("_README.md", "README.md", context);
    this.template("_exampleController.js", "app/states/example/exampleController.js", context);
    this.template("_exampleModel.js", "app/states/example/exampleModel.js", context);

  },

  runNpm: function(){
    console.log("\nSetting up...\n".bold.magenta);

    this.bowerInstall("", function(){
      console.log("\nBower finished installing components !!!\n".bold.magenta);
    });

    this.npmInstall("", function(){
        console.log("\nNode finished installing components !!!\n".bold.magenta);
    });
  }

});

module.exports = AngularFabGenerator;
