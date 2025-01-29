<p>Clarusway<img align="right"
  src="https://secure.meetupstatic.com/photos/event/3/1/b/9/600_488352729.jpeg"  width="15px"></p>

# Project-009 : Clarus Shopping (RP-09)

## Description

Project aims to create a Clarus Shopping App.

## Problem Statement

- We are adding a new project to our portfolios. So you and your colleagues have started to work on the project.

## Project Skeleton

```
009 - Clarus Shopping App(folder)
|
|----readme.md         # Given to the students (Definition of the project)
SOLUTION
├── public
│     └── index.html
├── src
│   ├── App.js
│   ├── assets
│   │   └── cw.svg
│   ├── components
│   │   ├── BasketCard.jsx
│   │   ├── CategoryBar.jsx
│   │   ├── EmptyBasketTotal.jsx
│   │   ├── FiiledBasketTotal.jsx
│   │   ├── NavBar.jsx
│   │   └── ProductCard.jsx
│   ├── index.css
│   ├── index.js
│   ├── pages
│   │   ├── Basket.jsx
│   │   ├── Home.jsx
│   │   └── NotFound.jsx
│   ├── redux
│   │   ├── action
│   │   │   └── basketAction.js
│   │   ├── index.jsx
│   │   ├── reducer
│   │   │   └── basketReducer.js
│   │   └── type
│   │   │   └── basketType.js
│   └── router
│       └── AppRouter.jsx
├── package.json
└── yarn.lock
```

## Expected Outcome

![Project Snapshot](clarus-shopping.gif)

## Objective

Build a Clarus Shopping App using ReactJS.

### At the end of the project, following topics are to be covered;

- HTML

- CSS

- JS

- ReactJS

- React-Redux

- Material UI

### At the end of the project, students will be able to;

- improve coding skills within HTML & CSS & JS & ReactJS.

- use git commands (push, pull, commit, add etc.) and Github as Version Control System.

## Steps to Solution

- Step 1: Create React App using `yarn create react-app clarus-shopping`

- Step 2 : Install `axios`, `redux` , `react-redux`, `react-router-dom`, `mui`, `mui-icons` package to your `package.json`. 

- Step 3: You can use https://fakestoreapi.com/products for data.

- Step 4: You can use https://fakestoreapi.com/products/categories for categories.

- Step 5: Push your application into your own public repo on Github

- Step 6: Add project gif to your project and README.md file.

## Demo
[Live](https://clarus-shopping.vercel.app/)
## Notes

- **The product information received from the API does not include a "quantity" key. However, you can add the quantity information when adding a product. This will enable you to easily perform quantity increment and decrement operations in the basket page.**

- You can add additional functionalities to your app.

**<p align="center">&#9786; Happy Coding &#9997;</p>**
