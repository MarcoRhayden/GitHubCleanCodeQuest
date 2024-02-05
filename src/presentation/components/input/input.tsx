import React, { useRef } from 'react';

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  type: React.HTMLInputTypeAttribute;
  id: string;
  value?: string;
  name: string;
  placeholder?: string;
  state?: any;
  setState?: any;
  customStyle?: string;
  autoComplete?: string;
  readOnly?: boolean;
  maxLength?: number;
  autoFocus?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

const Input: React.FC<Props> = ({ state, setState, ...props }: Props) => {
  const inputRef = useRef<HTMLInputElement>();
  return (
    <input
      ref={inputRef}
      data-testid={props.name}
      readOnly={props.readOnly ?? false}
      autoComplete={props.autoComplete ?? 'nope'}
      value={props.value}
      id={props.id}
      type={props.type}
      name={props.name}
      maxLength={props.maxLength}
      placeholder={props.placeholder ?? ''}
      onChange={
        props.onChange ??
        (e => {
          setState({ ...state, [e.target.name]: e.target.value });
        })
      }
      className={props.customStyle ?? null}
      autoFocus={props.autoFocus ?? false}
    />
  );
};

export default Input;
