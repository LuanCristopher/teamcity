const app = require('app.js'); // ou o caminho correto do seu arquivo

test('saudação deve retornar "Hello, TeamCity!"', () => {
  expect(app()).toBe('Hello, TeamCity!');
});
