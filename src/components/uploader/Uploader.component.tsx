import React, { useState, useRef, ChangeEvent } from 'react';

import { ImageIcon } from 'components/icons';
import { Typography } from 'components/typography';
import { useHover } from 'shared/hooks';
import { type Mods, classNames } from 'shared/utils';

import cls from './Uploader.module.scss';

interface UploaderProps {
  className?: string;
  maxHeight?: number;
  maxWidth?: number;
  onChange: (file: File | null) => void;
}

export const Uploader = (props: UploaderProps) => {
  const { className, maxWidth = 1024, maxHeight = 1024, onChange } = props;

  const [image, setImage] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>('No selected file');

  const uploadRef = useRef<HTMLInputElement>(null);
  const hoverRef = useRef<HTMLDivElement>(null);
  const isHover = useHover(hoverRef);

  const handleFileUpdate = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files && files.length > 0) {
      const selectedFile = files[0];
      const maxDimensions = { width: maxWidth, height: maxHeight };
      const image = new Image();
      image.src = URL.createObjectURL(selectedFile);

      image.onload = () => {
        if (
          image.width > maxDimensions.width ||
          image.height > maxDimensions.height
        ) {
          /*TODO: add notification component
          `Image dimensions exceed ${maxHeight}x${maxWidth} pixels. Please select a smaller image.`*/
          return;
        }

        setFileName(selectedFile.name);
        const imageUrl = URL.createObjectURL(selectedFile);
        setImage(imageUrl);

        if (onChange) {
          onChange(selectedFile);
        }
      };
    }
  };

  const handleBrowseClick = () => {
    if (uploadRef.current) {
      uploadRef.current.click();
    }
  };

  const mods: Mods = {
    [cls.hover]: image && isHover,
    [cls.show]: !image
  };

  return (
    <div
      className={classNames(cls.uploader, {}, [className])}
      onClick={handleBrowseClick}
      ref={hoverRef}
    >
      <input
        type='file'
        accept='.png, .jpeg, .jpg'
        hidden
        onChange={handleFileUpdate}
        ref={uploadRef}
      />
      {image && (
        <img
          className={cls.image}
          src={image}
          width={150}
          height={150}
          alt={fileName}
        />
      )}
      <div className={classNames(cls.description, mods)}>
        <ImageIcon />
        <Typography fontWeight='medium'>
          {image ? 'Change Image' : '+ Upload Image'}
        </Typography>
      </div>
    </div>
  );
};
