import s from "./Introduce.module.scss";

function Introduce() {
  return (
    <div className={s.container}>
      <div className={s.title}>
        <h1>권보령</h1>
        <p>끊임없이 성장하는 개발자</p>
        <p className={s.subTitle}>Frontend Developer</p>
      </div>
      <div className={s.description}>
        <p>생년월일 &nbsp; &nbsp; 2000.01.31</p>
        <p>Email &nbsp; &nbsp; &nbsp; &nbsp; kwonboryong@naver.com</p>
        <p>소속 &nbsp; &nbsp; 수정</p>
        <p>야야 &nbsp; &nbsp; 수정정</p>
      </div>
    </div>
  );
}

export default Introduce;
