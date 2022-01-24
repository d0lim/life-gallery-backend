// src/modules/memo/entity.ts
import {
  CreateDateColumn,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn
} from "typeorm";
import { Gallery } from "../gallery/entity";

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne((type) => Gallery)
  @JoinColumn({ name: "gallery_id" })
  @Column({ type: "varchar", length: 40, nullable: false })
  title: string;

  @Column({ type: "varchar", length: 1000, nullable: true })
  content: string;

  @Column({ type: "varchar", nullable: false })
  image_link: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}