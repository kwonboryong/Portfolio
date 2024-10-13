import SkillCard from "@/components/SkillCard";
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
            <SkillCard
              src1="https://example.develofolio.com/logos/html-5.svg"
              src2="https://example.develofolio.com/logos/css-3.svg"
              title="HTML & CSS"
              subTitle="적당한 수준은 됩니다."
              description="적당한 수준은 됩니다. 어쩌구저쩌구 어쩌구 저쩌구 입니다."
            />
            <SkillCard
              src1="https://example.develofolio.com/logos/javascript.svg"
              src2="https://example.develofolio.com/logos/typescript-icon.svg"
              title="JavaScript & TypeScript"
              subTitle="적당한 수준은 됩니다."
              description="적당한 수준은 됩니다. 어쩌구저쩌구 어쩌구 저쩌구 입니다."
            />
            <SkillCard
              src1="https://example.develofolio.com/logos/react.svg"
              title="React 아이콘"
              subTitle="적당한 수준은 됩니다."
              description="적당한 수준은 됩니다. 어쩌구저쩌구 어쩌구 저쩌구 입니다."
            />
            <SkillCard
              src1="https://example.develofolio.com/logos/nextjs-icon.svg"
              title="Next.js 아이콘"
              subTitle="적당한 수준은 됩니다."
              description="적당한 수준은 됩니다. 어쩌구저쩌구 어쩌구 저쩌구 입니다."
            />
          </div>

          <div className={s.bottomBox}>
            <SkillCard
              src1="https://avatars.githubusercontent.com/u/317889?s=280&v=4"
              title="Sass 아이콘"
              subTitle="적당한 수준은 됩니다."
              description="적당한 수준은 됩니다. 어쩌구저쩌구 어쩌구 저쩌구 입니다."
            />

            <SkillCard
              src1="https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/31/tailwind.png"
              title="Tailwind CSS 아이콘"
              subTitle="적당한 수준은 됩니다."
              description="적당한 수준은 됩니다. 어쩌구저쩌구 어쩌구 저쩌구 입니다."
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default SkillsPage;
