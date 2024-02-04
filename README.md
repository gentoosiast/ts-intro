# TypeScript intro

## Intro notes

- De facto standard after Flow demise
- No spec
- Types are runtime-only
- [TypeScript Playground](https://www.typescriptlang.org/play)

## tsconfig.json

- Comments are allowed inside this file
- [Official tsconfig.json reference](https://aka.ms/tsconfig.json)
- [Matt Pocock: The TSConfig Cheat Sheet (2023)](https://www.totaltypescript.com/tsconfig-cheat-sheet)
- [Аюб Бегимкулов: Полноценный гайд по tsconfig (2023)](https://www.youtube.com/watch?v=27BfaFgME2o)

### path aliases

- [tsconfig-paths-webpack-plugin](https://www.npmjs.com/package/tsconfig-paths-webpack-plugin)
- [vite-tsconfig-paths](https://www.npmjs.com/package/vite-tsconfig-paths)
- [DreyLiky: Path Aliases & index.ts (2022)](https://www.youtube.com/watch?v=-zA2yiLXl-c)
- [Using @/ path mapping on Create React App projects (2023)](https://dev.to/marcosdiasdev/using-path-aliases-on-create-react-app-projects-686)

## Vite & TypeScript

- Transpile only w/o type-checking
- `npx tsc --init`
- Quick start when using Vite: `npm create vite@latest my-project -- --template vanilla-ts`
- [Vite official docs, TypeScript section](https://vitejs.dev/guide/features.html#typescript)

## Integration with ESLint

- [typescript-eslint: Getting Started](https://typescript-eslint.io/getting-started)
- [typescript-eslint: Linting with Type Information](https://typescript-eslint.io/linting/typed-linting/)

## Misc features

- literal types <https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types>
- `import type` <https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html>
- Type narrowing <https://www.typescriptlang.org/docs/handbook/2/narrowing.html>

### type assertions

- [There is no point in using TypeScript if you don’t care about types (2019)](https://javascript.plainenglish.io/there-is-no-point-to-use-typescript-in-your-project-if-you-dont-care-about-types-68131deeb43a)
- [Avoid using Type Assertions in TypeScript (2023)](https://www.allthingstypescript.dev/p/avoid-using-type-assertions-in-typescript)

## Recommended resources

- [Matt Pocock](https://www.youtube.com/@mattpocockuk)
- [Michigan TypeScript](https://www.youtube.com/@MichiganTypeScript)
