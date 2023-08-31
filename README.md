# Test

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
### Tailwind css setup 
install Tailwind CSS and its peer dependencies:
`npm install -D tailwindcss postcss autoprefixer`

Generate the configuration files required for Tailwind CSS to work:
`npx tailwindcss init -p`

Open the tailwind.config.js file and update its content:
` module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};`

Requirement:
Your application should consist of the following components:
1. User Messages Table:
• Display a table that showcases user messages.
• Retrieve mock data from a mock API (details provided below).
• Use Vue 3 and Tailwind CSS for styling.
• Implement necessary state management using Pinia.
• Utilize the Composition API and best practices for hooks.
2. User Message Form:
• Create a form that allows users to input new messages.
• Implement form validation using Vue 3 and Composition API.
• Integrate the form with the mock API to add new messages.
• Use Tailwind CSS for styling.
• Leverage Pinia for state management.