export class User {
  constructor(
    public uid: string,
    public username: string,
    public displayName: string,
    public email: string,
    public password: string,
    public imageUrl: string, // Add this line
  ) {}

  toObject() {
    return {
      uid: this.uid,
      username: this.username,
      displayName: this.displayName,
      email: this.email,
      password: this.password,
      imageUrl: this.imageUrl, // And this line
    };
  }
}