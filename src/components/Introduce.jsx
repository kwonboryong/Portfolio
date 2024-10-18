import s from "./Introduce.module.scss";
// import { MdOutlineAttachEmail } from "react-icons/md";

function Introduce() {
  return (
    <div className={s.container}>
      <div className={s.title}>
        <h1>권보령</h1>
        <p>끊임없이 성장하는 개발자</p>
        <p className={s.subTitle}>Frontend Developer</p>
      </div>
      <div className={s.description}>
        <p>
          생년월일 &nbsp; &nbsp; 
          <strong>2000.01.31</strong>
        </p>
        <p>
          Email &nbsp; &nbsp; &nbsp; &nbsp;
          <strong>kwonboryong@naver.com</strong>
        </p>
        <p>
          Notion &nbsp; &nbsp; &nbsp;
          <a href="https://huchu.link/DVLqE6F">
            <strong>포트폴리오</strong>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Introduce;
