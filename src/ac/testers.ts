// type response1<T> = {
//   error: string;
//   message: Array<string>;
//   data: T;
// };

// const response: response1<UserType> = {
//   error: "sdf",
//   message: ["sdfw", "sdfsf"],
//   data: {
//     name: "sdfwd",
//     last: "sdfwwef",
//   },
// };

export type UserType = {
  name: string;
  last: string;
};

type PhotoType = {
  large: string;
  small: string;
};

type Nullable<T> = null | T;

type ActionType = AC1Type | AC2Type;
// type AC1Type = ReturnType<typeof AC1>;
// type AC2Type = ReturnType<typeof AC2>;
type AC1Type = MyReturnType<typeof AC1>;
type AC2Type = MyReturnType<typeof AC2>;

let test: AC1Type = { type: "SET_USER", age: 18 };
let test2: AC2Type = { type: "SET_PHOTO", last: "sdf", name: "sf" };

// ActionsType for reducer 
// create obj of AC
const Actions = {
  AC1: (age: number) => {
    return {
      type: "SET_USER",
      age,
    } as const;
  },
  AC2: (name: string, last: string) =>
    ({
      type: "SET_PHOTO",
      name,
      last,
    } as const),
};
type ActionsTypeGeneric<T> = T extends { [key: string]: infer U } ? U : never;
type ActionsType = ReturnType<ActionsTypeGeneric<typeof Actions>>;


type StateType = typeof initialState;
const initialState = {
  age: 18,
  name: "Roman",
  last: "Gomov",
  user: null as Nullable<UserType>,
  photo: null as Nullable<PhotoType>,
};

const AC1 = (age: number) => {
  return {
    type: "SET_USER",
    age,
  } as const;
};
const AC2 = (name: string, last: string) =>
  ({
    type: "SET_PHOTO",
    name,
    last,
  } as const);

// TS 👁‍🗨
const reducer = (state: StateType = initialState, action: ActionsType) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        age: action.age,
      };
      case "SET_PHOTO":
        return {

        }
  }
};

// no concat ACTypes to ActionTypes with Conditional types
type NewType<T> = T extends "user"
  ? UserType
  : T extends "photo"
  ? PhotoType
  : null;

let CT: NewType<"user" | "photo"> = {
  name: "Roman",
  last: "Gromov",
};

CT = {
  large: "sdf",
  small: "sdfgdfg",
};

// reWrite ReturnType by own
// 💩 type ActionType = AC1Type | AC2Type;
type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
// if "T extends (...args: any[])" then RETURN ts created type of func "R" or NEVER

// 💩 type objType = typeof obj.a | typeof obj.b | typeof obj.c
// let NewObj: objType = {
//   name: "sdfsfd",
//   age: 18,
//   last: {lastname: "sdfsfd"},
// }

let obj = {
  a: { name: "Roman" },
  b: { age: 18 },
  c: { last: { lastname: "Gromov" } },
};

// 👍
type objType<T> = T extends { [key: string]: infer U } ? U : never;
let newObj: objType<typeof obj> = {
  name: "Reduc",
  age: 18,
  last: { lastname: "25" },
};
