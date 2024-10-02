import s from "./Header.module.scss";
import { motion } from "framer-motion";

function Header() {
  return (
    <div className={s.container}>
      <motion.a
        href="https://github.com/kwonboryong"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <img src="/assets/github.png" alt="github 아이콘" />
        Github
      </motion.a>
      <motion.a
        href="https://tensdiary.tistory.com/"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <img src="/assets/tistory.webp" alt="티스토리 아이콘" />
        Tistory
      </motion.a>
    </div>
  );
}

export default Header;
