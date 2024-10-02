import Header from "@/components/Header";
import Profile from "@/components/Profile";
import Introduce from "@/components/Introduce";
import s from "./Main.module.scss";
import { motion } from "framer-motion";

function Main() {
  return (
    <>
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
          <Header />
          <div className={s.container}>
            <div className={s.box}>
              <Profile />
              <Introduce />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Main;
