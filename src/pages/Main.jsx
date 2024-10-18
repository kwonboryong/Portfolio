import Header from "@/components/Header";
import Introduce from "@/components/Introduce";
import s from "./Main.module.scss";
import { IoIosArrowDown } from "react-icons/io";

function Main() {
  const stars = [
    { id: 1, top: "7%", left: "25%", rotation: "0deg" },
    { id: 2, top: "20%", left: "2%", rotation: "90deg" },
    { id: 3, top: "22%", left: "40%", rotation: "180deg" },
    { id: 4, top: "5%", left: "75%", rotation: "270deg" },
    { id: 5, top: "17%", left: "85%", rotation: "0deg" },
  ];

  return (
    <>
      <div>
        <Header />
        <div className={s.container}>
          <div className={s.profile}>
            {stars.map((star) => {
              const randomAnimationDuration = Math.random() * (2 - 0.5) + 0.5;
              return (
                <img
                  key={star.id}
                  src="/assets/star.png"
                  alt={`별 ${star.id}`}
                  className={s.star}
                  style={{
                    top: star.top,
                    left: star.left,
                    transform: `rotate(${star.rotation})`,
                    animationDuration: `${randomAnimationDuration}s`,
                  }}
                />
              );
            })}
          </div>
          <Introduce />
        </div>

        <div
          className={s.bounceArrow}
          style={{
            position: "absolute",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <IoIosArrowDown size={50} color="#fff" className={s.bounce} />
          <IoIosArrowDown
            size={50}
            color="#fff"
            style={{ marginTop: "-28px", marginBottom: "15px" }}
          />
        </div>
      </div>
    </>
  );
}

export default Main;
