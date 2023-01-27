import {Entity,PrimaryGeneratedColumn,Column } from 'typeorm'
@Entity({name:'user_profiles'})
export class Profile {
@PrimaryGeneratedColumn()
id:number;

@Column()
firstName:string;
@Column()
lastName:string;

@Column({default:2})
age:number;

@Column()
dob:string;

}