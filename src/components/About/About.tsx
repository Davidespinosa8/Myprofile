"use client"

import { motionTransitionsAbout } from "@/utils/motionTransitions";
import { Avatar } from "../Avatar";
import { motion } from 'framer-motion'
import { dataAboutSkills, dataaboutSkills1, dataCounter } from "./About.data";
import CountUp from "react-countup";
import { useState } from "react";
import { BiDownArrow, BiLeftArrow } from "react-icons/bi";

export function About() {
    const [index, setIndex] = useState(0)

    return (
        <div className="items-center min-h-screen px-6 mx-auto align-middle mt-36 md:mt-0 md:flex md:max-w-4xl pb-36 md:pb-0">
            <Avatar />

            <motion.div
                initial={motionTransitionsAbout.initial}
                animate={motionTransitionsAbout.animate}
                transition={motionTransitionsAbout.transition}
            >
                <h1 className="mb-6 md:text-4xl lg:text-5xl">Creando webs con <br /> <span className="text-lime-400">diseños únicos</span></h1>
                <p>Diseño y desarrollo sitios web que impactan. Cada proyecto es una obra de arte digital, combinando creatividad y tecnología. Destaca en línea con nuestra experiencia en desarrollo web. ¿Listo para impresionar? </p>

                <div className="grid justify-between grid-cols-2 gap-3 my-8 md:flex md:grid-cols-4 md:gap-6">
                    {dataCounter.map(({ id, endCounter, text, lineRight, lineRightMobile }) => (
                        <div key={id} className={`${lineRight && 'ltr'}`}>
                            <div className={`${lineRight && 'px-4 border-2 border-transparent md:border-e-gray-100'} ${lineRightMobile && 'border-e-gray-100'}`}>
                                <p className="flex mb-2 text-2xl font-extrabold md:text-4xl text-lime-400">
                                    + <CountUp end={endCounter} start={0} duration={5} />
                                </p>
                                <p className="text-xs uppercase max-w-[100px]">
                                    {text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col mt-10 mb-3 md:flex-row justify-evenly md:mt-28 md:mb-5">
                    {dataAboutSkills.map((dataText, itemIndex) => {
                        const { id, text } = dataText;

                        return (
                            <div
                                key={id}
                                className={`${index === id ? 'text-lime-400 duration-300 transition-all border-lime-400' : 'border-white'} 
                                    cursor-pointer md:text-lg relative px-2 md:px-8 py-4 border-2 rounded-xl flex justify-between items-center my-3`}
                                onClick={() => setIndex(itemIndex)}
                            >
                                <p className="mr-4 text-md md:text-lg">{text}</p>
                                {index === id ? (
                                    <BiDownArrow />
                                ) : (
                                    <BiLeftArrow />
                                )}
                            </div>
                        );
                    })}

                    <div className="cursor-pointer md:text-lg relative px-2 md:px-8 py-4 border-2 rounded-xl flex justify-between items-center my-3"
                        onClick={() => setIndex(dataAboutSkills.length)}
                    >
                        <p className="mr-4 text-md md:text-lg">{dataaboutSkills1[0].text}</p>
                        {index === dataAboutSkills.length ? (
                            <BiDownArrow />
                        ) : (
                            <BiLeftArrow />
                        )}
                    </div>
                </div>

                <div className="max-w-4xl p-4 mx-auto bg-lime-400/20 rounded-xl">
                    {index !== dataAboutSkills.length && (
                        <div>
                            {dataAboutSkills[index].skills.map((items, idx) => (
                                <div key={idx} className="flex justify-center max-w-md gap-4 mx-auto">
                                    <span>{items.title} {" "} </span> - <span>{items.date}</span>
                                </div>
                            ))}
                        </div>
                    )}
                    {index === dataAboutSkills.length && (
                        <div className="max-w-md mx-auto">
                            <div className="flex flex-wrap justify-center gap-4">
                                {dataaboutSkills1[0].skills.map((items, idx) => (
                                    <span key={idx} className="mr-2 mb-2">
                                        {items.icon}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </motion.div>
        </div>
    )
}

