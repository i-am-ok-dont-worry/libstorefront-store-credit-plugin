# NAMING CONVENTIONS
* `name` property in package.json should be changed to a module name
* `description` property in package.json should describe plugin feature

## Write plugin
Entry point for plugin should be `index.ts` file. LSF plugin is a default void function 
that accepts initialized Libstorefront instance.

Plugin has access to all lsf functionality including IOC container. Dependencies
can be rebound according to plugin needs.

## Build plugin
Run `npm run build` to build plugin.
Output can be found in `/dist` catalog.

## Test plugin
Plugin must be tested in isolation. Unit tests can be performed via jest framework
in `/tests/test.ts` file.
Template includes by default mocked LocalStorage object.
