import {
  ChangeEvent,
  InputHTMLAttributes,
  memo,
  ReactNode,
  useEffect,
  useRef,
  useState
} from 'react';

import { Typography } from '../typography';
import { classNames } from 'shared/utils';
import type { Mods } from 'shared/utils';

import cls from './TextField.module.scss';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readOnly' | 'size'
>;

interface TextFieldProps extends HTMLInputProps {
  label?: string;
  hint?: string;
  readonly?: boolean;
  autofocus?: boolean;
  isError?: boolean;
  errorMessage?: string;
  leftAddon?: ReactNode;
  rightAddon?: ReactNode;
  className?: string;
  onChange?: (value: string) => void;
}

export const TextField = memo((props: TextFieldProps) => {
  const {
    label,
    hint,
    type = 'text',
    disabled,
    readonly,
    autofocus,
    isError,
    errorMessage,
    leftAddon,
    rightAddon,
    className,
    onChange,
    ...otherProps
  } = props;

  const ref = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const mods: Mods = {
    [cls.focused]: isFocused,
    [cls.readonly]: readonly,
    [cls.disabled]: disabled,
    [cls.error]: isError
  };

  const additional: string[] = [className];

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true);
      ref.current?.focus();
    }
  }, [autofocus]);

  const onBlur = () => {
    setIsFocused(false);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const textField = (
    <div className={classNames(cls.textFieldWrapper, mods, additional)}>
      {leftAddon && (
        <div className={classNames(cls.leftAddon)}>{leftAddon}</div>
      )}
      <input
        ref={ref}
        type={type}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={handleOnChange}
        readOnly={readonly}
        className={cls.textField}
        {...otherProps}
      />
      {rightAddon && (
        <div className={classNames(cls.rightAddon)}>{rightAddon}</div>
      )}
    </div>
  );

  if (label || hint || errorMessage) {
    return (
      <div className={cls.textFieldContainer}>
        {label && (
          <Typography
            variant='body2'
            fontWeight='medium'
            className={cls.label}
            noWrap
          >
            {label}
          </Typography>
        )}
        {textField}
        {(isError || hint) && (
          <Typography
            variant='body2'
            className={classNames(cls.hint, { [cls.error]: isError })}
            noWrap
          >
            {isError && errorMessage ? errorMessage : hint}
          </Typography>
        )}
      </div>
    );
  }

  return textField;
});
