import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'test' })
export class TestModel {
  @PrimaryGeneratedColumn('uuid')
  public guid: string;

  @CreateDateColumn({ type: 'timestamptz', readonly: true })
  public createdDate: Date;

  @UpdateDateColumn({ type: 'timestamptz', readonly: true })
  public updatedDate: Date;
}
