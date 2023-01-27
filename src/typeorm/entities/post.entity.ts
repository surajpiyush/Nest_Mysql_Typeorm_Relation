import { Entity,PrimaryGeneratedColumn,Column,ManyToOne} from 'typeorm'
import { User } from './user.entity';

@Entity({name:'user_post'})
export class Post{

@PrimaryGeneratedColumn()
id:number;
@Column()
tittle:string;

@Column()
description:string;
@ManyToOne(()=>User , (user)=>user.posts)
user:User
}