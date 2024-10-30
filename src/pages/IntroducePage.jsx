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
              src="https://tensdiary.tistory.com/entry/%F0%9F%A5%8A-%EB%A9%8B%EC%82%AC-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EC%8A%A4%EC%BF%A8-10%EA%B8%B0-EP-2-%EC%88%98%EB%A3%8C-%ED%9A%8C%EA%B3%A0"
              title="멋쟁이 사자처럼"
              description="프론트엔드 핵심 기술을 배우는 부트캠프"
              img="d"
            />
            <Active
              src="https://github.com/kwonboryong/CS-study"
              title="CS 스터디"
              description="컴퓨터 과학 도서 기반 토론 스터디"
              img="d"
            />
            <Active
              src="https://github.com/FE-JS-Deep-Dive/js-deep-dive"
              title="JS 스터디"
              description="자바스크립트 도서를 공부하고 발표하며 공부하는 스터디"
              img="d"
            />
            <Active
              src="https://github.com/kwonboryong/TS-study"
              title="TS 스터디"
              description="타입스크립트 도서 기반 발표 스터디"
              img="d"
            />
            <Active
              src="https://github.com/kwonboryong/Algorithm-study"
              title="알고리즘 스터디"
              description="매일 알고리즘 문제를 풀고, 오답 노트를 작성하는 스터디"
              img="d"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default IntroducePage;
