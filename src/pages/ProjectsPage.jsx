import s from "./ProjectsPage.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function ProjectsPage() {
  const [selectedId, setSelectedId] = useState(null);

  // 예시로 사용할 카드 데이터
  const items = [
    { id: 1, title: "Project 1", subtitle: "Subtitle 1", description: "This is project 1 details." },
    { id: 2, title: "Project 2", subtitle: "Subtitle 2", description: "This is project 2 details." },
    { id: 3, title: "Project 3", subtitle: "Subtitle 3", description: "This is project 3 details." },
  ];

  const selectedItem = items.find(item => item.id === selectedId);

  return (
    <>
      <div className={s.container}>
        <h1>Projects</h1>

        <div className={s.cards}>
          {items.map((item) => (
            <motion.div
              key={item.id}
              layoutId={item.id.toString()}
              onClick={() => setSelectedId(item.id)}
              className={s.card}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <motion.h2>{item.title}</motion.h2>
              <motion.h5>{item.subtitle}</motion.h5>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedId && (
            <motion.div
              className={s.modalBackground}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className={s.modalContent}
                layoutId={selectedId.toString()}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <motion.h2>{selectedItem.title}</motion.h2>
                <motion.h5>{selectedItem.subtitle}</motion.h5>
                <p>{selectedItem.description}</p>
                <motion.button onClick={() => setSelectedId(null)}>Close</motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default ProjectsPage;
