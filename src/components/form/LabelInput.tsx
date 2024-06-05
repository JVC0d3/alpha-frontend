import { Dispatch, HTMLInputTypeAttribute, LabelHTMLAttributes, SetStateAction } from 'react';

interface LabelInputProps extends LabelHTMLAttributes<HTMLLabelElement> {
    type: HTMLInputTypeAttribute;
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
    name: string;
    placeholder: string;
}

function LabelInput(props: LabelInputProps) {
    return (
        <label
            htmlFor={props.htmlFor}
            className={`flex flex-col text-black'>
        <span className='text-dark-blue font-medium ${props.className}`}
        >
            {props.children}
            <input
                type={props.type}
                value={props.value}
                name={props.name}
                onChange={({ target }) => props.setValue(target.value)}
                className={`p-2 border-2 border-dark-blue rounded outline-slate-300 placeholder-slate-300`}
                placeholder={props.placeholder}
            />
        </label>
    );
}

export default LabelInput;
