function sum(a: number, b: number): number {
  return a + b;
}

type SumFn = typeof sum;

function performAction(cb: SumFn) {
  cb(1, 2);
}

type User = {
  name: string;
  age: number;
  gender: 'male' | 'female';
};

type UserKeys = keyof User;

function getProp<T extends object, U extends keyof T>(obj: T, key: U): T[U] {
  if (!obj.hasOwnProperty(key)) throw new Error('Accessing undefined or null value');

  return obj[key];
}

type AppUser = {
  name: string;
  age: number;
  permission: {
    id: string;
    title: string;
    description: string;
  }[];
};

type Perms = AppUser['permission'];

const Color = {
  Red: 'red',
  Green: 'green',
  Blue: 'blue',
} as const;

type Color = (typeof Color)[keyof typeof Color];

const enum Direction {
  Up = 'Up ',
  Down = 'Down ',
  Left = 'Left ',
  Right = 'Right',
}

let move = Direction['Up'];

console.log(move);
