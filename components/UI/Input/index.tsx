import React, { forwardRef } from 'react';

import useRefInput, { IInputRef } from '../../../hooks/useRefInput';
import { IoCloseCircleOutline, IoCheckmarkCircleOutline } from 'react-icons/io5';

interface IInputProps {
  label?: string;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
}

const Input = forwardRef<IInputRef, IInputProps>(({ inputProps, labelProps, label, icon: Icon }, ref) => {
  const { inputRef, error, message } = useRefInput(ref);

  return (
    <div className="space-y-2">
      {label && (
        <label
          {...labelProps}
          htmlFor={inputProps?.id}
          className={'mb-2 text-sm font-bold text-gray-800 ' + labelProps?.className}>
          {label}
          {inputProps?.required && <span className="font-normal text-red-500">*</span>}
        </label>
      )}
      <div className="space-y-1">
        <div className="relative border-gray-300">
          {Icon && (
            <button
              title={label}
              onClick={() => inputRef.current?.focus()}
              className="absolute inset-y-0 left-0 flex items-center border-r border-gray-100 px-4 py-3 ">
              <Icon className="h-5 w-5 text-gray-500 peer-valid:text-green-400" />
            </button>
          )}

          <input
            {...inputProps}
            ref={inputRef as any}
            className={`w-full rounded border ${
              error === 'error' ? 'border-red-500' : error === 'idle' ? 'border-gray-400' : 'border-green-300'
            } bg-transparent py-3 px-3 text-sm text-gray-500 placeholder-gray-500 shadow-sm focus:border-blue-700 focus:outline-none  ${
              inputProps?.className
            }`}
          />
        </div>
        <div
          className={`flex h-4 items-center justify-between ${error === 'error' ? 'text-red-500' : 'text-green-600'}`}>
          <p className="text-xs">{message}</p>
          {error === 'error' && <IoCloseCircleOutline className="h-4 w-4" />}
          {error === 'success' && <IoCheckmarkCircleOutline className="h-4 w-4" />}
        </div>
      </div>
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
