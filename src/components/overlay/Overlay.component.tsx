import { memo } from 'react';

import { classNames, Mods } from 'utils';

import cls from './Overlay.module.scss';

interface OverlayProps {
  className?: string;
  onClick?: () => void;
}

export const Overlay = memo((props: OverlayProps) => {
  const { className, onClick } = props;

  const mods: Mods = {
    [cls.clickable]: !!onClick
  };

  return (
    <div
      className={classNames(cls.overlay, mods, [className])}
      onClick={onClick}
    />
  );
});
