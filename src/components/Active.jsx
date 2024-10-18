import s from "@/components/Active.module.scss";

function Active({ title, description, img }) {
  return (
    <div className={s.container}>
      <h3>{title}</h3>
      <p>{description}</p>
      <img src={img} alt={title} />
    </div>
  );
}

export default Active;
