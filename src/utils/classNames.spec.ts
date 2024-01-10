import { classNamesUtils } from './classNames.utils';

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNamesUtils('button')).toBe('button');
  });

  test('with additional class', () => {
    const expected = 'button solid primary';

    expect(classNamesUtils('button', {}, ['solid', 'primary'])).toBe(expected);
  });

  test('with mods', () => {
    const expected = 'button solid primary disabled fullWidth';

    expect(
      classNamesUtils('button', { disabled: true, fullWidth: true }, [
        'solid',
        'primary'
      ])
    ).toBe(expected);
  });

  test('with mods false', () => {
    const expected = 'button solid primary disabled';

    expect(
      classNamesUtils('button', { disabled: true, fullWidth: false }, [
        'solid',
        'primary'
      ])
    ).toBe(expected);
  });

  test('with mods undefined', () => {
    const expected = 'button solid primary disabled';

    expect(
      classNamesUtils('button', { disabled: true, fullWidth: undefined }, [
        'solid',
        'primary'
      ])
    ).toBe(expected);
  });
});
