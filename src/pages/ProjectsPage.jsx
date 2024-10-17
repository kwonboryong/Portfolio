import s from "./ProjectsPage.module.scss";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";

function ProjectsPage() {
  return (
    <>
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
          <h2 className={s.text}>Projects</h2>
          <p className={s.description}>✨프로젝트를 <strong>클릭</strong>하세요!✨</p>
          <Swiper
            className={s.Swiper}
            modules={[Pagination, Scrollbar, A11y]}
            spaceBetween={30}
            slidesPerView={3}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            a11y={{
              prevSlideMessage: "이전 슬라이드",
              nextSlideMessage: "다음 슬라이드",
              firstSlideMessage: "첫 번째 프로젝트 슬라이드입니다",
              lastSlideMessage: "마지막 프로젝트슬라이드입니다",
              paginationBulletMessage: "슬라이드 {{index}}로 이동",
            }}
          >
            <SwiperSlide className={s.SwiperSlide}>
              <Link to="/project/1" className={s.link}>
                <h3>Style Cast</h3>
                <p>날씨 기반 OOTD 추천 애플리케이션</p>
                <div className="swiper-zoom-container">
                  <img
                    src="/assets/styleCastLogo.gif"
                    alt="스타일 캐스트 프로젝트의 로고 gif"
                  />
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide className={s.SwiperSlide}>
              <Link to="/project/2" className={s.link}>
                <h3>티빙(Tving) 클론코딩</h3>
                <p>티빙 사이트 클론코딩 프로젝트</p>
                <div className="swiper-zoom-container">
                  <img
                    src="/assets/TvingMain.gif"
                    alt="티빙 클론코딩 프로젝트 랜딩 gif"
                  />
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide className={s.SwiperSlide}>
              <Link to="/project/3" className={s.link}>
                <h3>Portfolio</h3>
                <p>개인 포트폴리오 사이트 프로젝트</p>
                <div className="swiper-zoom-container">
                  <img src="/assets/profile.jpg" alt="Example" />
                </div>
              </Link>
            </SwiperSlide>
          </Swiper>
        </motion.div>
      </div>
    </>
  );
}

export default ProjectsPage;
