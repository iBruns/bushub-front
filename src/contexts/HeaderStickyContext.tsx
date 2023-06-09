'use client';

import { createContext, useContext, useState } from "react";


type HeaderStickyContextType = {
    isSticked: boolean;
    setIsSticked: (isSticked: boolean) => void;
}

const HeaderStickyContext = createContext<HeaderStickyContextType>({
    isSticked: false,
    setIsSticked: () => { }
});

export const useHeaderSticky = () => useContext(HeaderStickyContext);

type HeaderStickyProviderProps = {
    children: React.ReactNode;
}

export function HeaderStickyProvider({ children }: HeaderStickyProviderProps) {
    const [isSticked, setIsSticked] = useState<boolean>(false);

    return (
        <HeaderStickyContext.Provider value={{ isSticked, setIsSticked }}>
            {children}
        </HeaderStickyContext.Provider>
    );
}