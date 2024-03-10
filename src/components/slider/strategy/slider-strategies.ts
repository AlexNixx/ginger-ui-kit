export type Strategy = keyof typeof AlignStrategies;

interface SliderStrategies {
  x: number;
  offsetPercentage: number;
  spacingPercentage: number;
  currentSlideIndex: number;
  slidesCount: number;
}

const center = ({
  x,
  offsetPercentage,
  spacingPercentage,
  currentSlideIndex,
  slidesCount
}: SliderStrategies) => {
  if (currentSlideIndex === slidesCount) {
    x += offsetPercentage / 2 - spacingPercentage / 2;
  } else {
    x = x + offsetPercentage / 2;
  }
  return x;
};

const justify = ({
  x,
  offsetPercentage,
  spacingPercentage,
  currentSlideIndex,
  slidesCount
}: SliderStrategies) => {
  if (currentSlideIndex === slidesCount) {
    x += offsetPercentage - spacingPercentage;
  } else if (currentSlideIndex > 0) {
    x += offsetPercentage / 2;
  }

  return x;
};

export const AlignStrategies = { justify, center };
