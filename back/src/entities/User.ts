import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { Credential } from "./Credentials" 
import { Appointment } from "./Appointment"

@Entity({
    name: "users"
})

export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 100
    })
    name: string

    @Column()
    email: string

    @Column({type : "date"})
    birthdate: Date

    @Column()
    nDni: number

    @OneToOne(() => Credential, (credential) => credential.user, {
        cascade: true,
        onDelete: "CASCADE"
    }) //El primer parametro es la credencial, el segundo parametro a que columna esta relacionada la credencial.
    @JoinColumn()
    credentials: Credential

    @OneToMany(() => Appointment, (app)=> app.user )
    appointments : Appointment[]
}
