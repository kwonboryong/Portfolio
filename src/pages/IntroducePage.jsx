import s from "./IntroducePage.module.scss";
import { motion } from "framer-motion";

function IntroducePage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{
        ease: "easeInOut",
        duration: 2,
        y: { duration: 1 },
      }}
    >
      <div>
        <div className={s.container}>
          <h1>권보려잉ㅂ니다</h1>
        </div>
      </div>
    </motion.div>
  );
}

export default IntroducePage;
