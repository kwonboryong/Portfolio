import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Main from "@/pages/Main";
import IntroducePage from "@/pages/IntroducePage";
import SkillsPage from "@/pages/SkillsPage";
import ProjectsPage from "@/pages/ProjectsPage";

function HomePage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  return (
    <div>
      <motion.div
        style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: -100 }}
      >
        <Main />
      </motion.div>

      <div ref={ref} style={{ marginTop: "100vh" }}>
        <motion.div
          style={{
            y: useTransform(scrollYProgress, [0, 1], [0, 0]),
            // transition: "y 0.5s ease-out",
          }}
        >
          <IntroducePage />
          <SkillsPage />
          <ProjectsPage />
        </motion.div>
      </div>
    </div>
  );
}

export default HomePage;
