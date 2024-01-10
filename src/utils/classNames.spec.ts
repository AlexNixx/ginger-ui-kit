import { classNames } from './classNames';

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('button')).toBe('button');
  });

  test('with additional class', () => {
    const expected = 'button solid primary';

    expect(classNames('button', {}, ['solid', 'primary'])).toBe(expected);
  });

  test('with mods', () => {
    const expected = 'button solid primary disabled fullWidth';

    expect(
      classNames('button', { disabled: true, fullWidth: true }, [
        'solid',
        'primary'
      ])
    ).toBe(expected);
  });

  test('with mods false', () => {
    const expected = 'button solid primary disabled';

    expect(
      classNames('button', { disabled: true, fullWidth: false }, [
        'solid',
        'primary'
      ])
    ).toBe(expected);
  });

  test('with mods undefined', () => {
    const expected = 'button solid primary disabled';

    expect(
      classNames('button', { disabled: true, fullWidth: undefined }, [
        'solid',
        'primary'
      ])
    ).toBe(expected);
  });
});
