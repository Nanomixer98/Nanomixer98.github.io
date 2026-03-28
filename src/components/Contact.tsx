import { motion } from 'framer-motion'
import { HiOutlineMail } from 'react-icons/hi'
import { personalInfo } from '../data/portfolioData'
import { trackEvent } from '../hooks/useAnalytics'

export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass p-10 md:p-16 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="inline-flex p-4 md:mr-4 rounded-2xl bg-gradient-to-br from-emerald-600/20 to-amber-600/20 border border-black/5 dark:border-white/10 mb-6"
          >
            <HiOutlineMail className="text-3xl text-emerald-600 dark:text-emerald-400" />
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold gradient-text inline-block mb-4">
            Let&apos;s Work Together
          </h2>

          <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto mb-8 leading-relaxed">
            Have a project in mind or just want to chat? I&apos;m always open to
            new opportunities and interesting conversations.
          </p>

          <motion.a
            href={`mailto:${personalInfo.email}`}
            onClick={() => trackEvent('contact-click', { action: 'say-hello' })}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-amber-600 text-white font-semibold text-base hover:opacity-90 transition-opacity"
          >
            <HiOutlineMail className="text-xl" />
            Say Hello
          </motion.a>

          <p className="text-gray-400 dark:text-gray-500 text-sm mt-5">{personalInfo.email}</p>
        </motion.div>
      </div>
    </section>
  )
}
