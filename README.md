# [Symless webpage](http://symless.com/) in [React.js](https://facebook.github.io/react/)

Note: This is not a rewrite from scratch. It's more of a copy of the original one splitted to and replaced by React components. It took 2 days to create it so it is very far from complete or optimal. It's a demo built for Symless to get their attention for an application. :)

You can try the live demo [here](symless-react.github.io).

## Setup

    $ npm install

## Run

    $ npm start

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits. You will also see any lint errors in the console.

## Build

    $ npm run build

>**Known Issue:**
>
>You may encounter an issue where changing a file inside `src` doesn’t trigger a recompilation. Most likely this happens because the path in your filesystem differs in its casing from the path you imported. For example, if a file is called `App.js` but you are importing `app.js`, the watcher might not recognize changes to it. We are [considering](https://github.com/facebookincubator/create-react-app/issues/240) enforcing some checks to prevent this. If this doesn’t help, check out the page on [troubleshooting watching](https://webpack.github.io/docs/troubleshooting.html#watching).
