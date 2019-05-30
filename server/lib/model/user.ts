export class User {
  id;
  username: string = '';
  createdAt: Date = new Date();

  constructor(private name: string) {}
}
