# generator-angular-fab

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
