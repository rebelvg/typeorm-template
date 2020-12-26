import { Repository } from 'typeorm';

import { getRepositoryByModel } from '../connection';
import { TestModel } from '../models/test';

class TestRepository {
  private repository: Repository<TestModel>;

  private async connect(): Promise<Repository<TestModel>> {
    if (!this.repository) {
      this.repository = await getRepositoryByModel<TestModel>(TestModel);
    }

    return this.repository;
  }

  public async create(): Promise<TestModel> {
    const repository = await this.connect();

    const createdRecord = repository.create();

    return repository.save(createdRecord);
  }

  public async findOne(findParams: Partial<TestModel>): Promise<TestModel> {
    const repository = await this.connect();

    return repository.findOne(findParams);
  }
}

export const testRepository = new TestRepository();
