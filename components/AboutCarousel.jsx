'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import {FaArrowRightLong} from "react-icons/fa6";

export const AboutCarousel = ({ data }) => {
    console.log(data)
    return (
        <div className="relative">
            <Swiper
                spaceBetween={40}
                slidesPerView={3}
            >
                {data.map((item, index) => (
                    <SwiperSlide key={index} className="bg-cover flex flex-col ">
                        <Image src={item.image} alt={item.name} width={600} height={600} />
                        <div className="absolute bottom-[60px] left-[60px]">
                            <span className="uppercase text-[10px] leading-[24px] font-bold">{item.buildingType}</span>
                            <h3 className="text-[48px] leading-[64px] font-bold">{item.name}</h3>
                        </div>
                        <button className="absolute bottom-[60px] right-[60px] p-[24px] bg-yellow">
                            <FaArrowRightLong className='text-2xl text-black'/>
                        </button>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
