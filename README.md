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
    - [docs](https://mui.com)
    - I had dependency problems when starting to use MUI components with just this package installed. Based on the errors, I also installed these two libraries that provide additional styling tools:
        - `npm i @emotion/react @emotion/styled`
        - [docs](https://emotion.sh/docs/introduction)
3. *Optional*: configure eslint
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
