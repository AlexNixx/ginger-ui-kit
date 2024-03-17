import {
  ChangeEvent,
  forwardRef,
  InputHTMLAttributes,
  memo,
  ReactNode,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState
} from 'react';

import { Typography } from '../typography';
import type { Mods } from 'shared/utils';
import { classNames } from 'shared/utils';

import cls from './TextField.module.scss';

type HTMLTextFieldProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'onChange' | 'readOnly' | 'size' | 'placeholder'
>;

interface TextFieldProps extends HTMLTextFieldProps {
  label: string;
  readonly?: boolean;
  autofocus?: boolean;
  errorMessage?: string;
  leftAddon?: ReactNode;
  rightAddon?: ReactNode;
  className?: string;
  onChange: (value: string) => void;
}

export const TextField = memo(
  forwardRef((props: TextFieldProps, forwardedRef) => {
    const {
      value = '',
      label,
      type = 'text',
      disabled,
      readonly,
      autofocus,
      errorMessage,
      leftAddon,
      rightAddon,
      className,
      onChange,
      ...otherProps
    } = props;

    const ref = useRef<HTMLInputElement>(null);
    useImperativeHandle(forwardedRef, () => ref.current);
    const [isFocused, setIsFocused] = useState<boolean>(false);

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

    const handleOnChange = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
      },
      [onChange]
    );

    const mods: Mods = {
      [cls.focused]: isFocused,
      [cls.readonly]: readonly,
      [cls.disabled]: disabled,
      [cls.error]: !!errorMessage
    };

    const additional: string[] = [className];

    return (
      <div className={classNames(cls.textFieldWrapper, mods, additional)}>
        {leftAddon && (
          <div className={classNames(cls.leftAddon)}>{leftAddon}</div>
        )}
        <input
          value={value}
          ref={ref}
          type={type}
          placeholder={label}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={handleOnChange}
          readOnly={readonly}
          className={cls.textField}
          {...otherProps}
        />
        <Typography
          variant='body1'
          className={classNames(cls.label, {
            [cls.labelError]: !!errorMessage
          })}
          noWrap
        >
          {!!errorMessage ? errorMessage : label}
        </Typography>
        {rightAddon && (
          <div className={classNames(cls.rightAddon)}>{rightAddon}</div>
        )}
      </div>
    );
  })
);
