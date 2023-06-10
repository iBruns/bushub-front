import { HTMLInputTypeAttribute } from "react";


interface InputProps {
    className?: string;
    InputPlaceholder: string;
    inputType?: HTMLInputTypeAttribute;
    inputId: string;
    inputName: string;
    label: string;
    value?: string;
}

export default function Input({ className, InputPlaceholder, inputType = 'text', inputId, inputName, label, value = '' }: InputProps) {
    const focus = 'focus:outline-none focus:ring'

    const styleSettings = `${focus} ${className}`


    return (
        <div>
            <label className=" flex flex-col space-y-2">
                <span className="text-stone-200 text-sm font-medium">{label}</span>
                <input readOnly value={value} type={inputType} id={inputId} name={inputName} className={` transition-all duration-200 placeholder:text-stone-700 text-stone-200 rounded-md h-9 px-4 bg-stone-800/70 text-sm ${styleSettings}`} placeholder={InputPlaceholder} />
            </label>
        </div>
    );
}