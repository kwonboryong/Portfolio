import PropTypes from "prop-types";
import s from "./SkillCard.module.scss";

function SkillCard({ src1, src2, title, subTitle, description }) {
  return (
    <>
      <div className={s.skill}>
        <div className={s.box}>
          <img src={src1} alt={title} />
          {src2 ? <img src={src2} alt={title} /> : null}
        </div>
        <strong>{title}</strong>
        <div className={s.smallText}>
          <p>{subTitle}</p>
          <p>{description}</p>
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
  description: PropTypes.string.isRequired,
};

export default SkillCard;
