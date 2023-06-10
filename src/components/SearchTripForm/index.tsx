'use client';

import { useEffect, useRef, useState } from "react";
import { IoRepeat, IoSearch } from "react-icons/io5";
import Button from "../Button";
import DateInput from "../DateInput";
import Input from "../Input";
import { useInView } from "framer-motion";
import { useHeaderSticky } from "@/contexts/HeaderStickyContext";


export default function SearchTripForm() {
    const stickyControlerRef = useRef<HTMLDivElement>(null);
    const isStickerControlerInView = useInView(stickyControlerRef);
    const { isSticked, setIsSticked } = useHeaderSticky();

    const [origem, setOrigem] = useState('Rio de Janeiro - RJ');
    const [destino, setDestino] = useState('Florianópolis - SC');

    const handleSwitch = () => {
        let og = origem;
        setOrigem(destino);
        setDestino(og);
    }

    useEffect(() => {
        setIsSticked(!isStickerControlerInView)
    }, [isStickerControlerInView])

    return (
        <>
            <div ref={stickyControlerRef} className=' h-[14vh] mb-24 w-full ' />
            <div className=" flex justify-center items-start sticky top-[5.5rem] w-full max-w-5xl h-56 ">
                <div className={
                    !isSticked
                        ? " flex flex-col items-end border border-stone-600 rounded-xl w-full mx-6 bg-stone-700/60 backdrop-blur-md p-7 space-y-6"
                        : " flex flex-row items-end border border-stone-600 rounded-xl w-full mx-0 bg-stone-700/60 backdrop-blur-md p-4 "
                }
                >
                    <div className={
                        !isSticked
                            ? 'flex flex-row w-full justify-between items-end space-x-2 '
                            : 'flex flex-row flex-auto justify-between items-end space-x-2 '
                    }
                    >
                        <Input
                            className="w-full box-border text-base"
                            value={origem} label='Origem' inputName='origem' inputId="origem" InputPlaceholder="digite a cidade de origem" />
                        <button
                            onClick={handleSwitch}
                            className="transition-all duration-100 focus:outline-none focus:ring flex justify-center items-center border border-stone-500 fill-stone-500 bg-transparent hover:bg-stone-600 rounded-lg h-9 w-10 p-1"
                        >
                            <IoRepeat className="h-6 w-6 text-stone-400" />
                        </button>
                        <Input
                            className="w-full box-border text-base"
                            value={destino} label='Destino' inputName='destino' inputId="destino" InputPlaceholder="digite a cidade de destino" />
                        <div className="flex flex-row items-end space-x-2">
                            <DateInput value='28/12' label='Data de ida' inputName='ida' inputId="ida" InputPlaceholder="Ida" />
                            <span className='flex items-center justify-center h-9 w-auto text-stone-500'>
                                até
                            </span>
                            <DateInput value='15/01' label='Data de volta' inputName='volta' inputId="volta" InputPlaceholder="Volta" />
                        </div>

                    </div>
                    {
                        !isSticked
                            ? <Button
                                className={!isSticked ? 'rounded-lg py-7 px-8 w-full' : 'rounded-lg  p-0 m-0 h-0 w-0'}
                                contentClassName={!isSticked ? "justify-between" : "p-0 m-0"}
                                rightIcon={<IoSearch className="h-5 w-5" />}
                            >
                                Buscar Viagens!
                            </Button>
                            : <Button
                                preset="unstyled"
                                contentClassName="p-0 m-0"
                                className='bg-sky-400 hover:bg-sky-500 rounded-lg p-0 m-0 w-14 ml-3 focus:outline-none focus:ring text-sm text-center text-white h-9 px-auto font-bold '
                                style={{
                                    transition: 'background-color 200ms, box-shadow 200ms'
                                }}
                            >
                                <IoSearch className="h-5 w-5" />
                            </Button>
                    }
                </div>
            </div >
        </>
    );
}