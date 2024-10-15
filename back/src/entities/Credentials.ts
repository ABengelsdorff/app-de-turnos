import { Column, Entity, OneToOne, PrimaryGeneratedColumn , Index} from "typeorm"
import { User } from "./User"


@Entity({
    name: "credentials"
})

export class Credential {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    @Index({unique: true})
    username: string

    @Column()
    password: string

    @OneToOne (()=> User, (user) => user.credentials) //Con que columna de user esta relacionada la credencial
    user: User
}
