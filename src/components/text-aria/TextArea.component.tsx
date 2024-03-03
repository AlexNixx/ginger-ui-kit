import {
  ChangeEvent,
  memo,
  TextareaHTMLAttributes,
  useEffect,
  useRef,
  useState
} from 'react';

import { type Mods, classNames } from 'shared/utils';
import { Typography } from '../typography';

import cls from './TextArea.module.scss';

type HTMLTextAreaProps = Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  'value' | 'onChange' | 'readOnly' | 'size'
>;

interface TextAreaProps extends HTMLTextAreaProps {
  label?: string;
  hint?: string;
  readonly?: boolean;
  autofocus?: boolean;
  isError?: boolean;
  errorMessage?: string;
  className?: string;
  showMaxLength?: boolean;
  maxLength?: number;
  onChange?: (value: string) => void;
}

export const TextArea = memo((props: TextAreaProps) => {
  const {
    label,
    hint,
    disabled,
    readonly,
    autofocus,
    className,
    isError,
    errorMessage,
    showMaxLength = false,
    maxLength = 500,
    onChange,
    ...otherProps
  } = props;

  const ref = useRef<HTMLTextAreaElement>(null);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [charLength, setCharLength] = useState<number>(0);

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

  const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    onChange(value);
    setCharLength(value.trim().length);
  };

  const textArea = (
    <div className={classNames(cls.textAreaWrapper, mods, additional)}>
      <textarea
        ref={ref}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={handleOnChange}
        readOnly={readonly}
        className={cls.textArea}
        maxLength={maxLength}
        {...otherProps}
      />
    </div>
  );

  if (label || hint || errorMessage || showMaxLength) {
    return (
      <div className={cls.textAreaContainer}>
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
        {textArea}
        {(isError || hint) && (
          <Typography
            variant='body2'
            className={classNames(cls.hint, { [cls.error]: isError })}
            noWrap
          >
            {isError && errorMessage ? errorMessage : hint}
          </Typography>
        )}
        {showMaxLength && (
          <Typography variant='body2' className={cls.maxLength} noWrap>
            {`${charLength}/${maxLength}`}
          </Typography>
        )}
      </div>
    );
  }

  return textArea;
});
