import { type } from "os"

export type CreateUserParams={
  username:string;
  password:string;
}


export type CreateUserProfileParams={
    firstName:string;
    lastName:string;
    age:number;
    dob:string;
}

export type CreateUserPostParams={
  tittle:string;
  description:string;
}