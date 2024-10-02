import Header from "@/components/Header";
import Profile from "@/components/Profile";
import Introduce from "@/components/Introduce";
import s from "./Main.module.scss";

function Main() {
  return (
    <>
      <div>
        <Header />
        <div className={s.container}>
          {/* <div className={s.box}> */}
            <div className={s.a}>

            <Profile />
            <Introduce />
            </div>
          {/* </div> */}
        </div>
      </div>
    </>
  );
}

export default Main;
