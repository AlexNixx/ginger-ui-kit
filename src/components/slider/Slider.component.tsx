import { ReactNode, Children, useEffect, useRef } from 'react';

import { AnimationProvider, useAnimationLibs } from 'shared/lib';
import { clamp } from 'shared/utils';

import { AlignStrategies, Strategy } from './strategy';

import cls from './Slider.module.scss';

interface SliderProps {
  children: ReactNode;
  activeIndex?: number;
  onIndexChange?: (index: number) => void;
  subScaleInactive?: boolean;
  spacing?: number;
  overflow?: string;
  height?: number | string;
  slideWidth?: number;
  align?: Strategy;
}

const SliderContent = (props: SliderProps) => {
  const {
    children,
    activeIndex = 0,
    onIndexChange = () => {},
    subScaleInactive = false,
    spacing = 5,
    overflow = 'hidden',
    height = 300,
    slideWidth = 60,
    align = 'center'
  } = props;

  const { Spring, Gesture } = useAnimationLibs();
  const { a, to, useSprings } = Spring;
  const { useDrag } = Gesture;

  const slides = Children.toArray(children);

  const index = useRef(0);

  useEffect(() => {
    if (activeIndex !== index.current) moveSlide(activeIndex);
  }, [activeIndex]);

  const calculateMovement =
    ({ xMov = 0, dragging = false } = {}) =>
    (springIndex: number) => {
      const spacingPercentage = (spacing * 100) / slideWidth;
      const offset = 100 - (slideWidth - spacing);
      const offsetPercentage = (offset / slideWidth) * 100;
      const currentSlideIndex = index.current;
      const slidesCount = slides.length;

      let x = AlignStrategies[align]({
        x: (springIndex - currentSlideIndex) * 100,
        offsetPercentage,
        spacingPercentage,
        currentSlideIndex,
        slidesCount
      });

      if (dragging) {
        const deltaPercentage = xMov / (window.innerWidth / 1.2);
        x += deltaPercentage;
      }

      let scale = dragging ? 1 - Math.abs(xMov) / (100 * 9) : 1;
      scale =
        subScaleInactive && springIndex !== index.current ? scale * 0.9 : scale;

      return { x, scale };
    };

  const [springs, springRef] = useSprings(slides.length, calculateMovement({}));

  // must be set as any via void return
  const bind: any = useDrag(
    ({ dragging, movement: [xMov], direction: [xDir], cancel }) => {
      if (dragging && Math.abs(xMov) > window.innerWidth * 0.15) {
        index.current = clamp(
          index.current + (xDir > 0 ? -1 : 1),
          0,
          slides.length - 1
        );
        onIndexChange(index.current);
        cancel();
      }
      springRef.current.forEach((controller, index) => {
        const movement = calculateMovement({ xMov, dragging })(index);
        controller.start(movement);
      });
    }
  );

  const moveSlide = (newIndex: number) => {
    index.current = clamp(newIndex, 0, slides.length - 1);
    springRef.current.forEach((controller, index) => {
      const movement = calculateMovement({})(index);
      controller.start(movement);
    });
    onIndexChange(index.current);
  };

  return (
    <div
      style={{
        height,
        overflow
      }}
      className={cls.slider}
    >
      {springs.map(({ x, scale }, springIndex) => (
        <a.div
          {...bind()}
          key={springIndex}
          style={{
            transform: to(
              [x, scale],
              (t: number, s: number) => `translate3d(${t}%,0,0) scale(${s})`
            ),
            paddingRight: `${spacing}%`,
            width: `${slideWidth}%`
          }}
          className={cls.sliderItem}
        >
          {slides[springIndex]}
        </a.div>
      ))}
    </div>
  );
};

const SliderAsync = (props: SliderProps) => {
  const { isLoaded } = useAnimationLibs();

  if (!isLoaded) {
    return null;
  }

  return <SliderContent {...props}>{props.children}</SliderContent>;
};

export const Slider = (props: SliderProps) => (
  <AnimationProvider>
    <SliderAsync {...props}>{props.children}</SliderAsync>
  </AnimationProvider>
);
