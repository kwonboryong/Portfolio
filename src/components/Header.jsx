import s from "./Header.module.scss";

function Header() {
  return (
    <div className={s.container}>
      <div className={s.leftbox}>
        <a
          href="https://github.com/kwonboryong"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <a
          href="https://tensdiary.tistory.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tistory
        </a>
      </div>

      <div className={s.rightbox}>
        <a href="">Introduce</a>
        <a href="">Skills</a>
        <a href="">Projects</a>
      </div>
    </div>
  );
}

export default Header;
