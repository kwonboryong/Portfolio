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
              subTitle="⭐⭐⭐⭐"
              description1="SEO를 고려한 구조 설계"
              description2="CSS 애니메이션과 전환 사용"
              description3="미디어 쿼리를 활용한 반응형 웹 디자인 구현"
            />
            <SkillCard
              src1="https://example.develofolio.com/logos/javascript.svg"
              src2="https://example.develofolio.com/logos/typescript-icon.svg"
              title="JavaScript & TypeScript"
              subTitle="⭐⭐⭐"
              description1="ES6+ 문법을 사용한 코드 설계"
              description2="TypeScript를 통해 안정성 증진"
              description3="인터페이스와 제네릭을 활용하여 데이터 구조 관리"
            />
            <SkillCard
              src1="https://example.develofolio.com/logos/react.svg"
              title="React"
              subTitle="⭐⭐⭐"
              description1="싱글 페이지 애플리케이션(SPA) 구현"
              description2="Zustand를 통해 전역 상태 관리"
              description3="동적 라우팅과 페이지 전환 애니메이션 적용"
            />
            <SkillCard
              src1="https://example.develofolio.com/logos/nextjs-icon.svg"
              title="Next.js"
              subTitle="⭐⭐"
              description1="서버 사이드 렌더링(SSR) 구현"
              description2="간단한 API 라우트 구현"
            />
          </div>

          <div className={s.bottomBox}>
            <SkillCard
              src1="https://avatars.githubusercontent.com/u/317889?s=280&v=4"
              title="Sass"
              subTitle="⭐⭐⭐⭐"
              description1="모듈화된 스타일 관리"
              description2="중첩, 믹스인 등을 사용하여 유지보수성과 확장성 고려"
            />

            <SkillCard
              src1="https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/31/tailwind.png"
              title="Tailwind CSS"
              subTitle="⭐⭐⭐⭐"
              description1="빠르고 일관성 있는 UI 구현"
              description2="반복되는 UI 요소를 컴포넌트화하여 효율적인 스타일링 구현"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default SkillsPage;
