import s from "./ProjectsPage.module.scss";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

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
          <Swiper
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
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide className={s.SwiperSlide}>
              Slide 1
              <div className="swiper-zoom-container">
                <img src="/assets/profile.jpg" alt="Example" />
              </div>
            </SwiperSlide>
            <SwiperSlide className={s.SwiperSlide}>
              Slide 1
              <div className="swiper-zoom-container">
                <img src="/assets/profile.jpg" alt="Example" />
              </div>
            </SwiperSlide>
            <SwiperSlide className={s.SwiperSlide}>
              Slide 1
              <div className="swiper-zoom-container">
                <img src="/assets/profile.jpg" alt="Example" />
              </div>
            </SwiperSlide>
            <SwiperSlide className={s.SwiperSlide}>
              Slide 1
              <div className="swiper-zoom-container">
                <img src="/assets/profile.jpg" alt="Example" />
              </div>
            </SwiperSlide>
          </Swiper>
        </motion.div>
      </div>
    </>
  );
}

export default ProjectsPage;
