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
          <div className={s.text}>
            <p>끊임없이 성장하는 개발자</p>
            <p>
              <strong>권보령</strong>입니다.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default IntroducePage;
