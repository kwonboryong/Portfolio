import PropTypes from "prop-types";
import s from "./SkillCard.module.scss";

function SkillCard({
  src1,
  src2,
  title,
  subTitle,
  description1,
  description2,
  description3,
}) {
  return (
    <>
      <div className={s.skill}>
        <div className={s.box}>
          <img src={src1} alt={title} />
          {src2 ? <img src={src2} alt={title} /> : null}
        </div>
        <strong>{title}</strong>
        <div className={s.smallText}>
          <p className={s.subTitle}>{subTitle}</p>
          <div className={s.description}>
            <p>{description1}</p>
            <p>{description2}</p>
            <p>{description3}</p>
          </div>
        </div>
      </div>
    </>
  );
}

SkillCard.propTypes = {
  src1: PropTypes.string.isRequired,
  src2: PropTypes.string,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  description1: PropTypes.string.isRequired,
  description2: PropTypes.string,
  description3: PropTypes.string,
};

export default SkillCard;
