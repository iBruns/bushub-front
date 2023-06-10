import { HTMLInputTypeAttribute } from "react";
import { IoAccessibility, IoCalendar, IoCalendarClear } from "react-icons/io5";


interface InputProps {
    className?: string;
    InputPlaceholder: string;
    inputId: string;
    inputName: string;
    label: string;
    value?: string;
}

export default function DateInput({ className, InputPlaceholder, inputId, inputName, label, value = '' }: InputProps) {
    const focus = 'focus:outline-none focus:ring'

    const styleSettings = `${focus} ${className}`


    return (
        <div>
            <label className=" flex flex-col space-y-2">
                <span className="text-stone-200 text-sm font-medium">{label}</span>
                <div className="relative block">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-2 ">
                        <IoCalendarClear className="h-4 w-4 fill-stone-700" />
                    </div>
                    <input readOnly value={value} type='text' id={inputId} name={inputName} className={` transition-all duration-200 pl-9 pr-3 w-36 placeholder:text-stone-700 text-stone-200 rounded-md h-9 px-4 bg-stone-800/70 text-sm ${styleSettings}`} placeholder={InputPlaceholder} />
                </div>
            </label>

        </div>
    );
}