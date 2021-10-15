import { Timestamp } from "rxjs";

export class User {
    id_user?: number
    suser: string
    password: string
    first_name: string 
    last_name: string
    email: string
    date_created?: Timestamp<any>

    constructor(suser: string, password: string, first_name: string, last_name: string, email: string) {
        this.suser = suser
        this.password = password
        this.first_name = first_name
        this.last_name = last_name
        this.email = email
    }
}