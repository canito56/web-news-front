import { Timestamp } from "rxjs";
import { User } from './user';

export class News {
    id_news?: number
    title: string
    snews: string
    date_created?: Timestamp<any>
    user: User

    constructor(title: string, snews: string, id: number) {
        this.user = new User('', '', '', '', '')
        this.title = title
        this.snews = snews
        this.user.id_user = id
    }
}