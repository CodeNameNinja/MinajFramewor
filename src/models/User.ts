<<<<<<< HEAD
interface UserProps {
  name?: string;
  age?: number;
}

export class User {
  constructor(private data: UserProps) {}

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }
}
=======
interface UserProps{
  name:string; 
  age:number;
}

export class User{
  constructor(private data: UserProps){}

  get(propName:string): (string | number){
    return this.data[propName];
  }
}
>>>>>>> 6c09b38a0c97a452576df5f10c1049c0b565ac7f
