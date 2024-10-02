import s from "./Header.module.scss";
import { motion } from "framer-motion";

function Header() {
  return (
    <div className={s.container}>
      <div className={s.leftbox}>
        <motion.a
          href="https://github.com/kwonboryong"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.2,
            background: "radial-gradient(circle, #F3F781 0%, #FFFFFF 100%)",
          }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
          // transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Github
        </motion.a>
        <motion.a
          className="box"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <a
            href="https://tensdiary.tistory.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tistory
          </a>
        </motion.a>
      </div>

      <div className={s.rightbox}>
        <a href="">Introduce</a>
        <a href="">Skills</a>
        <a href="">Projects</a>
      </div>
    </div>
  );
}

export default Header;
