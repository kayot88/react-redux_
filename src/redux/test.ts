export type AddressType = {
  city: "poltava" | "kiev";
  country: string;
};

let user: UserType = {
  sayHello(mess: string) {
    console.log(mess);
  },
  id: null as number | null,
  name: "Gromov",
  male: true,
  address: { city: "poltava", country: "sdcsdc" },
};

export type UserTypes = typeof user;

let state: UserTypes = {
  id: 10,
  male: true,
  name: "Gromov",
  sayHello(hello) {},
  address: { city: "kiev", country: "sdsdc" },
};


type UserType = {
  sayHello: (mess: string) => void;
  id: number | null;
  age?: number;
  name: string;
  male: Boolean;
  address: AddressType;
};
