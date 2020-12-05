import { MigrationInterface, QueryRunner } from 'typeorm';

export class test1589446208028 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "test" ("guid" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdDate" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedDate" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_5aae37082bb66baf31d82b41e96" PRIMARY KEY ("guid"))`,
      undefined
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "test"`, undefined);
  }
}
