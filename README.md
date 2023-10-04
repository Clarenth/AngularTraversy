# AngularTraversy

## Build and Run the desktop client with Tauri

This project requires you to have [Rust-lang](https://www.rust-lang.org/learn/get-started) and the Cargo package [Tauri](https://tauri.app/) installed on your machine to be able to build from the source files. Once both the language and the package are installed, open your Operating System's terminal (Terminal on Linux and Mac, or cmd on Windows) inside the root of this project `AngularTraversy` and run ```cargo tauri build``` to build this project into an OS compatible binary file, or ```cargo tauri dev``` for a testing purposes build.

This project uses [Json-Server](https://www.npmjs.com/package/json-server) as a basic web server, and does not include any server inside the build package. Run the command ```npm run server``` inside the folder `AngularTraversy` in your IDE or Editor to start JSON-Server on localhost:5000.

# Angular commands

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
