# generator-angular-fab

## What is generator-angular-fab?

This is a basic generator for an angular project.
I enjoy using the official generator of the yeoman team, but I feel many unnecessary stuff is installed that a small or medium scale app does not need.

Also, read this, which I recommend for better angular coding: https://github.com/johnpapa/angular-styleguide

This generator uses the angular-material project for the layout, ui components, animations, etc: https://material.angularjs.org/latest/

This generator ditches the directory structure of scripts and views:

```bash
app/
|-- scripts/
|		|-controller files
|		|-factory files
|		|-service files
|
|-- views/
|		|-html view files
|
```

For a state structure that contains every file for each ui-state:

```bash
app/
|-- states/
|		|-- stateName/
|				|-stateNameController.js
|				|-stateNameModel.js
|				|-stateNameView.html
|
|-- js_components/
|		|-factories/
|		|-services/
|		|-directives/
|
```

### Install Yeoman

```bash
npm install -g yo
```

### Install Generator

To install generator-angular-fab from npm, run:

```bash
npm install -g generator-angular-fab
```

Finally, initiate the generator:

```bash
yo angular-fab
```

### GruntFile Tasks

```bash
grunt build
```
Creates a dist folder and compiles the necesarry files for a distribution package of the site or app.

```bash
grunt verify-js
```
Runs jshint to "compile" the controllers, models, factories, services, directives and the config files.

```bash
grunt copy-states
```
Copies the html files for each state that function as a view and pastes them inside the dist folder to properly update html /view modifications only.


### Comments?

Feel free to comment for any improvement, error, or just to say hi!


## License

MIT
