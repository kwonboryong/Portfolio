import Header from "@/components/Header";
import Profile from "@/components/Profile";
import Introduce from "@/components/Introduce";
import s from "./Main.module.scss";

function Main() {
  return (
    <>
      <Header />
      <div className={s.container}>
        <div className={s.box}>
          <Profile />
          <Introduce />
        </div>
      </div>
    </>
  );
}

export default Main;
