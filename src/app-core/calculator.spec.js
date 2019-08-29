import { Calculator } from './calculator';
describe('Calculator', () => {
  it('Add', () => {
    const c = new Calculator();
    const result = c.Add(1, 1);
    expect(result).toBe(2);
  });
});
