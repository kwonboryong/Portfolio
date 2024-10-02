import Header from "@/components/Header";
// import Profile from "@/components/Profile";
import Introduce from "@/components/Introduce";
import s from "./Main.module.scss";

function Main() {
  return (
    <>
      <div>
        <Header />
        <div className={s.container}>
          {/* <div className={s.box}> */}
            {/* <Profile /> */}
            <div className={s.profile}></div>
            <Introduce />
          {/* </div> */}
        </div>
      </div>
    </>
  );
}

export default Main;
