export class User {
    constructor(
      public uid: string,
      public username: string,
      public email: string,
      public password: string,
      public photoURL?: string,
    ) {}
  }