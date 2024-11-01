import React from 'react'
import Link from "next/link";
import {FaAngleDown} from "react-icons/fa";

export const Nav = () => {
    return (
        <nav className='flex xl:gap-x-[56px] ph:gap-x-4 font-bold text-[18px] leading-[18px] items-center text-center'>
            <div className='flex items-end gap-x-[10px] cursor-pointer'>
                <Link href='/'>
                    Projects
                </Link>
                <FaAngleDown/>
            </div>
            <Link href='/'>
                About company
            </Link>
            <div className='flex items-end md:gap-x-[10px] ph:gap-x-1 cursor-pointer'>
                <Link href='/'>
                    Cooperation
                </Link>
                <FaAngleDown/>
            </div>
            <Link href='/'>
                Contact us
            </Link>
        </nav>
    )
}
