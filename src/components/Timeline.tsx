import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { timeline } from "../data/portfolioData";
import { useLanguage } from "../hooks/useLanguage";
import type { TimelineItemData } from "../types";

function TimelineItem({
  item,
  index,
}: {
  item: TimelineItemData;
  index: number;
}) {
  const isEducation = item.role.toLowerCase().includes("bachelor");
  const Icon = isEducation ? FaGraduationCap : FaBriefcase;
  const isLeft = index % 2 === 0;

  return (
    <div className="relative flex md:items-center md:justify-between group">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
        className="absolute left-5 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-linear-to-br from-emerald-500 to-amber-500 z-10"
        style={{
          borderWidth: 4,
          borderStyle: "solid",
          borderColor: "var(--dot-border)",
        }}
      />

      <div
        className={`hidden md:block md:w-[calc(50%-2rem)] ${
          isLeft ? "order-2" : "order-1"
        }`}
      />

      <motion.div
        initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
          isLeft ? "md:order-1 md:text-right" : "md:order-2"
        }`}
        data-cuelume-hover="whisper"
      >
        <div className="glass glass-hover p-5 md:p-6">
          <div
            className={`flex items-center gap-3 mb-2 ${
              isLeft ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="p-2 rounded-lg bg-linear-to-br from-emerald-600/20 to-amber-600/20 border border-black/5 dark:border-white/10">
              <Icon className="text-sm text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              >
                {item.company}
              </a>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {item.role}
              </p>
            </div>
          </div>

          <p className="text-xs text-emerald-600/80 dark:text-emerald-400/80 font-medium mb-3">
            {item.date}
          </p>

          {item.tags.length > 0 && (
            <div
              className={`flex flex-wrap gap-1.5 ${
                isLeft ? "md:justify-end" : ""
              }`}
            >
              {item.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="text-[11px] px-2 py-0.5 rounded-md bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 text-gray-500 dark:text-gray-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default function Timeline() {
  const { t } = useLanguage();
  return (
    <section id="timeline" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text inline-block">
            {t("timeline.title")}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-3">
            {t("timeline.subtitle")}
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-5 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-linear-to-b from-emerald-500/50 via-teal-500/30 to-transparent" />

          <div className="flex flex-col gap-8">
            {timeline.map((item, i) => (
              <TimelineItem
                key={`${item.company}-${item.role}`}
                item={item}
                index={i}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
