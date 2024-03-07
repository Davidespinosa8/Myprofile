import { fadeIn } from '@/utils/motionTransitions'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function Introduction() {
    return (
        <div className="bg-[#131424]/60 w-full z-10">
            <div className="w-full h-full bg-gradient-to-r from-[#131424]/10 via-black/30 to-black/10">
                <div className="container grid items-center h-full px-5 mx-auto md:grid-cols-2 md:text-left">
                    <motion.div className="hidden w-auto h-auto mx-auto md:block"
                        variants={fadeIn('right', 0.5)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                    >
                        <Image src="/assets/avata-3.png" priority width="300" height="175" alt="Avatar" />
                    </motion.div>

                    <motion.div variants={fadeIn("left", 0.5)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                    >
                        <h1 className="mb-5 text-3xl leading-tight md:mb-20">Si puedes pensarlo,  <br />
                            <span className="text-lime-400">puedes programarlo</span></h1>
                        <p className="max-w-sm  mb-10 text-xl md:max-w-l md:mx-0 md:mb-16 md:text-xl">
                            Mi nombre es David Espinosa soy Desarrollador frontend, tengo 35 años y soy de Argentina
                        </p>

                        <div className="flex flex-col items-center gap-3 md:gap-10 md:flex-row">
                            <a href="https://myprofile-delta-roan.vercel.app/works" target="_blank" className="px-6 py-3 my-2 transition-all border-2 cursor-pointer w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                                Mis proyectos
                            </a>
                            <a href="mailto:ddavidespinosa8@gmail.com" target="_blank" className="px-6 py-3 my-2 transition-all border-2 cursor-pointer text-lime-400 border-lime-400 rounded-xl hover:shadow-xl hover:shadow-lime-400">
                                Contacta conmigo
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
