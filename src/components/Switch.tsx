'use client';

import { useState } from "react";
import { IoSunny } from "react-icons/io5";

export default function Switch() {
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = () => {
        setIsChecked((prevState) => !prevState);
    };

    return (
        <div className="relative inline-block w-12 h-6" onClick={handleChange}>
            <div
                className={`w-full h-full rounded-full transition-colors duration-300 border border-stone-500 ${isChecked ? "bg-stone-700" : "bg-stone-700"}`}
            />
            <IoSunny className={`absolute right-0 top-0 w-[1rem] h-[1rem] m-[0.25rem] text-stone-400`} />
            <div
                className={`absolute left-0 top-0 w-[1rem] h-[1rem] m-[0.25rem] rounded-full transition-transform duration-200 ${isChecked ? "translate-x-6 bg-stone-400" : "bg-stone-400"}`}
            />
        </div>
    );
}