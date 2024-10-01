import s from "./Introduce.module.scss";

function Introduce() {
  return (
    <div className={s.container}>
      <h1 className={s.title}>
        끊임없이 성장하는 개발자 <br />
        <strong>권보령</strong>
        입니다.
      </h1>
      <div className={s.subTitle}>
        <p>
          ✅ 관심이 생기면 무엇이든 빠르게 도전하고 실행하는 것을 즐깁니다.
        </p>
        <p>
          ✅ 복잡한 문제를 분석하고 해결책을 찾는 데에 열정을 가지고 있습니다.
        </p>
        <p>✅ 항상 사용자 편의와 접근성을 최우선으로 생각합니다.</p>
        <p>
          ✅ 협업을 통해 다양한 아이디어와 시각을 나누는 것을 소중히 여깁니다.
        </p>
        <p>✅ 어제보다 더 나은 사람이 되기 위해 끊임없이 노력합니다. </p>
      </div>
    </div>
  );
}

export default Introduce;
