import React, { memo, ReactNode } from 'react';

import { Portal } from 'components/portal';
import { Overlay } from 'components/overlay';
import { useModal } from 'shared/hooks';
import { classNames } from 'shared/utils';
import { useAnimationLibs, AnimationProvider } from 'shared/lib';

import cls from './Modal.module.scss';

interface ModalProps {
  className?: string;
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const ANIMATION_DELAY = 300;

const ModalContent = memo((props: ModalProps) => {
  const { useSpring, animated } = useAnimationLibs().Spring;
  const { className, children, isOpen, onClose } = props;

  const { close, isClosing, isMounted } = useModal({
    animationDelay: ANIMATION_DELAY,
    onClose,
    isOpen
  });

  const animation = useSpring({
    opacity: isOpen && !isClosing ? 1 : 0,
    config: { duration: ANIMATION_DELAY }
  });

  if (!isMounted) {
    return null;
  }

  return (
    <Portal>
      <animated.div
        style={animation}
        className={classNames(cls.modal, {}, [className])}
        aria-modal
      >
        <Overlay onClick={close} />
        <div className={cls.content}>{children}</div>
      </animated.div>
    </Portal>
  );
});

export const ModalAsync = (props: ModalProps) => {
  const { isLoaded } = useAnimationLibs();

  if (!isLoaded) {
    return null;
  }

  return <ModalContent {...props}>{props.children}</ModalContent>;
};

export const Modal = (props: ModalProps) => (
  <AnimationProvider>
    <ModalAsync {...props}>{props.children}</ModalAsync>
  </AnimationProvider>
);
