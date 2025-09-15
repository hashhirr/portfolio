import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const StarWrapper = (Component, idName, options = {}) =>
  function HOC() {
    const paddingClass = options.compact ? `${styles.paddingX} sm:py-10 py-6` : styles.padding;
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${paddingClass} max-w-7xl mx-auto relative z-0`}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        <Component />

        <div className='mt-12 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent' />
      </motion.section>
    );
  };

export default StarWrapper;
