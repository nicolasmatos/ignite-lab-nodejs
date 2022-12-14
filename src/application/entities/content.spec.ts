import { Content } from './content';
describe('Notification content', () => {
  it('should be able to create a notification content', () => {
    const content = new Content('Você recebeu uma solicitação de amizade!');

    expect(content).toBeTruthy();
  });

  it('should be not able to create a notification content with lass than 5 caracters', () => {
    expect(() => new Content('BIL!')).toThrow();
  });

  it('should be not able to create a notification content with more than 240 caracters', () => {
    expect(() => new Content('A'.repeat(241))).toThrow();
  });
});
