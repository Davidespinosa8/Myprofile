"use client"
import { fadeIn } from '@/utils/motionTransitions'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function AvatarWorks() {

    return (
        <motion.div variants={fadeIn('left', 0.5)} initial="hidden" animate="show" exit="hidden" className="bottom-0 left-0 hidden md:inline-block md:absolute -z-30">
            <Image src="/assets/avatar-4.png" alt="Avatar works" width="250" height="250" className="w-full h-full" />
        </motion.div>
    )
}
