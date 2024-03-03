import React, { memo, ReactNode, useCallback, useEffect } from 'react';

import cls from './Drawer.module.scss';
import { AnimationProvider, useAnimationLibs } from 'shared/lib';
import { useModal } from '../../shared/hooks';
import { Portal } from 'components/portal';
import { classNames } from 'shared/utils';
import { Overlay } from 'components/overlay';

interface DrawerProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

const height = window.innerHeight - 100;
const ANIMATION_DELAY = 300;

const DrawerContent = memo((props: DrawerProps) => {
  const { className, children, onClose, isOpen } = props;

  const { Spring, Gesture } = useAnimationLibs();
  const [{ y }, api] = Spring.useSpring(() => ({ y: height }));

  const {
    close: closeDrawer,
    isClosing,
    isMounted
  } = useModal({
    animationDelay: ANIMATION_DELAY,
    onClose,
    isOpen
  });

  const animation = Spring.useSpring({
    opacity: isOpen && !isClosing ? 1 : 0,
    config: { duration: ANIMATION_DELAY }
  });

  const openDrawer = useCallback(() => {
    api.start({ y: 0, immediate: false });
  }, [api]);

  useEffect(() => {
    if (isOpen) {
      openDrawer();
    }
  }, [api, isOpen, openDrawer]);

  const close = (velocity = 0) => {
    api.start({
      y: height,
      immediate: false,
      config: { ...Spring.config.stiff, velocity, duration: ANIMATION_DELAY },
      onResolve: closeDrawer
    });
  };

  const bind = Gesture.useDrag(
    ({
      last,
      velocity: [, vy],
      direction: [, dy],
      movement: [, my],
      cancel
    }) => {
      if (my < -70) cancel();

      if (last) {
        if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
          close();
        } else {
          openDrawer();
        }
      } else {
        api.start({ y: my, immediate: true });
      }
    },
    {
      from: () => [0, y.get()],
      filterTaps: true,
      bounds: { top: 0 },
      rubberband: true
    }
  );

  if (!isMounted) {
    return null;
  }

  const display = y.to(py => (py < height ? 'block' : 'none'));

  return (
    <Portal>
      <Spring.a.div
        style={animation}
        className={classNames(cls.drawer, {}, [className])}
      >
        <Overlay onClick={close} />
        <Spring.a.div
          className={cls.content}
          style={{
            display,
            bottom: `calc(-100vh + ${height - 100}px)`,
            y
          }}
          {...bind()}
        >
          {children}
        </Spring.a.div>
      </Spring.a.div>
    </Portal>
  );
});

const DrawerAsync = (props: DrawerProps) => {
  const { isLoaded } = useAnimationLibs();

  if (!isLoaded) {
    return null;
  }

  return <DrawerContent {...props}>{props.children}</DrawerContent>;
};

export const Drawer = (props: DrawerProps) => (
  <AnimationProvider>
    <DrawerAsync {...props}>{props.children}</DrawerAsync>
  </AnimationProvider>
);
