export class Employee{
    name: string;
    pass: string;
    email: string;
    photourl: string;
    role: string;
    constructor(name: string, pass: string, email: string, photourl: string)
    {
       this.name = name;
       this.email = email;
       this.pass = pass;
       this.photourl = photourl;
       this.role = 'employee';

    }

}
