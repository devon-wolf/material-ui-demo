# material-ui-demo

1. Spin up a new project:
    - `npx create-react-app your-app-name --template typescript`
    - or whatever project bootstrap you like, as long as the end result is a React project; end after `your-app-name` to use JS instead of TS
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
