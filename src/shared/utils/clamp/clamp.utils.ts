export const clamp = (
  value: number,
  limit1: number,
  limit2: number
): number => {
  if ([value, limit1, limit2].some(Number.isNaN)) return NaN;

  if (limit1 > limit2) {
    [limit1, limit2] = [limit2, limit1];
  }
  const min = (value1: number, value2: number): number => {
    return value1 < value2 ? value1 : value2;
  };
  const max = (value1: number, value2: number): number => {
    return value1 > value2 ? value1 : value2;
  };

  return min(max(value, limit1), limit2);
};
