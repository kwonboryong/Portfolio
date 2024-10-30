import s from "@/components/Active.module.scss";

function Active({ src, title, description, img }) {
  return (
    <a href={src}>
      <div className={s.container}>
        <div className={s.textBox}>
          <h3 className={s.title}>{title}</h3>
          <p className={s.description}>{description}</p>
        </div>
        <img src={img} alt={title} />
      </div>
    </a>
  );
}

export default Active;
