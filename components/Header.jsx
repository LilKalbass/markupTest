import React from 'react'
import {Nav} from "@/components/Nav";
import Image from "next/image";

export const Header = () => {
    return (
        <header className='pt-[20px] absolute w-full'>
            <div className='container mx-auto flex md:flex-row ph:flex-col items-center justify-between ph:gap-y-3 md:gap-y-0'>
                <div>
                    <Image src='/assets/Logo.svg' alt='qwe' width={226} height={126}/>
                </div>
                <Nav/>
                <button className='bg-white px-[10px] py-[12px] rounded-full bg-transparent text-[16px] leading-[16px] text-grey-textButton uppercase'>
                        en
                </button>
            </div>
        </header>
    )
}
