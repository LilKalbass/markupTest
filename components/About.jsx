import React from 'react'
import {AboutCarousel} from "@/components/AboutCarousel";
import {FaArrowRight} from "react-icons/fa";

const aboutData = [
    {
      image: '/assets/about/carousel/aboutItem1.webp',
      buildingType: 'villa',
      name: 'Lorem Ipsum',
    },
    {
        image: '/assets/about/carousel/aboutItem2.webp',
        buildingType: 'villa',
        name: 'Lorem Ipsum',
    },
    {
        image: '/assets/about/carousel/aboutItem3.webp',
        buildingType: 'apartments',
        name: 'Lorem Ipsum',
    },
    {
        image: '/assets/about/carousel/aboutItem4.webp',
        buildingType: 'townhouse',
        name: 'Lloret de Mar',
    },
]

export const About = () => {
    return (
        <section className='pt-[160px] bg-about pb-[80px]'>
            <div className='container mx-auto'>
                <div className='flex flex-col pb-[140px]'>
                    <h2 className='text-[220px] leading-[242px] font-bold z-10 pl-[126px]'>Our projects</h2>
                    <AboutCarousel data = {aboutData}/>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <p className=' max-w-[926px] text-grey-aboutText text-[42px] leading-[40px] font-bold'>
                        <span className='text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining.
                    </p>
                </div>
            </div>
        </section>
    )
}
