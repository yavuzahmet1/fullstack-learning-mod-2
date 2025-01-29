<p>Clarusway<img align="right"
  src="https://secure.meetupstatic.com/photos/event/3/1/b/9/600_488352729.jpeg"  width="15px"></p>

# Project - 09 : Recipe App (RP-09)

## Description

Project aims to create a Recipe App.

## Problem Statement

- We are adding a new project to our portfolios. So you and your colleagues have started to work on the project.

## Project Skeleton

```
06 - Recipe App (folder)
|
|----readme.md         # Given to the students (Definition of the project)
SOLUTION
├── public
│     └── index.html
├── src
│    ├── components
│    │       ├── header
│    │       │     ├── Header.js
│    │       │     ├── Form.js
│    │       │     └── style.js
│    │       └── navbar
│    │             ├── Navbar.js
│    │             └── style.js
│    ├── pages
│    │       ├── about
│    │       │     ├── About.js
│    │       │     └── style.js
│    │       ├── details
│    │       │     ├── Details.js
│    │       │     └── style.js
│    │       ├── login
│    │       │     ├── Login.js
│    │       │     └── style.js
│    │       └── home
│    │             ├── Home.js
│    │             ├── RecipeCard.js
│    │             └── style.js
│    ├── router
│    │       ├── AppRouter.js
│    │       └── PrivateRouter.js
│    ├── assets
│    │       └── [images]
│    ├── App.js
│    ├── App.css
│    ├── index.js
│    └── index.css
├── package.json
└── yarn.lock
```

## Expected Outcome

![Project Snapshot](./food-search-app.gif)

## Objective

Build a Recipe App using ReactJS.

### At the end of the project, following topics are to be covered;

- HTML

- CSS

- JS

- ReactJS

### At the end of the project, students will be able to;

- improve coding skills within HTML & CSS & JS & ReactJS.

- use git commands (push, pull, commit, add etc.) and Github as Version Control System.

## Steps to Solution

- Step 1: Create React App using `yarn create react-app recipe-app`or `npx create-react-app recipe-app`

- Step 2: Signup `https://developer.edamam.com/edamam-docs-recipe-api` and get api key.

- Step 3 : Using api key and `axios` for getting data from `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`.

- Step 4: You are expected to code your project with **styled component**
 
- Step 5: You can use Context API for Global State Management

- Step 6: You can get random login background image from `https://picsum.photos/1600/900`

- Step 7: Add project gif to your project and README.md file.

## Demo

https://recipe-app-cw.vercel.app/

## Notes

- You can add additional functionalities to your app.

- [Assets Folder](./assets/)

**<p align="center">&#9786; Happy Coding &#9997;</p>**
