import { Repository } from 'typeorm';

import { getRepositoryByModel } from '../connection';
import { TestModel } from '../models/test';

class TestRepository {
  protected repository: Repository<TestModel>;

  private async connect(): Promise<void> {
    if (!this.repository) {
      this.repository = await getRepositoryByModel<TestModel>(TestModel);
    }
  }

  public async create(): Promise<TestModel> {
    await this.connect();

    const createdRecord = this.repository.create();

    return this.repository.save(createdRecord);
  }

  public async findOne(findParams: Partial<TestModel>): Promise<TestModel> {
    await this.connect();

    return this.repository.findOne(findParams);
  }
}

export const testRepository = new TestRepository();
