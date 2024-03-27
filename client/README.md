# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

Feb 17
finish react context
update navbar with current address and weather.
update card with forecast - todays weather

tests
api for backend - jest
component test ui - jest
end to end test. - cypress.

March 7
Cypress - variable scope.
// let searchedCity;

cy.findByText
// cy.findByText("Today").should("exist").click();
cy.get("a").contains("Today").should("exist").click();

hamburger menu on LHS not working in cypress.
not able to see the dropdown

auth
oauth

DONE-> click on today link and check text on the page.
CYPRESS-> intercept api call

DONE hourly section

mAR 30
Acordion header has time hour - temperateure
Add dates section in hourly card

get hourly forecast from server.
implement axios call on server.
