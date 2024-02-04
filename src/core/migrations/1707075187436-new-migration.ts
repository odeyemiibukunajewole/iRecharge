import { MigrationInterface, QueryRunner } from "typeorm";

export class NewMigration1707075187436 implements MigrationInterface {
    name = 'NewMigration1707075187436'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "article" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, CONSTRAINT "PK_40808690eb7b915046558c0f81b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "currrency" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "symbol" character varying NOT NULL, CONSTRAINT "PK_53cf11a524ab5623da7b185163c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "price" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "price" integer NOT NULL, "articleId" integer, "providerId" integer, "currencyId" integer, CONSTRAINT "PK_d163e55e8cce6908b2e0f27cea4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "provider" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, CONSTRAINT "PK_6ab2f66d8987bf1bfdd6136a2d5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "price" ADD CONSTRAINT "FK_0071434f1d1efe2457a0025c6f6" FOREIGN KEY ("articleId") REFERENCES "article"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "price" ADD CONSTRAINT "FK_73c0a26f0d3b20ec4b34daaa8d9" FOREIGN KEY ("providerId") REFERENCES "provider"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "price" ADD CONSTRAINT "FK_7092a09a757829c83005c20697c" FOREIGN KEY ("currencyId") REFERENCES "currrency"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "price" DROP CONSTRAINT "FK_7092a09a757829c83005c20697c"`);
        await queryRunner.query(`ALTER TABLE "price" DROP CONSTRAINT "FK_73c0a26f0d3b20ec4b34daaa8d9"`);
        await queryRunner.query(`ALTER TABLE "price" DROP CONSTRAINT "FK_0071434f1d1efe2457a0025c6f6"`);
        await queryRunner.query(`DROP TABLE "provider"`);
        await queryRunner.query(`DROP TABLE "price"`);
        await queryRunner.query(`DROP TABLE "currrency"`);
        await queryRunner.query(`DROP TABLE "article"`);
    }

}
