import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './MagicButton'
import { FaLocationArrow } from "react-icons/fa6";
import Image from 'next/image';

const Hero = () => {
    return (
        <section id="home">
            <div className="pb-20 pt-36 relative">
                <div>
                    <Spotlight
                        className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
                        fill="white"
                    />
                    <Spotlight
                        className="h-[80vh] w-[50vw] top-10 left-full"
                        fill="purple"
                    />
                    <Spotlight
                        className="left-80 top-28 h-[80vh] w-[50vw]"
                        fill="blue"
                    />
                </div>
                <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] absolute top-0 left-0 flex items-center justify-center">
                    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
                </div>
                <div className="flex flex-col md:flex-row justify-between relative my-20 z-10 md:space-x-8">
                    <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center md:items-start justify-center">
                        <p className="uppercase tracking-widest text-sm text-center md:text-left text-blue-100 max-w-80">
                            Hello, My Name Is
                        </p>
                        <TextGenerateEffect
                            words="Andereyan Muhammat"
                            className="text-center md:text-left text-[40px] md:text-5xl lg:text-6xl lg:text-wrap md:text-nowrap"
                        />
                        <p className="text-center md:text-left md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
                            I&apos;m a Editor, Designer and Website Developer Freelancer based in Indonesia.
                        </p>
                    </div>
                    <div className="flex justify-center items-center pt-0">
                        <Image
                            src="/Profile.jpg"
                            alt="Profile"
                            width={1000}
                            height={1000}
                            className="w-[80%] lg:w-full md:w-full object-cover rounded-[1.25rem] bg-white"
                        />
                    </div>
                </div>
                <div className="flex justify-center items-center max-w-[89vw]">
                    <a href="#about">
                        <MagicButton
                            title="Show my work"
                            icon={<FaLocationArrow />}
                            position="right"
                        />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero
