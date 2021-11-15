# material-ui-demo

## Getting Started

1. Spin up a new project:
   - JavaScript:
     - `npx create-react-app your-app-name`
   - Typescript:
     - `npx create-react-app your-app-name --template typescript`
   - or whatever project bootstrap you like, as long as the end result is a React project
   - [docs](https://create-react-app.dev/docs/getting-started/)
2. Install Material UI
   - `cd` into `your-app-name`, and when there:
   - `npm i @mui/material`
   - if you want icons, which you probably do, `npm i @mui/material @mui/icons-material`
   - [docs](https://mui.com)
   - I had dependency problems when starting to use MUI components with just this package installed. Based on the errors, I also installed these two libraries that provide additional styling tools:
     - `npm i @emotion/react @emotion/styled`
     - [docs](https://emotion.sh/docs/introduction)
3. _Optional_: configure eslint
   - `npx eslint --init`
   - follow the prompts
   - [docs](https://eslint.org/docs/user-guide/getting-started)
     - I ran into some dependency issues when running the project after following the prompts. If this happens, follow the instructions npm provides in the terminal output, they're typically spot-on.
     - **NB**: The Typescript linting this provides is extensive. It is much stricter than the Typescript compiler itself. I've found that having this very strict linting turned on is a great tool for learning how to work with types.
4. Run the project!
   - `npm run start`
   - If your project does not start up in your browser automatically, navigate manually to whatever `localhost` port it's set to. `create-react-app` projects will go to `localhost:3000` unless that's already in use.

Those are the only required steps! From here on we're coding in a playground.

I typically remove the unused logo assets in `src` and `public` after I start messing with `App.tsx`. If you do that, you'll also want to remove references to them in `public/manifest.json`.

---

## Using Material UI Components

You can get started using Material UI without doing any other setup, but there are [some steps you should take](https://mui.com/getting-started/usage/) to get the most out of it.

- Add responsive meta tag
  - in `public/index.html`, replace the existing viewport tag in the `<head>` with `<meta name="viewport" content="initial-scale=1, width=device-width" />`
  - this provides better rendering support across different-sized devices
- Add the CSS baseline component

  - in `App.tsx` (or `.jsx` or `.js`), wrap the app in a fragment and add the [baseline component](https://mui.com/components/css-baseline/):

  ```js
  // ... other imports
  import CssBaseline from '@mui/material/CssBaseline';

  // ...start of component
  <>
    <CssBaseline />
    {/* actual app stuff */}
  </>;
  ```

  - your import may look a little different depending on context, but that's the gist
  - this provides style normalizations throughout the app

- Add Roboto font - MUI is built with the Roboto font in mind, but it's not included by default; if you'd like to use it, add `<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />` to the `<head>` in `public/index.html` - [docs](https://mui.com/components/typography/)
