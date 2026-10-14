"use client"

import { motion } from "framer-motion"
import { cardContent } from "./Work.data"
import Link from "next/link"

export function Work() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#191629] via-[#262044] to-[#131424] px-5 pb-32 pt-36 text-white md:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="mb-12 max-w-3xl"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-lime-400">Portfolio · Desarrollo web</p>
          <h1 className="mb-5 text-3xl font-semibold leading-tight md:text-5xl">
            Mis <span className="text-lime-400">proyectos</span>
          </h1>
          <p className="text-base leading-relaxed text-white/70 md:text-lg">
            Una selección de sitios web y plataformas que desarrollé para marcas,
            negocios y proyectos digitales. Explorá cada trabajo y conocé su resultado.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 xl:grid-cols-3">
          {cardContent.map(({ id, title, imageUrl, link, description, skills, linkLabel }, index) => (
            <motion.article
              key={id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: Math.min(index * 0.06, 0.3), duration: 0.4 }}
              className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] shadow-xl transition-colors hover:border-lime-400/50"
            >
              <div
                className={`relative flex h-52 items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat ${!imageUrl ? "bg-gradient-to-br from-lime-500/20 via-[#343059] to-[#141627]" : ""}`}
                style={imageUrl ? { backgroundImage: `url(/assets/${imageUrl.startsWith("/") ? imageUrl.slice(1) : imageUrl})` } : undefined}
                role="img"
                aria-label={`Vista previa de ${title}`}
              >
                {!imageUrl && (
                  <div className="flex flex-col items-center gap-3 text-center">
                    <span className="text-5xl font-bold tracking-tight text-lime-400">{title === "Golden Gym" ? "GG" : "TC"}</span>
                    <span className="text-xl font-semibold tracking-[0.2em]">{title.toUpperCase()}</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#151525]/70 to-transparent" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h2 className="mb-3 text-xl font-semibold">{title}</h2>
                <p className="mb-5 flex-1 text-sm leading-relaxed text-white/70">{description}</p>
                <div className="mb-6 flex flex-wrap items-center gap-4 text-white/75" aria-label="Tecnologías usadas">
                  {skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="transition-colors group-hover:text-lime-400">{skill.icon}</span>
                  ))}
                </div>
                <Link
                  href={link.trim()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-2 rounded-xl border border-lime-400 px-5 py-3 text-sm font-semibold text-lime-400 transition-colors hover:bg-lime-400 hover:text-[#131424] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-400"
                >
                  {linkLabel ?? "Ver sitio web"} <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
        <p className="mt-10 text-sm text-white/50">Cada proyecto refleja una solución distinta; algunos sitios pueden continuar en evolución.</p>
      </div>
    </section>
  )
}
