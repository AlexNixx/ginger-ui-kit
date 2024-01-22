import { memo, useLayoutEffect, useState } from 'react';
import type { ImgHTMLAttributes, ReactElement } from 'react';

import type { BorderRadius } from 'model';
import { classNames } from 'utils';

import cls from './Image.module.scss';

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  radius?: BorderRadius;
  fallback?: ReactElement;
  errorFallback?: ReactElement;
}

export const _Image = memo((props: ImageProps) => {
  const {
    className,
    src,
    radius = 'md',
    fallback,
    errorFallback,
    alt,
    ...otherProps
  } = props;

  const additional: string[] = [className, cls[`radius_${radius}`]];

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useLayoutEffect(() => {
    const img = new Image();
    img.src = src ?? '';
    img.onload = () => {
      setIsLoading(false);
    };
    img.onerror = () => {
      setIsLoading(false);
      setIsError(true);
    };
  }, [src]);

  if (isLoading && fallback) return fallback;

  if (isError && errorFallback) return errorFallback;

  return (
    <img
      className={classNames(cls.image, {}, additional)}
      alt={alt}
      {...otherProps}
    />
  );
});
