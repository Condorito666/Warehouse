import React from 'react';

const TextInput = ({
  label,
  name,
  type = 'text',
  placeholder,
  isRequired = true,
  className = '',
  ref,
  ...props
}) => {
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label
          htmlFor={name}
          className="block mb-2 text-sm font-medium text-slate-900 dark:text-slate-100"
        >
          {label}
        </label>
      )}
      <input
        ref={ref}
        type={type}
        id={name}
        name={name}
        required={isRequired}
        className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-md bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors placeholder:text-slate-400 dark:placeholder:text-slate-500 shadow-sm"
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};

TextInput.displayName = 'TextInput';

export default TextInput;
