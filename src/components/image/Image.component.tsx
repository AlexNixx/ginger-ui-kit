import { memo, ReactNode, useLayoutEffect, useState } from 'react';
import type { ImgHTMLAttributes } from 'react';

import { classNames } from 'shared/utils';
import type { BorderRadius } from 'model';

import cls from './Image.module.scss';

type ObjectFit = 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  radius?: BorderRadius;
  objectFit?: ObjectFit;
  fallback?: ReactNode;
  fallbackUrl?: string;
  errorFallback?: ReactNode;
}

export const _Image = memo((props: ImageProps) => {
  const {
    className,
    src,
    width,
    height,
    radius = 'md',
    objectFit = 'cover',
    fallback,
    fallbackUrl,
    errorFallback,
    alt,
    ...otherProps
  } = props;

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

  const additional: string[] = [
    className,
    cls[`radius_${radius}`],
    cls[`objectFit_${objectFit}`]
  ];
  const fallbackClassName = classNames(cls.imageFallback, {}, additional);
  const imageClassName = classNames(cls.image, {}, additional);
  const style = { height, width };

  if (isLoading && fallback) return fallback;

  if (isError && errorFallback) return errorFallback;

  return (
    <>
      {fallbackUrl && isLoading && (
        <img
          className={fallbackClassName}
          style={style}
          alt={alt}
          src={fallbackUrl}
          {...otherProps}
        />
      )}
      <img
        className={imageClassName}
        style={style}
        alt={alt}
        loading='lazy'
        src={src}
        {...otherProps}
      />
    </>
  );
});
