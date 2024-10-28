import s from "./IntroducePage.module.scss";
import { motion } from "framer-motion";
import Active from "@/components/Active";

function IntroducePage() {
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
          <p>
            끊임없이 성장하는 개발자 <br /> <strong>권보령</strong>입니다.
          </p>
        </div>
        <div className={s.contentBox}>
          <div className={s.description}>
            <p>
              ✅ 관심이 생기면 무엇이든 빠르게 도전하고 실행하는 것을 즐깁니다.
            </p>
            <p>
              ✅ 복잡한 문제를 분석하고 해결책을 찾는 데에 열정을 가지고
              있습니다.
            </p>
            <p>✅ 항상 사용자 편의와 접근성을 최우선으로 생각합니다.</p>
            <p>
              ✅ 팀원들과 함께 성장하고 발전하는 경험을 중요하게 생각합니다.
            </p>
            <p>✅ 어제보다 더 나은 사람이 되기 위해 끊임없이 노력합니다.</p>
          </div>

          <div className={s.a}>
            <Active
              title="멋쟁이 사자처럼"
              description="5개월 간의 부트캠프 교육"
              img="d"
            />
            <Active
              title="CS 스터디"
              description="5개월 간의 부트캠프 교육"
              img="d"
            />
            <Active
              title="JS 스터디"
              description="5개월 간의 부트캠프 교육"
              img="d"
            />
            <Active
              title="TS 스터디"
              description="5개월 간의 부트캠프 교육"
              img="d"
            />
            <Active
              title="알고리즘 스터디"
              description="5개월 간의 부트캠프 교육"
              img="d"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default IntroducePage;
