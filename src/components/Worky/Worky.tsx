"use client"
import { fadeIn } from '@/utils/motionTransitions'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function Worky() {
    return (
        <motion.div variants={fadeIn('left', 0.5)} initial="hidden" animate="show" exit="hidden " className="bottom-0 right-0 hidden md:inline-block md:absolute -z-1">
            <Image src="/assets/bip.png" width="350" height="350" className="w-full h-full" alt="Worky" />
        </motion.div>
    )
}
