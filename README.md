# basic-grunt-build

This is a basic grunt build script with some demonstration code. The following functions are configured to the build:

* Minify, concatenate and rev the js and css files when running on production mode
* Have the ability to provide custom code to the HTMLs depending on the environment
* Can watch for changes and rerun the build automatically

## Usage

* _nmp install_, to install the dependencies
* _grunt prod_, or any other grunt task

The following tasks are registered:

* dev: Runs the build in development build and watch for changes
* dev-build: Same as above, but exits after the build
* prod: Runs the build in production mode with watching
* prod-build: Production mode without watching
