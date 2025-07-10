interface User {
  lastName: string;
  firstName: string;
  age: number;
}

type ReadonlyType<T> = {
  readonly [K in keyof T]-?: T[K];
};

type ArrayAnalog<T> = {
  [K in number]: T;
};

const array: ArrayAnalog<string> = ['a', 'b', 'c'];

type WithoutAge<T> = Omit<T, 'age'>;

type UserWithoutAge<T> = {
  [K in keyof T as Exclude<K, 'age'>]: T[K];
};

type test = UserWithoutAge<User>;

const UserTest: test = {
  lastName: 'dima',
  firstName: 'dima',
};
