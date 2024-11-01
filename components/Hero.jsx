'use client'

import React from 'react'

import {motion} from "framer-motion";
import {fadeIn} from "@/variants";

export const Hero = () => {
    return (
        <section className='bg-hero flex items-end md:pt-[648px] ph:pt-[320px] pb-[100px]'>
            <div className='container mx-auto items-center ph:justify-center md:justify-between flex md:flex-row ph:flex-col ph:gap-y-6 md:gap-y-0'>
                <motion.div                 variants = {fadeIn('up', 0.2)}
                                            initial = 'hidden'
                                            whileInView = {'show'}
                                            viewport = {{once: false, amount: 0.2}}
                    className='flex flex-col gap-y-[8px] ph:text-center md:text-start transition-all'>
                    <h3 className='font-bold md:text-[24px] md:leading-[24px] ph:text-[18px] ph:leading-[18px]'>Lorem Ipsum is simply dummy text of the printing</h3>
                    <h1 className='font-bold xl:text-[150px] xl:leading-[150px] md:text-[82px] md:leading-[82px] ph:text-[64px] ph:leading-[64px] max-w-sm'>Company Name</h1>
                </motion.div>
                <motion.div                 variants = {fadeIn('up', 0.2)}
                                            initial = 'hidden'
                                            whileInView = {'show'}
                                            viewport = {{once: false, amount: 0.2}}
                    className='flex flex-col md:items-end md:gap-y-[58px] ph:gap-y-8 ph:items-center transition-all'>
                    <h2 className='max-w-[490px] md:text-end ph:text-center font-bold text-[42px] leading-[46px]'>Lorem Ipsum is simply dummy text of the printing <span className='text-yellow '>and typesetting</span> industry.</h2>
                    <button className='px-[62px] py-[20px] font-bold text-grey-textButton text-[16px] leading-[16px] bg-yellow rounded-full'>
                        Select property
                    </button>
                </motion.div>
            </div>
        </section>
    )
}
