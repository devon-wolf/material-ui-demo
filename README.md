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
3. Optional: configure eslint
    - `npx eslint --init`
    - follow the prompts
    - [docs](https://eslint.org/docs/user-guide/getting-started)
        - I ran into some dependency issues when running the project after following the prompts. If this happens, follow the instructions npm provides in the terminal output, they're typically spot-on.
4. Run the project!
    - `npm run start`
    - If your project does not start up in your browser automatically, navigate manually to whatever `localhost` port it's set to. `create-react-app` projects will go to `localhost:3000` unless that's already in use.

Those are the only required steps! From here on we're coding in a playground.

---

## Using Material UI Components
