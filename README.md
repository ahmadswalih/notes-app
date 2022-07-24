<h1 align="center">Welcome to Shorty 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
  <a href="/License" target="_blank">
    <img alt="License: mit" src="https://img.shields.io/badge/License-mit-yellow.svg" />
  </a>
</p>

> Shorty is an application where user can add short notes upto 200 characters , view their notes and even copy them.


## Overview
The application created Using Reactjs and the application uses localStorage to store the notes data. Every Note is saved as an array and each array has the property of text,date and a unique id. Every time a new Note is created a unique id and date will be assigned automatically. for unique id uses nanoId package and for date uses javascript function new Date(). 

User can only add notes upto 200 chracters .if the created note is above 200 character a toast will be shown to the user . The number of Characters remaining for the note will be shown in the footer of each note card.
 
In the top , there is a search optoin where users can search notes based on the notes text.

## ✨ [Live Demo](https://notes-app-sw.netlify.app/)
## Screenshots
<h4>Home Page</h4>
<img src="/img/Screenshot%20from%202022-07-20%2020-56-45.png"/>
<h4>Dark Mode</h4>
<img src="img/Screenshot%20from%202022-07-20%2020-56-51.png"/>




### 🏠 [Homepage](/src/App.js)


## Install

```sh
npm install
```

## Usage

```sh
npm run start
```

## Run tests

```sh
npm run test
```

## Author

👤 **ahmadswalih**

* Github: [@ahmadswalih](https://github.com/ahmadswalih)
* LinkedIn: [@ahmad-swalih-cm-6429881b5](https://linkedin.com/in/ahmad-swalih-cm-6429881b5)

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2022 [ahmadswalih](https://github.com/ahmadswalih).<br />
This project is [mit](/License) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
