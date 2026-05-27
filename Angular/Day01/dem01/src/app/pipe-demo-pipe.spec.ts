import { PipeDemoPipe } from './pipe-demo-pipe';

describe('PipeDemoPipe', () => {
  it('create an instance', () => {
    const pipe = new PipeDemoPipe();
    expect(pipe).toBeTruthy();
  });
});
