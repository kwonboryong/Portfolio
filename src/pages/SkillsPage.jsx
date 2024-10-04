import s from "./SkillsPage.module.scss";
import { motion } from "framer-motion";

function SkillsPage() {
  return (
    <div className={s.container}>
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
        <div className={s.text}>
          <h2>What I do</h2>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{
          ease: "easeInOut",
          duration: 2,
          y: { duration: 1 },
        }}
      >
        <div className={s.description}>
          <div className={s.topBox}>
            <div className={s.skill}>
              <div className={s.box}>
                <img
                  src="https://example.develofolio.com/logos/html-5.svg"
                  alt="HTML 아이콘"
                />
                <img
                  src="https://example.develofolio.com/logos/css-3.svg"
                  alt="CSS 아이콘"
                />
              </div>
              <strong>HTML & CSS</strong>
              <div className={s.smallText}>
                <p>적당한 수준은 됩니다.</p>
                <p>적당한 수준은 됩니다. 어쩌구저쩌구 어쩌구 저쩌구 입니다.</p>
              </div>
            </div>

            <div className={s.skill}>
              <div className={s.box}>
                <img
                  src="https://example.develofolio.com/logos/javascript.svg"
                  alt="JavaScript 아이콘"
                />
                <img
                  src="https://example.develofolio.com/logos/typescript-icon.svg"
                  alt="TypeScript 아이콘"
                />
              </div>
              <strong>JavaScript & TypeScript</strong>
              <div className={s.smallText}>
                <p>적당한 수준은 됩니다.</p>
                <p>적당한 수준은 됩니다. 어쩌구저쩌구 어쩌구 저쩌구 입니다.</p>
              </div>
            </div>

            <div className={s.skill}>
              <img
                src="https://example.develofolio.com/logos/react.svg"
                alt="React 아이콘"
              />
              <strong>React</strong>
              <div className={s.smallText}>
                <p>적당한 수준은 됩니다.</p>
                <p>적당한 수준은 됩니다. 어쩌구저쩌구 어쩌구 저쩌구 입니다.</p>
              </div>
            </div>
            <div className={s.skill}>
              <img
                src="https://example.develofolio.com/logos/nextjs-icon.svg"
                alt="Next.js 아이콘"
              />
              <strong>Next.js</strong>
              <div className={s.smallText}>
                <p>적당한 수준은 됩니다.</p>
                <p>적당한 수준은 됩니다. 어쩌구저쩌구 어쩌구 저쩌구 입니다.</p>
              </div>
            </div>
          </div>

          <div className={s.bottomBox}>
            <div className={s.skill}>
              <img
                src="https://avatars.githubusercontent.com/u/317889?s=280&v=4"
                alt="Sass 아이콘"
              />
              <strong>Sass</strong>
              <div className={s.smallText}>
                <p>적당한 수준은 됩니다.</p>
                <p>적당한 수준은 됩니다. 어쩌구저쩌구 어쩌구 저쩌구 입니다.</p>
              </div>
            </div>
            <div className={s.skill}>
              <img
                src="https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/31/tailwind.png"
                alt="Tailwind CSS 아이콘"
              />
              <strong>Tailwind Css</strong>
              <div className={s.smallText}>
                <p>적당한 수준은 됩니다.</p>
                <p>적당한 수준은 됩니다. 어쩌구저쩌구 어쩌구 저쩌구 입니다.</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default SkillsPage;
