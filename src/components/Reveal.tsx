import { motion } from 'motion/react'
import { fadeUp, stagger, viewportOnce } from '@/lib/motion'

type RevealProps = Omit<React.ComponentProps<typeof motion.div>, 'variants'> & {
  /** Retard avant l'apparition, en secondes */
  delay?: number
}

/** Fait apparaître son contenu (fondu + glissement) quand il entre dans l'écran. */
export function Reveal({ delay = 0, transition, ...props }: RevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={fadeUp}
      transition={{ delay, ...transition }}
      {...props}
    />
  )
}

/** Liste dont les `RevealItem` apparaissent en cascade. */
export function RevealList(props: Omit<React.ComponentProps<typeof motion.ul>, 'variants'>) {
  return <motion.ul initial="hidden" whileInView="show" viewport={viewportOnce} variants={stagger} {...props} />
}

export function RevealItem(props: Omit<React.ComponentProps<typeof motion.li>, 'variants'>) {
  return <motion.li variants={fadeUp} {...props} />
}
