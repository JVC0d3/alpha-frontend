import { ComponentProps, Dispatch, SetStateAction } from 'react';
import { twMerge } from 'tailwind-merge';

interface InputFieldProps extends ComponentProps<'input'> {
    setValue: Dispatch<SetStateAction<string>>;
}

const InputField = ({
    className,
    value,
    setValue,
    ...props
}: InputFieldProps) => {
    return (
        <input
            {...props}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className={twMerge(
                'p-2 border-2 border-dark-blue rounded outline-slate-300 placeholder-slate-500',
                className,
            )}
        />
    );
};

export default InputField;
