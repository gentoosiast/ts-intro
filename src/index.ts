// * interface which describes function
//
// interface MyFunc {
//     (value: string): number;
// }

// * interface declaration merging
//
// interface Person {
//   name: string;
// }

// interface Person {
//   age: number;
// }

// const person: Person = {
//   name: 'John Doe',
//   age: 23
// }

// * as const instead of enums
//
// const HTTP_STATUS = {
//   OK: 200,
//   BAD_REQUEST: 400,
//   FORBIDDEN: 403,
//   NOT_FOUND: 404,
// } as const;

// type ObjectValues<T> = T[keyof T];

// type HttpStatus = ObjectValues<typeof HTTP_STATUS>;

// function sendResponse(data: unknown, statusCode: HttpStatus) {
//   if (statusCode === 200) {
//     // ...
//   }
// }

// const roles = ['user', 'moderator', 'admin'] as const;

// * getting type from array values

// type Role = typeof roles[number];

// * typeof

// * type predicates

// const THEME = {
//   Light: 'light',
//   Dark: 'dark',
// } as const;

// type ObjectValues<T> = T[keyof T];

// type Theme = ObjectValues<typeof THEME>;

// type Settings = {
//   theme: Theme;
// };

// const initialSettings: Settings = {
//   theme: THEME.Light,
// };

// const isTheme = (value: unknown): value is Theme => {
//   const allowedValues: string[] = Object.values(THEME);

//   return typeof value === 'string' && allowedValues.includes(value);
// };

// const isSettings = (value: unknown): value is Settings => {
//   if (value && typeof value === 'object' && 'theme' in value && isTheme(value.theme)) {
//     return true;
//   }

//   return false;
// };

// const loadSettingsFromLs = (lsKey: string, fallback: Settings): Settings => {
//   try {
//     const jsonValue = localStorage.getItem(lsKey);

//     if (!jsonValue) {
//       return fallback;
//     }

//     const unknownValue: unknown = JSON.parse(jsonValue);

//     if (isSettings(unknownValue)) {
//       return unknownValue;
//     }

//     return fallback;
//   } catch {
//     return fallback;
//   }
// };

// * Indexing

// type Person = { [key: string]: string | number }; // strings, numbers, symbols as key
// // type Person = Record<string, string | number>;

// const person: Person = {
//   name: 'John',
//   age: 23,
//   occupation: 'entrepreneur',
// };

// const getFieldFromPerson = (personObj: Person, field: string) => {
//   return personObj[field];
// };

// type Person = { [key: string]: string | number }; // strings, numbers, symbols as key
// type Person = Record<string, string | number>;

// const person = {
//   name: 'John',
//   age: 23,
//   occupation: 'entrepreneur',
// };

// type Person = typeof person & { [key: string]: string | number };

// const getFieldFromPerson = (personObj: Person, field: string) => {
//   return personObj[field];
// };

// * Discriminated unions

// type ApiError = {
//   status: 'error';
//   errorMessage: string;
// };

// type ApiSuccess = {
//   status: 'success';
//   data: unknown;
// };

// type ApiResponse = ApiError | ApiSuccess;

// const processApiAnswer = (response: ApiResponse) => {
//   if (response.status === 'success') {
//     console.log(response.data);
//   } else {
//     console.log(response.errorMessage);
//   }
// };

// * satisfies operator

// const config1: Record<string, string | number | boolean> = {
//   theme: 'dark',
//   initialNonogramId: 0,
//   isMuted: false,
// };

// config1.theme = 'light';

// const config2 = {
//   theme: 'dark',
//   initialNonogramId: 0,
//   isMuted: false,
// } satisfies Record<string, string | number | boolean>;
