import React, { ReactNode } from 'react';
import { animated, useSpring } from '@react-spring/web';

import { Portal } from 'components/portal';
import { Overlay } from 'components/overlay';
import { useModal } from 'shared/hooks';
import { classNames } from 'shared/utils';
import type { Mods } from 'shared/utils';

import cls from './Modal.module.scss';

interface ModalProps {
  className?: string;
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
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

  const mods: Mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing
  };

  if (!isMounted) {
    return null;
  }

  return (
    <Portal>
      <animated.div
        style={animation}
        className={classNames(cls.modal, mods, [className])}
        aria-modal
      >
        <Overlay onClick={close} />
        <div className={cls.content}>{children}</div>
      </animated.div>
    </Portal>
  );
};
