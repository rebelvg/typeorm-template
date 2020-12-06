import { testRepository } from './repositories/test';

(async () => {
  await testRepository.create();

  const data = await testRepository.findOne({});

  console.log(data);

  process.exit();
})();
