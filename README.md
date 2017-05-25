# Imposters

#### Creators
Chance Magno and Sean Cameron

### The Current Version
v1.0 - 05.18.2017

### The Description

A web base site built as an exercise to recreate the website "Fundme.com".

### The Intended Users

None this was purely for coding practice.

## The Database Configuration

This application is built to work with a Firebase database. If you'd like to enjoy our website, please follow these instructions to create a Firebase project and credentials.
* Go to [Firebase](https://firebase.google.com/) and create an account (if you don't have one already).
* Create a remote database for the application through Firebase's website.
  * Select 'Create a New Project' from the dashboard.
  * Select 'Add Firebase to your web app'
  * A pop-up modal window will be generated. It will include your credentials. Keep the credentials handy.
* In the terminal, create a file to house your Firebase credentials `$ touch src/app/api-keys.ts`
* In api-keys.ts file, add the following code:
```
  export var masterFirebaseConfig = {
    apiKey: "xxxx",
    authDomain: "xxxx.firebaseapp.com",
    databaseURL: "https://xxxx.firebaseio.com",
    storageBucket: "xxxx.appspot.com",
    messagingSenderId: "xxxx"
  };
```
* Replace 'xxxx' with the project credentials from Firebase.
* In your Firebase project, change the Rules to allow reading and writing to the database
```
  {
    "rules": {
      ".read": "true",
      ".write": "true"
    }
  }
```
* Import seed data from the included sample-posts.json file
  * Visit your Firebase Console and select your project's database.
  * Click on the Database option in the left-hand navigational menu.
  * Select the 3 vertical dots on the right-hand side of the grey bar with your database URL on it. (It's right next to the + and - buttons). This should bring up a small menu.
  * Select Import JSON from this menu. This will result in a modal window prompting you to upload a file.
  * Locate the sample-posts.json file from the project, and upload it.

## The Installation

* In the terminal, run:
  * `$ git clone <https://github.com/warnock/FundMe-angular-firebase>`
  * `$ cd FundMe-angular-firebase`
  * `$ npm install`
  * `$ ng serve`
* In your browser, go to [http://localhost:4200](http://localhost:4200)


## The Bugs
This project is not complete and was merely an exercise.

## The Contact Details
Questions? Concerns? Suggestions? Reach out to us via github:
* [Chance Magno](https://github.com/ChanceMagno)



## The Technologies
* _Angular2.js_
* _TypeScript_
* _HTML_
* _CSS_
* _npm_
* _Materialize_

## The License
This software is licensed under the MIT license.
Copyright (c) 2017 Chance Magno
